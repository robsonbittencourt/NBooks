package dao;

import java.util.List;

import service.HttpResources;


import com.google.gson.Gson;


public abstract class AbstractDao <T extends Object> {
	
	HttpResources httpResources = new HttpResources();
	Gson gson = new Gson();
	
	public abstract List<T> findAll();
	public abstract T findById(String id);
	public abstract void save(T model);
	public abstract void edit(T model);
	public abstract void delete(T model);

}
