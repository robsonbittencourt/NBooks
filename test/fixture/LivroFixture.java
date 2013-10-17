package fixture;

import model.Livro;

public class LivroFixture {
	private Livro livro = new Livro();
	
	public static LivroFixture get() {
		return new LivroFixture();
	}
	
	public Livro cria() {
		return this.livro;
	}
}

