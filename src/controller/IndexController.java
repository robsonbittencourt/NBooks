package controller;

import java.util.List;

import javax.inject.Inject;

import service.BookService;

import model.Book;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;

@Resource
public class IndexController {
	
	@Inject
	private Result result;
	@Inject
	private BookService service;
	
	@Get("/index")
	public void index() {
		result.redirectTo(this).form();
	}
	
	public void form() {
		List<Book> books = service.findAll(); 
		result.include("books", books);
	}
}
