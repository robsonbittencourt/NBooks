package service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;

import org.apache.commons.io.IOUtils;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpEntityEnclosingRequestBase;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.HttpResponse;

import br.com.caelum.vraptor.ioc.Component;

public class HttpResources {

	public String doGet(String url) {
		HttpGet getRequest = new HttpGet(url);
		getRequest.addHeader("accept", "application/json");
		return execute(getRequest);
	}
	
	public String doDelete(String url) {
		HttpDelete deleteRequest = new HttpDelete(url);
		deleteRequest.addHeader("accept", "application/json");
		return execute(deleteRequest);
	}

	public String doPost(String url, String content) {
		HttpPost postRequest = new HttpPost(url);
		StringEntity entity = getStringEntity(content);
		postRequest.setEntity(entity);
		return execute(postRequest);
	}

	public String doPut(String url, String content) {
		HttpPut putRequest = new HttpPut(url);
		StringEntity entity = getStringEntity(content);
		putRequest.setEntity(entity);
		return execute(putRequest);
	}

	public StringEntity getStringEntity(String content) {
		StringEntity entity = null;

		try {
			entity = new StringEntity(content);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		entity.setContentType("application/json");
		return entity;
	}

	@SuppressWarnings({ "deprecation", "resource" })
	public String execute(HttpRequestBase requestType) {
		String outputJson = "";
		try {
			DefaultHttpClient httpClient = new DefaultHttpClient();
			HttpResponse response = httpClient.execute(requestType);

			if (response.getStatusLine().getStatusCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatusLine().getStatusCode());
			}

			httpClient.getConnectionManager().shutdown();
			outputJson = getStringFromInputStream(response.getEntity().getContent());
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return outputJson;
	}

	public String getStringFromInputStream(InputStream input) throws IOException {
		StringWriter writer = new StringWriter();
		IOUtils.copy(input, writer, "UTF-8");
		System.out.println(writer.toString());
		return writer.toString();
	}

}
