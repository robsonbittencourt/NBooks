package service;

import model.Livro;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import dao.LivroDao;
import fixture.LivroFixture;
import static helper.Helper.getRandomId;

import static org.mockito.Mockito.verify;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.mockito.BDDMockito.*;

public class LivroServiceTest {
	
	@InjectMocks
	private LivroService service;
	@Mock
	private LivroDao dao;
	
	@Before
	public void setUp() {
		service = new LivroService();
		initMocks(this);
	}
	
	@Test
	public void deveProcurarCorretamenteUmLivroAtravesDoId() {
		Long id = getRandomId();
		given(dao.findById(id)).willReturn(any(Livro.class));
		
		service.findById(id);
		
		verify(dao).findById(id);
	}
	
	@Test
	public void deveSalvarCorretamenteUmLivro() {
		Livro livro = LivroFixture.get().cria();
		
		service.save(livro);
		
		verify(dao).save(livro);
	}
	
	@Test
	public void deveDeletarCorretamenteUmLivro() {
		Livro livro = LivroFixture.get().cria();
		
		service.delete(livro);
		
		verify(dao).delete(livro);
	}

	
}
