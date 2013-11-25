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
	<div>
        <form action="save" method="post">
        	<fieldset>
	    		<input type="hidden" name="book._id" value="${book._id}">
	    		<label>Título</label>
	    		<input type="text" name="book.title" value="${book.title}"><br>
	    		<label>Autor</label>
	    		<input type="text" name="book.author" value="${book.author}"><br>
	    		<label>Número de Páginas</label>
	    		<input type="text" name="book.pageNumber" value="${book.pageNumber}"><br>
	    		<label>Editora</label>
	    		<input type="text" name="book.publisher" value="${book.publisher}"><br>
	    		<label>Estado</label>
	    		<input type="text" name="book.state" value="${book.state}"><br>
	    		<label>Ano de Publicação</label>
	    		<input type="text" name="book.year" value="${book.year}"><br>
	    		<label>ISBN</label>
	    		<input type="text" name="book.isbn" value="${book.isbn}"><br>
	    		<label>Resumo</label>
	    		<input type="text" name="book.resume" value="${book.resume}"><br>
	    		<label>Notas</label>
	    		<input type="text" name="book.notes" value="${book.notes}"><br>
	    		<label>Quantidade</label>
	    		<input type="text" name="book.quantity" value="${book.quantity}"><br>
	    		
	    		<button type="submit" class="btn btn-primary">Salvar</button>
	    		<button type="submit" class="btn" formaction="/NBooks/index/form">Cancelar</button>
  			</fieldset>
        	</form>
        
            
    </div>
</body>
</html>

	