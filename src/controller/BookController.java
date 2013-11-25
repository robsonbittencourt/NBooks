package controller;

import javax.inject.Inject;

import service.BookService;

import model.Book;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;

@Resource
public class BookController {
	
	@Inject
	private Result result;
	@Inject
	private BookService service;

	@Get("/book/add")
	public void add() {
		Book book = new Book();
		result.redirectTo(this).form(book);
	}
	
	@Get("/book/edit/{id}")
	public void edit(String id){
		Book book = service.findById(id);
		result.redirectTo(this).form(book);
	}
	
	@Post("/book/save")
	public void save(Book book) {
		if(book.get_id() != null){
			service.edit(book);
		}else{
			service.save(book);
		}	
		result.redirectTo(this).form(book);
	}
	
	public void form(Book book) {
		result.include("book", book);
	}
}
