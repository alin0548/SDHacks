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


public class Scraper {
    private final String BASE_URL = "http://classes.berkeley.edu/search/class/";
    private final String BETWEEN = "?f[0]=";
    private final String[] filters = {"sm_general_requirement%3A2nd%20Half%20of%20Reading%20%26%20Composition",
            "sm_general_requirement%3A1st%20Half%20of%20Reading%20%26%20Composition",
            "sm_general_requirement%3AAmerican%20Cultures",
            "sm_general_requirement%3AEntry%20Level%20Writing%20Requirement",
            "sm_general_requirement%3AAmerican%20History",
            "sm_general_requirement%3AAmerican%20Institutions",
            "sm_breadth_reqirement%3ASocial%20%26%20Behavioral%20Sciences",
            "sm_breadth_reqirement%3AHistorical%20Studies",
            "sm_breadth_reqirement%3AArts%20%26%20Literature",
            "sm_breadth_reqirement%3APhilosophy%20%26%20Values",
            "sm_breadth_reqirement%3APhysical%20Science",
            "sm_breadth_reqirement%3AInternational%20Studies",
            "sm_breadth_reqirement%3ABiological%20Science"};
    private final String[] requirements = {"R1B","R1A","AC","ELW","AH","AI","SBS","HS","AL","PV","PS","IS","BS"};
    public static void main(String[] args) {
        new Scraper().run();
        
    }
    public void run() {
        try {
            System.setProperty("webdriver.chrome.driver", "C:/Users/Alex/Downloads/chromedriver_win32/chromedriver.exe");
            WebDriver wDriver = new ChromeDriver();
            for(int i = 0; i < requirements.length; i++) {
                BufferedWriter dataWriter = new BufferedWriter(new FileWriter(requirements[i].toLowerCase()+".txt"));
                dataWriter.write("{");
                //wDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                wDriver.get(BASE_URL+BETWEEN+filters[i]);
                List<WebElement> button = wDriver.findElements(By.className("load-more-button"));
                try {
                    while(!button.isEmpty()) {
                        button.get(0).click();
                        button = wDriver.findElements(By.className("load-more-button"));
                        Thread.sleep(2000);
                    }
                } catch(org.openqa.selenium.StaleElementReferenceException e) {
                }
                List<WebElement> wElements = wDriver.findElements(By.className("search-result"));
                Set<String> distinct = new TreeSet<>();
                for (WebElement we:wElements) {
                    String[] parts = we.findElement(By.className("display-title")).getText().split(" ");
                    distinct.add(parts[0]+" "+parts[1]);
                }
                dataWriter.write("\""+requirements[i]+"\":[");
                String[] distArr = distinct.toArray(new String[distinct.size()]);
                for(int j = 0; j < distArr.length; j++) {
                    dataWriter.write("\""+distArr[j]+"\"");
                    if(j!=distArr.length-1) {
                        dataWriter.write(",");
                    }
                }
                dataWriter.write("]");
                dataWriter.close();
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
