<html>
<head>
<title>NBooks</title>
<link href="/WebContent/WEB-INF/css/bootstrap.min.css" rel="stylesheet" media="screen">
<script src="//code.jquery.com/jquery.js"></script>
<script src="/WebContent/WEB-INF/js/bootstrap.min.js"></script>
    
</head>
<body>
	<div class="navbar navbar-inverse">
        <form action="save" method="post">
        	Título: <input type="text" name="livro.titulo" value="${livro.titulo}"><br>
            Autor: <input type="text" name="livro.autor" value="${livro.autor}"><br>
            Número de Páginas: <input type="text" name="livro.numeroPaginas" value="${livro.numeroPaginas}"><br>
            Editora: <input type="text" name="livro.editora" value="${livro.editora}"><br>
            Estado: <input type="text" name="livro.estado" value="${livro.estado}"><br>
            Ano de Publicação: <input type="text" name="livro.anoPublicacao" value="${livro.anoPublicacao}"><br>
            ISBN: <input type="text" name="livro.isbn" value="${livro.isbn}"><br>
            Resumo: <input type="text" name="livro.resumo" value="${livro.resumo}"><br>
            Notas de Conteúdo: <input type="text" name="livro.notasDeConteudo" value="${livro.notasDeConteudo}"><br>
            Palavras-Chave: <input type="text" name="livro.palavrasChave" value="${livro.palavrasChave}"><br>
            Quantidade: <input type="text" name="livro.quantidade" value="${livro.quantidade}"><br>
            
            <button type="submit">Salvar</button>
            <a class=".btn .btn-default" href="add">Cancelar</a>
        </form>
    </div>
</body>
</html>

	