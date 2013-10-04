/**
* User Routes module
*    these routes require authenticated users
*/
var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , UserList = mongoose.model('UserList')
  , VerifyCode = mongoose.model('VerifyCode')
  , MessageThread = mongoose.model('MessageThread')
  , ObjectId = mongoose.Types.ObjectId
  , restify = require('restify');

var mail = {};

module.exports = function (app, config, auth, mailHelper) {
   mail = mailHelper;

  /**
   * This function is responsible for searching and returning multiple users
   *
   * @param request includes the fields to create a UserList object
   * @param response contains a populated UserList object
   * @param next method
   */
   function searchUsers(req, res, next) {
      var userList = new UserList(req.params);

      var pageNum = userList.pageNumber;
      var itemsPerPage = userList.itemsPerPage;

      if (itemsPerPage <= 0 || pageNum <= 0) {
         itemsPerPage = 999999999999;
         pageNum = 1;
      }
      pageNum = pageNum - 1;

      User.count({}, function(err, count) {
           if (!err) {
            userList.pageCount = Math.ceil(count / itemsPerPage);

         var sortStr = "";
         if (userList.sortField != null && userList.sortField != '') {
            if ('false' === userList.ascendingSortFlag) {
               sortStr = "-" + userList.sortField;
            } else {
               sortStr = userList.sortField;
            }
         }

        // NOTE This sort query is really inefficient, always queries the three columns
        var query = User.find({ username: { $regex: userList.username, $options: 'imx' }, name: { $regex: userList.name, $options: 'imx' }, email: { $regex: userList.email, $options: 'imx' } });

         if (sortStr.length > 0) {
            query = query.sort(sortStr)
         }
         if (itemsPerPage > 0) {
            query = query.limit(itemsPerPage).skip(itemsPerPage * pageNum);
         }
         query.exec(function(err, users) {
               if (!err) {
                  userList.users = users;
                  res.send(userList);
                  return next();
               } else {
                  var errObj = err;
                  if (err.err) errObj = err.err;
                  return next(new restify.InternalError(errObj));
               }
            });
         } else {
                  var errObj = err;
                  if (err.err) errObj = err.err;
                  return next(new restify.InternalError(errObj));
         }
      });
     return;
   }

  /**
   * Gateway request routes to other functions based on params
   * Search for a user by id or username
   * if none given get the logged in user's information
   *
   * @param request can include an id, a username or no search param
   * @param response contains a populated User object
   * @param next method
   */
   function buscarLivro(req, res, next) {
      if (req.session && req.session.user) {
        id = req.session.user;
         User.findById(id, function (err, user) {
            if (!err) {
              res.send(user);
              return next();
            } else {
                  var errObj = err;
                  if (err.err) errObj = err.err;
                  return next(new restify.InternalError(errObj));
            }
         });
      } else {
        return next(new restify.MissingParameterError('No search params sent.'));
      }
   }


  /**
   * Search for a user by id or username
   *
   * @param request path includes an id or username
   * @param response contains a populated User object
   * @param next method
   */
   function getUserByIdOrUsername(req, res, next) {
     var search = req.url;
     search = search.substring(search.lastIndexOf("/")+1);
      if (search != null && search != '') {
         var query = User.where( 'username', new RegExp('^'+search+'$', 'i') );
         query.findOne(function (err, user) {
            if (!err) {
               if (user) {
                  res.send(user);
               } else {
                 User.findById(search, function (err, user) {
                    if (!err) {
                      res.send(user);
                    } else {
                      res.send(new restify.MissingParameterError('User not found.'));
                    }
                    return next();
                 });
               }
            } else {
                  var errObj = err;
                  if (err.err) errObj = err.err;
                  return next(new restify.InternalError(errObj));
            }
         });
      } else {
         return next(new restify.MissingParameterError('Username or ID required.'));
      }
   }

  /**
   * Modify an existing user with matching id
   *
   * @param request
   * @param response
   * @param next method
   */
   function putUser(req, res, next) {
      if (req.session && req.session.user) {
        if (req.params.id == req.session.user) {
          User.findById(req.params.id, function (err, user) {
             if (!err) {
                // only change data if submit supplied it
                if (req.params.name) {
                  user.name = req.params.name;
                }
                if (req.params.username) {
                  user.username = req.params.username;
                }

                putUserValidations(req, res, next, user);

                if (req.params.role) {
                  user.role = req.params.role;
                  if (user.role == 'Admin' && !config.openUserSignup) {
                    //TODO allow admin to modify create/modify a user with Admin access
                    return next(new restify.MissingParameterError('You cannot change this user to an Administrator.'));
                  }
                }

                if (user.newEmail) {
                    var queryObj = {$or :[{'email': new RegExp('^'+user.newEmail+'$', 'i')}, {'newEmail': new RegExp('^'+user.newEmail+'$', 'i')}]};
                    User.count(queryObj, function (err, count) {
                    if (!err) {
                      if (count === 0) {
                            saveUser(req, res, next, user);
                         } else {
                            return next(new restify.InternalError('Email already in use.'));
                         }
                      } else {
                        var errObj = err;
                        if (err.err) errObj = err.err;
                        return next(new restify.InternalError(errObj));
                      }
                   });
                } else {
                  saveUser(req, res, next, user);
                }

             } else {
                return next(new restify.MissingParameterError('ObjectId required.'));
             }
          });
        } else {
          return next(new restify.MissingParameterError('User can only update their own information.'));
        }
      }
   }
  /**
   * Admin: Modify an existing user
   *
   * @param request
   * @param response
   * @param next method
   */
   function putUserByAdmin(req, res, next) {
      User.findById(req.params.id, function (err, user) {
         if (!err) {
            // only change data if submit supplied it
            if (req.params.name) {
              user.name = req.params.name;
            }
            if (req.params.username) {
              user.username = req.params.username;
            }

            putUserValidations(req, res, next, user);

            if (user.newEmail) {
                var queryObj = {$or :[{'email': new RegExp('^'+user.newEmail+'$', 'i')}, {'newEmail': new RegExp('^'+user.newEmail+'$', 'i')}]};
                User.count(queryObj, function (err, count) {
                if (!err) {
                  if (count === 0) {
                        saveUser(req, res, next, user);
                     } else {
                        return next(new restify.InternalError('Email already in use.'));
                     }
                  } else {
                    var errObj = err;
                    if (err.err) errObj = err.err;
                    return next(new restify.InternalError(errObj));
                  }
               });
            } else {
              saveUser(req, res, next, user);
            }

         } else {
            return next(new restify.MissingParameterError('ObjectId required.'));
         }
      });
   }
  function putUserValidations(req, res, next, user) {
      // validations
      if (req.params.email) {
        if (!mail.validateEmail(req.params.email)) {
          return next(new restify.MissingParameterError('Please enter a valid email address.'));
        } else {
          user.newEmail = req.params.email;
        }
      }
      if (req.params.password) {
        if (req.params.password != req.params.vPassword) {
          return next(new restify.MissingParameterError('Password and Verify Password must match.'));
        }
        if (req.params.password && !req.params.cPassword) {
          return next(new restify.MissingParameterError('You must enter your current password to verify.'));
        }
        if (req.params.cPassword) {
          if (!user.authenticate(req.params.cPassword)) {
            return next(new restify.MissingParameterError('You must enter your current password to verify.'));
          }
          user.tempPasswordFlag = true;
          user.password = req.params.password;
        }
      }
  }
   /** helper function to execute the save */
  function saveUser(req, res, next, user) {
      user.save(function (err) {
        if (!err) {
          res.send(user);
          // generate and send a verification code to swap email address
          if (user.newEmail) {
            // TODO When messaging is available, add a system message to the user telling them to check their email to verify the email address
            mail.generateVerifyCodeUpdatedEmail(req, res, next, user);
          }
          return next();
        } else {
          var errObj = err;
          if (err.err) errObj = err.err;
          return next(new restify.InternalError(errObj));
        }
      });
  }

  /**
   * Delete an existing user with matching id
   *
   * @param request
   * @param response
   * @param next method
   */
   function deleteUser(req, res, next) {
     if (req.session && req.session.user) {
       if (req.session.user == req.params.id) {
         return next(new restify.InvalidArgumentError('User cannot delete themselves.'));
       }
        User.findById(req.params.id).remove(function (err) {
          if (!err) {
           res.send({});
           return next();
          } else {
           return next(new restify.MissingParameterError('ObjectId required.'));
          }
        });
      }
   }
     
   app.get('/api/livros', buscarLivros;
   app.get('/api/livros/:id', buscarLivroPorId);
   app.post('/api/livros', criarLivro);
   app.put('/api/livros/:id', atualizarLivro);
   app.del('/api/livros/:id', apagarLivro);

}













