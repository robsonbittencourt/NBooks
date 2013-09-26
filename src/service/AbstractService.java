package service;

public abstract class AbstractService <T extends Object> {

	abstract T findById(Long id);
	abstract void delete(T model);
	abstract void save(T model);

}
