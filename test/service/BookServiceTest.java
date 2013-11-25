package service;

import model.Book;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import dao.BookDao;
import fixture.LivroFixture;

import static org.mockito.Mockito.verify;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.mockito.BDDMockito.*;

public class BookServiceTest {
	
	@InjectMocks
	private BookService service;
	@Mock
	private BookDao dao;
	
	@Before
	public void setUp() {
		service = new BookService();
		initMocks(this);
	}
	
	@Test
	public void deveProcurarCorretamenteUmLivroAtravesDoId() {
		String id = "id";
		given(dao.findById(id)).willReturn(any(Book.class));
		
		service.findById(id);
		
		verify(dao).findById(id);
	}
	
	@Test
	public void deveSalvarCorretamenteUmLivro() {
		Book livro = LivroFixture.get().cria();
		
		service.save(livro);
		
		verify(dao).save(livro);
	}
	
	@Test
	public void deveDeletarCorretamenteUmLivro() {
		Book livro = LivroFixture.get().cria();
		
		service.delete(livro);
		
		verify(dao).edit(livro);
	}

	
}
