package service;

import javax.inject.Inject;

import br.com.caelum.vraptor.ioc.Component;

import model.Livro;
import dao.LivroDao;

@Component
public class LivroService extends AbstractService<Livro>{

	@Inject
	private LivroDao dao;

	@Override
	public Livro findById(Long id) {
		return dao.findById(id);
	}
	
	@Override
	public void save(Livro livro) {
		dao.save(livro);
	}

	@Override
	public void delete(Livro livro) {
		dao.delete(livro);
	}
}
