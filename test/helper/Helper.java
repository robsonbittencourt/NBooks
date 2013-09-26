package helper;

import java.util.Random;


public class Helper {
	
	public static Long getRandomId() {
		return Long.valueOf(new Random().nextInt(9999));
	}
}
