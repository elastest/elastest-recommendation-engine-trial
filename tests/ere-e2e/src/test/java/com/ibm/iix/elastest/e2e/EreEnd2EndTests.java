/*
(C) Copyright IBM Corp. 2019

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package com.ibm.iix.elastest.e2e;

import static java.lang.System.getProperty;
import static java.util.concurrent.TimeUnit.SECONDS;

import java.net.MalformedURLException;
import java.net.URL;
import java.text.MessageFormat;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.InvalidElementStateException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EreEnd2EndTests {

	public Logger logger = LoggerFactory.getLogger(EreEnd2EndTests.class);
	@Rule
	public TestName name = new TestName();

	protected String ereLocation = "/ere-data/";
	String localUrl = "http://localhost:37000";
	String testEnginesUrlPattern = "{0}/#/test-engines{1}";

	protected String modelName = "GenericModel";

	protected String areaQuery = "test abstract configuration basic features";
	protected String taskQuery = "test get collection";

	protected String similarityT = ".5";
	protected String remoteRepo = "https://github.com/elastest/demo-projects/archive/master.zip";

	String username = "test";
	String password = "test";

	protected WebDriver driver;
	String tormUrl;
	String tormUsername;
	String tormPassword;

	protected static final String CHROME = "chrome";
	protected static final String FIREFOX = "firefox";
	protected static String browserType;

	@Before
	public void setup() throws MalformedURLException {

		logger.info("--------------- SETUP ---------------");
		String tormUrl = getProperty("etmUrl");
		tormUsername = getProperty("etmUsername");
		tormPassword = getProperty("etmPassword");
		String eusApi = System.getenv("ET_EUS_API");
		browserType = System.getProperty("browser");
		logger.info("Browser Type: {}", browserType);
		logger.info("\tEUS API: " + eusApi + "\tTORM URL: " + tormUrl + "\tTORM credentials: " + tormUsername + ":"
				+ tormPassword);
		if (tormUrl == null) {
			tormUrl = localUrl;

		}
		if (eusApi == null) {
			if (browserType == null || browserType.equals(CHROME)) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "/src/test/resources/chromedriver");
				System.out.println(System.getProperty("user.dir") + "/src/test/resources/chromedriver");
				driver = new ChromeDriver();
			} else {
				driver = new FirefoxDriver();
			}

			driver.manage().window().setSize(new Dimension(1024, 800));

		} else {
			DesiredCapabilities capabilities;

			if (browserType == null || browserType.equals(CHROME)) {
				logger.info("Browser Type: {}", browserType);
				capabilities = DesiredCapabilities.chrome();
			} else {
				capabilities = DesiredCapabilities.firefox();
				logger.info("Browser Type: {}", browserType);
			}

			capabilities.setCapability("testName", name.getMethodName());
			driver = new RemoteWebDriver(new URL(eusApi), capabilities);
			driver.manage().window().maximize();
		}

		logger.info("Opening TORM at " + tormUrl);
		if ((tormUsername != null && !tormUsername.isEmpty()) && (tormPassword != null && !tormPassword.isEmpty())) {
			System.out.println("http://" + tormUsername + ":" + tormPassword + "@" + tormUrl.split("//")[1]);
			driver.get("http://" + tormUsername + ":" + tormPassword + "@" + tormUrl.split("//")[1]);
		} else
			driver.manage().timeouts().implicitlyWait(30, SECONDS);
		driver.get(tormUrl);

		try {
			logger.info("Page title: " + driver.getTitle());
			logger.info("Clicking side menu link");
			driver.findElement(By.id("nav_test_engines")).click();
		} catch (Exception e) {
			logger.info("Unable to find side navigation link. Directly accessing test engines url");
			driver.get(MessageFormat.format(testEnginesUrlPattern, tormUrl));
		}

		logger.info("Page title: " + driver.getTitle());
		logger.info("Starting ere engine");
		By by = By.xpath("//span[text()='ere']//following::button[@title='Start Engine']");

		try {
			waitForElementPresent(by, 360);
			driver.findElement(by).click();
		} catch (Exception e) {
			logger.error("ERE engines are already started or element does not displyed " + e.toString());
			Assert.fail("ERE engines are already started or element does not displyed " + e.toString());
		}

		try {
			new WebDriverWait(driver, 240).ignoring(StaleElementReferenceException.class).until((WebDriver d) -> {
				WebElement we = d
						.findElement(By.xpath("(//span[text()='ere']//following::button[@title='View Engine'])"));
				logger.info(we.getAttribute("title"));
				logger.info(we.getTagName());
				we.click();
				return true;
			});
		} catch (TimeoutException e) {
			logger.info("Unable to find View Engine button. Directly accessing ere page");
			driver.get(MessageFormat.format(testEnginesUrlPattern, tormUrl, "/ere"));

			try {
				new WebDriverWait(driver, 120).ignoring(StaleElementReferenceException.class).until((WebDriver d) -> {
					WebElement we = d.findElement(By.id("nav_test_engines"));
					return true;
				});
			} catch (TimeoutException te) {
				logger.info("ere page should be loaded by now");
			}
		}

		if ((tormUsername != null && tormUsername.compareTo("") != 0)
				&& (tormPassword != null && tormPassword.compareTo("") != 0)) {
			String currentUrl = driver.getCurrentUrl();
			currentUrl = currentUrl.substring(currentUrl.indexOf('@') + 1);
			logger.info("Redirected to " + currentUrl + ". Switching focus to iFrame");
		} else
			logger.info("Redirected to " + driver.getCurrentUrl() + ". Switching focus to iFrame");
		driver.switchTo().frame(driver.findElement(By.name("engine")));

		logger.info("-------------- " + name.getMethodName() + " --------------");

	}

	@After
	public void cleanup() {
		logger.info("--------------- CLEANUP ---------------");
		try {
			logger.info("Wrapping up: switching focus back to TORM Dashboard");
			driver.switchTo().defaultContent();
			logger.info("Stopping ere engine");
			driver.findElement(By.id("nav_test_engines")).click();
			By by = By.xpath("//span[text()='ere']//following::button[@title='Stop Engine']");
			waitForElementPresent(by, 360);
			driver.findElement(by).click();
			waitForVisibility(60, "//span[text()='ere']//following::button[@title='Start Engine']");
		} catch (Exception e) {
			logger.info("Issue with stopping ere engine\n" + e.toString());
		}
		if (driver != null)
			driver.quit();

	}

	/**
	 * method waits for web element until it's displayed
	 * 
	 * @param by
	 * @param timeout
	 */
	public void waitForElementPresent(final By by, int timeout) {
		WebDriverWait wait = (WebDriverWait) new WebDriverWait(driver, timeout).ignoring(WebDriverException.class)
				.ignoring(ElementNotVisibleException.class).ignoring(InvalidElementStateException.class)
				.ignoring(NoSuchElementException.class);
		wait.until(new ExpectedCondition<Boolean>() {
			@Override
			public Boolean apply(WebDriver webDriver) {
				WebElement element = webDriver.findElement(by);
				return element != null && element.isDisplayed();
			}
		});
	}

	/**
	 * method waits for webelement until it's displayed
	 * 
	 * @param seconds
	 * @param xpathExpression
	 */
	public void waitForVisibility(int seconds, String xpathExpression) {
		new WebDriverWait(driver, seconds)
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpathExpression)));
	}

	/**
	 * method waits for webelement until it's displayed
	 * 
	 * @param seconds
	 * @param by
	 */
	public void waitForVisibility(int seconds, By by) {
		new WebDriverWait(driver, seconds).until(ExpectedConditions.visibilityOfElementLocated(by));
	}

}