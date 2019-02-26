package com.ibm.iix.elastest.e2e.utilities;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.InvalidElementStateException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.ibm.iix.elastest.e2e.EreEnd2EndTests;

public class End2EndTestUtilities extends EreEnd2EndTests {

	public boolean waitIgnoringErrors(int seconds, String xpathExpression) {

		return new WebDriverWait(driver, seconds).ignoring(WebDriverException.class)
				.ignoring(NoSuchElementException.class).ignoring(ElementNotVisibleException.class)
				.ignoring(InvalidElementStateException.class).until((WebDriver d) -> {
					d.findElement(By.xpath(xpathExpression)).click();
					return true;
				});
	}

	public String timestamp() {
		String timeStamp = new SimpleDateFormat("yyyyMMdd-HHmm").format(new Date());

		return timeStamp;
	}

}