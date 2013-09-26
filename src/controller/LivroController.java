package controller;

import javax.inject.Inject;

import service.LivroService;

import model.Livro;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;

@Resource
public class LivroController {
	
	@Inject
	private Result result;
	@Inject
	private LivroService service;

	@Get("/livro/add")
	public void add() {
		Livro livro = new Livro();
		livro.setTitulo("Harry Potter");
		result.forwardTo(this).form(livro);
	}
	
	@Post("/livro/save")
	public void save(Livro livro) {
		service.save(livro);
		result.forwardTo(this).form(livro);
	}
	
	@Post("/livro/delete")
	public void delete(Livro livro){
		service.delete(livro);
	}
	
	public void form(Livro livro) {
		result.include("livro", livro);
	}
}
