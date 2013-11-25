package service;

import java.util.List;

import javax.inject.Inject;

import br.com.caelum.vraptor.ioc.Component;

import model.Book;
import dao.BookDao;

@Component
public class BookService extends AbstractService<Book>{

	private BookDao dao = new BookDao();

	@Override
	public List<Book> findAll() {
		return dao.findAll();
	}
	
	@Override
	public Book findById(String id) {
		return dao.findById(id);
	}
	
	@Override
	public void save(Book book) {
		dao.save(book);
	}

	@Override
	public void edit(Book book) {
		dao.edit(book);
	}

	@Override
	public void delete(Book book) {
		dao.delete(book);
	}
	
}
