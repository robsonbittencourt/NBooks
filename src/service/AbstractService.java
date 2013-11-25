package service;

import java.util.List;

public abstract class AbstractService <T extends Object> {

	public abstract List<T> findAll();
	public abstract T findById(String id);
	public abstract void edit(T model);
	public abstract void save(T model);
	public abstract void delete(T model);

}
