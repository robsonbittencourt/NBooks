package dao;

import java.util.List;

import com.google.gson.reflect.TypeToken;

import model.Book;

public class BookDao extends AbstractDao<Book> {

	private static final String FIND_ALL_URL = "http://localhost:3000/api/books";
			
	@Override
	public List<Book> findAll() {
		String json = httpResources.doGet(FIND_ALL_URL);
		List<Book> livros = gson.fromJson(json, new TypeToken<List<Book>>() {}.getType());
		return livros;
	}

	@Override
	public Book findById(String id) {
		String url = FIND_ALL_URL + "/" + id;
		String json = httpResources.doGet(url);
		Book livro = gson.fromJson(json, Book.class);
		return livro;
	}

	@Override
	public void save(Book livro) {
		String json = gson.toJson(livro);
		httpResources.doPost(FIND_ALL_URL, json);
	}

	@Override
	public void edit(Book livro) {
		if (livro.get_id() != null) {
			String url = FIND_ALL_URL + "/" + livro.get_id();
			String json = gson.toJson(livro);
			httpResources.doPut(url, json);
		}
	}

	@Override
	public void delete(Book livro) {
		if (livro.get_id() != null) {
			String url = FIND_ALL_URL + "/" + livro.get_id();
			httpResources.doDelete(url);
		}
	}

}
