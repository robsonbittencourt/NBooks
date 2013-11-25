<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>NBooks</title>
    <link href="/NBooks/resource/css/bootstrap.css" rel="stylesheet">
  </head>
	
  <body>
	<div class="jumbotron">
      <div class="container">
        <h1>NBooks</h1>
        <p>Aplicação desenvolvida para a disciplina Tópicos Avançados I.
           Tem por objetivo demonstrar funcionalidades do framework de desenvolvimento web VRaptor.
           Os dados aqui inseridos são persistidos, consultados e editados através de uma API REST.
        </p>
        <p><a href="/NBooks/book/add" class="btn btn-primary btn-large">Novo Livro »</a></p>
      </div>
    </div>

    <div class="container">
      	<div class="row">
			<c:forEach items="${books}" var="book">
		  		<div class="col-md-4">
            		<div class="thumbnail">
		       			<h2>${book.title}</h2>
            			<p>${book.resume}</p>
           				<p><a class="btn btn-primary btn-lg" href="#" role="button">View details &raquo;</a></p>
    	 			</div>
        	  	</div> 
	        </c:forEach>
	      </div>

      <hr>

      <footer>
        <p>Sistemas de Informação - Tópicos Avançados I</p>
      </footer>
    </div> 

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="/dist/js/bootstrap.min.js"></script>
  </body>
</html>
