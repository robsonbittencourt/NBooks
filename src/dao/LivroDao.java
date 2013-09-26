package dao;

import br.com.caelum.vraptor.ioc.Component;
import model.Livro;

@Component
public class LivroDao extends AbstractDao <Livro>{

	@Override
	public Livro findById(Long id) {
		Livro livro = new Livro();
		return livro;
	}

	@Override
	public void save(Livro livro) {
		
	}

	@Override
	public void delete(Livro livro) {
		
	}
}
