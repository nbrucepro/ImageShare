package files;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
//Java program for the above approach
import java.util.*;
import java.util.regex.*;
class ExtractLinks {
	// Function to extract all the URL
	// from the string
	public static void extractURL(String str, int lineNbr) {
		List<String> list = new ArrayList<>();
		String regex = "\\b((?:https?|ftp|file):" + "//[-a-zA-Z0-9+&@#/%?=" + "~_|!:, .;]*[-a-zA-Z0-9+" + "&@#/%=~_|])";
		Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
		Matcher m = p.matcher(str);
		while (m.find()) {
			list.add(str.substring(m.start(0), m.end(0)));
		}
		if (list.size() == 0) {
			System.out.println("No link found on line " + lineNbr);
		}
		int x = 0;
		for (String foundUrl : list) {
			if (x == 0)
				System.out.println("Found a link on line " + lineNbr + "..." + foundUrl + "\nStoring it in a file...");
			else
				System.out.println(
						"Found another link on line " + lineNbr + "..." + foundUrl + "\nStoring it in a file...");
			File f1 = new File(
					"C:\\Users\\Isite\\eclipse-workspace\\Net_Programming\\Link_Folders\\Folder_of_line" + lineNbr);
			boolean createFolder = f1.mkdir();
			if (createFolder) {
				try {
					String filePath = "C:\\Users\\Isite\\eclipse-workspace\\Net_Programming\\Link_Folders\\Folder_of_line"
							+ lineNbr + "\\" + x + ".html";
					File newFile = new File(filePath);
					newFile.createNewFile();
					FileWriter myWriter = new FileWriter(filePath);
					try {
						URL url = new URL("https://www.igihe.com/");
						URLConnection igiheConn = url.openConnection();
						BufferedReader reader = new BufferedReader(new InputStreamReader(igiheConn.getInputStream()));
						String line = null;
						while ((line = reader.readLine()) != null) {
							myWriter.write(line);
						}
						System.out.println("Completed creating the file " + x + ".html");
						myWriter.close();
					} catch (Exception e) {
						e.getMessage();
					}
				} catch (Exception e) {
					System.out.println("File creation failed." + e.getMessage());
				}
			} else
				System.out.println("Folder creation failed.");
			x++;
		}
	}
	public static void main(String args[]) {
		try {
			URL url = new URL("https://www.igihe.com/");
			URLConnection igiheConn = url.openConnection();
			BufferedReader reader = new BufferedReader(new InputStreamReader(igiheConn.getInputStream()));
			String line = null;
			int lineNbr = 1;
			while ((line = reader.readLine()) != null) {
				System.out.println("Scanning line " + lineNbr + " for links...");
				extractURL(line, lineNbr);
				lineNbr++;
			}
		} catch (Exception e) {
			e.getMessage();
		}
	}
}package files;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
//Java program for the above approach
import java.util.*;
import java.util.regex.*;
class ExtractLinks {
	// Function to extract all the URL
	// from the string
	public static void extractURL(String str, int lineNbr) {
		List<String> list = new ArrayList<>();
		String regex = "\\b((?:https?|ftp|file):" + "//[-a-zA-Z0-9+&@#/%?=" + "~_|!:, .;]*[-a-zA-Z0-9+" + "&@#/%=~_|])";
		Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
		Matcher m = p.matcher(str);
		while (m.find()) {
			list.add(str.substring(m.start(0), m.end(0)));
		}
		if (list.size() == 0) {
			System.out.println("No link found on line " + lineNbr);
		}
		int x = 0;
		for (String foundUrl : list) {
			if (x == 0)
				System.out.println("Found a link on line " + lineNbr + "..." + foundUrl + "\nStoring it in a file...");
			else
				System.out.println(
						"Found another link on line " + lineNbr + "..." + foundUrl + "\nStoring it in a file...");
			File f1 = new File(
					"C:\\Users\\Isite\\eclipse-workspace\\Net_Programming\\Link_Folders\\Folder_of_line" + lineNbr);
			boolean createFolder = f1.mkdir();
			if (createFolder) {
				try {
					String filePath = "C:\\Users\\Isite\\eclipse-workspace\\Net_Programming\\Link_Folders\\Folder_of_line"
							+ lineNbr + "\\" + x + ".html";
					File newFile = new File(filePath);
					newFile.createNewFile();
					FileWriter myWriter = new FileWriter(filePath);
					try {
						URL url = new URL("https://www.igihe.com/");
						URLConnection igiheConn = url.openConnection();
						BufferedReader reader = new BufferedReader(new InputStreamReader(igiheConn.getInputStream()));
						String line = null;
						while ((line = reader.readLine()) != null) {
							myWriter.write(line);
						}
						System.out.println("Completed creating the file " + x + ".html");
						myWriter.close();
					} catch (Exception e) {
						e.getMessage();
					}
				} catch (Exception e) {
					System.out.println("File creation failed." + e.getMessage());
				}
			} else
				System.out.println("Folder creation failed.");
			x++;
		}
	}
	public static void main(String args[]) {
		try {
			URL url = new URL("https://www.igihe.com/");
			URLConnection igiheConn = url.openConnection();
			BufferedReader reader = new BufferedReader(new InputStreamReader(igiheConn.getInputStream()));
			String line = null;
			int lineNbr = 1;
			while ((line = reader.readLine()) != null) {
				System.out.println("Scanning line " + lineNbr + " for links...");
				extractURL(line, lineNbr);
				lineNbr++;
			}
		} catch (Exception e) {
			e.getMessage();
		}
	}
}