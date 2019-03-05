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

package com.ibm.iix.elastest.e2e.utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.InvalidElementStateException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.ibm.iix.elastest.e2e.EreEnd2EndTests;

public class End2EndTestUtilities extends EreEnd2EndTests {

	/**
	 * method waits for Webelement until it's displayed, then click in
	 * webelement
	 * 
	 * @param seconds
	 * @param xpathExpression
	 * @return
	 */
	public boolean waitIgnoringErrors(int seconds, String xpathExpression) {

		return new WebDriverWait(driver, seconds).ignoring(WebDriverException.class)
				.ignoring(NoSuchElementException.class).ignoring(ElementNotVisibleException.class)
				.ignoring(InvalidElementStateException.class).until((WebDriver d) -> {
					d.findElement(By.xpath(xpathExpression)).click();
					return true;
				});
	}
}