package model;


public class Livro extends AbstractModel{
	private Long id;
	private Long isbn;	
	private Long editora;
	private String estado;
	private String titulo;
	private Autor autor; 
	private int numeroPaginas;
	private int anoPublicacao;
	private String resumo;
	private String notasDeConteudo;
	private String palavrasChave;
	private Long quantidade;

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getIsbn() {
		return isbn;
	}
	
	public void setIsbn(Long isbn) {
		this.isbn = isbn;
	}
	
	public Long getEditora() {
		return editora;
	}
	
	public void setEditora(Long editora) {
		this.editora = editora;
	}
	
	public String getEstado() {
		return estado;
	}
	
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	public String getTitulo() {
		return titulo;
	}
	
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	public Autor getAutor() {
		return autor;
	}
	
	public void setAutor(Autor autor) {
		this.autor = autor;
	}
	
	public int getNumeroPaginas() {
		return numeroPaginas;
	}
	
	public void setNumeroPaginas(int numeroPaginas) {
		this.numeroPaginas = numeroPaginas;
	}
	
	public int getAnoPublicacao() {
		return anoPublicacao;
	}
	
	public void setAnoPublicacao(int anoPublicacao) {
		this.anoPublicacao = anoPublicacao;
	}
	
	public String getResumo() {
		return resumo;
	}
	
	public void setResumo(String resumo) {
		this.resumo = resumo;
	}
	
	public String getNotasDeConteudo() {
		return notasDeConteudo;
	}
	
	public void setNotasDeConteudo(String notasDeConteudo) {
		this.notasDeConteudo = notasDeConteudo;
	}
	
	public String getPalavrasChave() {
		return palavrasChave;
	}
	
	public void setPalavrasChave(String palavrasChave) {
		this.palavrasChave = palavrasChave;
	}
	
	public Long getQuantidade() {
		return quantidade;
	}
	
	public void setQuantidade(Long quantidade) {
		this.quantidade = quantidade;
	}
}
