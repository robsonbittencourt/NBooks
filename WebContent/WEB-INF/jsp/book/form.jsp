<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>NBooks</title>
    <link href="/NBooks/resource/css/bootstrap.css" rel="stylesheet">
    <link href="/NBooks/resource/css/NBook.css" rel="stylesheet">
  </head>

<body>
	<div class="book-form">
        <form role="form-horizontal" action="save" method="post">
        		<legend>Novo livro</legend>
	    		<input type="hidden" name="book._id" value="${book._id}">
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Título</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.title" value="${book.title}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Autor</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.author" value="${book.author}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Páginas</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.pageNumber" value="${book.pageNumber}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Editora</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.publisher" value="${book.publisher}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Estado</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.state" value="${book.state}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Ano de Publicação</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.year" value="${book.year}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">ISBN</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.isbn" value="${book.isbn}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Resumo</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.resume" value="${book.resume}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Notas</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.notes" value="${book.notes}"><br>
				    </div>
	    		</div>
	    		
	    		<div class="form-group">
	    			<label for="title" class="col-sm-2 control-label">Quantidade</label>
				    <div class="col-sm-10">
				    	<input type="text" class="form-control" id="title" name="book.quantity" value="${book.quantity}"><br>
				    </div>
	    		</div>
   		
	    		<div class="form-group">
    				<div class="col-sm-offset-2 col-sm-10">
      					<button type="submit" class="btn btn-primary">Salvar</button>
	    				<button type="submit" class="btn" formaction="/NBooks/index/form">Cancelar</button>
    				</div>
  				</div>
  				
        	</form>
    </div>
</body>
</html>

	