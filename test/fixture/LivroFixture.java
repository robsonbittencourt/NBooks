package fixture;

import model.Book;

public class LivroFixture {
	private Book livro = new Book();
	
	public static LivroFixture get() {
		return new LivroFixture();
	}
	
	public Book cria() {
		return this.livro;
	}
}

