<html>
<head>
<title>NBooks</title>
</head>
<body>
	It works!! ${livro.titulo}
	
	<div class="adiciona well span3">
        <form action="save" method="post">
        	Título: <input type="text" name="titulo" value="${livro.titulo}"><br>
            <button class="btn btn-primary" type="submit">Salvar</button>
        </form>
    </div>
</body>
</html>