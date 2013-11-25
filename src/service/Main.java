package service;

import java.util.List;

import model.Book;

import com.google.gson.Gson;

import dao.BookDao;


public class Main {

	public static void main(String[] args) {
		
		BookService dao = new BookService();
		Book livro = new Book();
		livro.setAuthor("JK");
		livro.setIsbn(773839392);
		livro.setTitle("VAI CAVALO");
		livro.setPageNumber(100);
		livro.setPublisher("Sextante");
		livro.setResume("Teste");
		livro.setYear(2000);
		dao.save(livro);
		
		System.out.println();
		
		
		
		
		
		
		
		
		
		
//		StringBuffer jSonString = new StringBuffer();
//		jSonString.append("{");
//		jSonString.append("\"id\": 123456,");
//		jSonString.append("\"isbn\": 12345,");
//		jSonString.append("\"editora\": \"Rocco\",");
//		jSonString.append("\"estado\": \"RS\",");
//		jSonString.append("\"titulo\": \"Harry Potter\",");
//		jSonString.append("\"autor\": \"JK\",");
//		jSonString.append("\"numeroPaginas\": 500,");
//		jSonString.append("\"anoPublicacao\": 2001,");
//		jSonString.append("\"resumo\": \"história\",");
//		jSonString.append("\"notasDeConteudo\": \"notas\",");
//		jSonString.append("\"palavrasChave\": \"bruxaria\",");
//		jSonString.append("\"quantidade\": 10");
//		jSonString.append("}");
//		
//		Livro livro2 = new Livro();
//		livro2.setId(12L);
//		livro2.setTitulo("Harry Potter");
//		Gson gson = new Gson();
//		String userJSONString = gson.toJson(livro2);
//		System.out.println(userJSONString);
//		
//		
//		Gson gson = new Gson();
//		Livro livro = gson.fromJson(jSonString.toString(), Livro.class);
//		System.out.println(jSonString.toString());		
	}

}
