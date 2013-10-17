package model;

public class Usuario {
	
	private Long id;
	private String nome;
	private String email;
	private String senha;
	private Boolean cadastrado;
	private String tipo;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public Boolean getCadastrado() {
		return cadastrado;
	}
	
	public void setCadastrado(Boolean cadastrado) {
		this.cadastrado = cadastrado;
	}
	
	public String getTipo() {
		return tipo;
	}
	
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

}
