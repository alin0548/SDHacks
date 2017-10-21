import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Driver;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;
import java.util.concurrent.TimeUnit;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.*;


public class Scraper2 {
    private final String BASE_URL = "http://guide.berkeley.edu/courses/";
    public static void main(String[] args) {
        new Scraper2().run();
        
    }
    public void run() {
        try {
            System.setProperty("webdriver.chrome.driver", "C:/Users/Alex/Downloads/chromedriver_win32/chromedriver.exe");
            WebDriver wDriver = new ChromeDriver();
            wDriver.get(BASE_URL);
            WebElement atoz = wDriver.findElement(By.id("atozindex"));
            List<WebElement> pairs = atoz.findElements(By.tagName("li"));
            BufferedWriter af = new BufferedWriter(new FileWriter("acr_to_full.txt"));
            BufferedWriter fa = new BufferedWriter(new FileWriter("full_to_acr.txt"));
            af.write("{");
            fa.write("{");
            for (int i = 0; i < pairs.size(); i++) {
                String[] cut = pairs.get(i).getText().split("\\(");
                String full = cut[0].trim();
                String acc = cut[1].substring(0, cut[1].length()-1);
                af.write("[\""+acc+"\":"+"\""+full+"\"]");
                fa.write("[\""+full+"\":"+"\""+acc+"\"]");
                if (i!=pairs.size()-1) {
                    af.write(",");
                    fa.write(",");
                }
            }
            af.write("}");
            fa.write("}");
            af.close();
            fa.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
