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

package com.ibm.iix.elastest.e2e.tests.ui;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;

import com.ibm.iix.elastest.e2e.utilities.End2EndTestUtilities;

public class GetRecomendationTests extends End2EndTestUtilities {

	String areaAexpectedMessage = "The description of tested area, e.g \"ordered integer serialiser\".";
	String TaskexpectedMessage = "The description of tested task, e.g. \"test if can serialise a sample range\".";

	/**
	 * method for generate new recommendation test, then method checks if help
	 * section is correct, also method checks if all UI content is correct
	 * 
	 * @param inlineHelp
	 * @param checkContent
	 */
	private void newTestCaseRecommendation(boolean inlineHelp, boolean checkContent) {
		logger.info("Opening New Recommendation wizard");
		driver.findElement(By.id("recButton")).click();

		logger.info("Setting Area query: " + areaQuery);
		driver.findElement(By.id("areaField")).sendKeys(areaQuery);

		logger.info("Setting Task query: " + taskQuery);
		driver.findElement(By.id("taskField")).sendKeys(taskQuery);

		if (inlineHelp) {
			logger.info("Verify inline help content");

			waitIgnoringErrors(20, "//*[@id=\"rec-mzc-dialog\"]/div[1]/div[3]/div/div[1]/i");
			WebElement areaHelp = driver.findElement(By.xpath("//*[@id=\"areaDesc\"]"));

			String areaHelpContent = areaHelp.getText();

			try {
				logger.info("Inline Area description help content correct");
				Assert.assertEquals(areaAexpectedMessage, areaHelpContent);

			} catch (Exception e) {
				logger.error("Inline Area description help content not correct " + e.toString());
			}

			waitIgnoringErrors(20, "// *[@id=\"rec-mzc-dialog\"]/div[1]/div[4]/div/div[1]/i");
			WebElement taskHelp = driver.findElement(By.xpath("//*[@id=\"taskDesc\"]"));

			String taskHelpContent = taskHelp.getText();

			try {
				logger.info("Inline Task Description help content correct");
				Assert.assertEquals(TaskexpectedMessage, taskHelpContent);

			} catch (Exception e) {
				logger.error("Inline Task Description help content not correct " + e.toString());
			}
		} else {
			logger.info("inline help content set to: not checking");
		}

		logger.info("Running query");
		driver.findElement(By.id("recDialogOk")).click();

		waitForVisibility(100, "//div[@id='search-results-card']");

		if (checkContent) {
			logger.info("Checking content ");
			checkAreaDetails();
			checkTaskDetails();
			checkQueriedModel(modelName);
			checkShowDetails();
			scrollPage(0, 250);
			scrollPage(0, -250);
			checkNewRecomendationButton();
		} else {
			logger.info("Does not checking content ");
		}

		String generatedTestcase = null;
		int tableIterator = 1;
		String tablePath = "//table[" + tableIterator + "]/";
		boolean tablePathFlag = false;
		try {
			generatedTestcase = driver.findElement(By.xpath(tablePath + "tbody/tr[1]/td[1]/pre")).getText();

			logger.info("Validating Generated test case");
			assertNotNull(generatedTestcase);
			assertTrue("Generated test case is empty or invalid", generatedTestcase.length() > 49);
			tableIterator++;
			tablePathFlag = true;
		} catch (NoSuchElementException nsee) {
			logger.info("There was no Generated Testcase - moving to the reusable test cases...");
		}

		if (inlineHelp) {
			logger.info("Verify new recomendation inline help content");

			waitIgnoringErrors(100, "//*[@id=\"search-results-card\"]/div[2]/div/table[1]/thead/tr/th/i");
			WebElement areaHelp = driver.findElement(By.xpath("//*[@id=\"recTCDesc\"]"));
			String expectedMessage = "New code generated from the provided description.";
			String areaHelpContent = areaHelp.getText();

			try {
				logger.info("Inline Recommended test case help content correct");
				Assert.assertEquals(expectedMessage, areaHelpContent);

			} catch (Exception e) {
				logger.error("Inline Recommended test case help content not correct " + e.toString());
			}

			waitIgnoringErrors(100, "//*[@id=\"search-results-card\"]/div[2]/div/table[2]/thead/tr[1]/th/i");
			WebElement taskHelp = driver.findElement(By.xpath("//*[@id=\"reuseTCDesc\"]"));
			expectedMessage = "Most similar test cases existing in the repository.";
			String taskHelpContent = taskHelp.getText();

			try {
				logger.info("Inline Test cases recommended for re-use help content correct");
				Assert.assertEquals(expectedMessage, taskHelpContent);

			} catch (Exception e) {
				logger.error("Inline Test cases recommended for re-use help content not correct " + e.toString());
			}
		} else {
			logger.info("inline new recomendation help content set to: not checking");
		}

		if (tablePathFlag)
			tablePath = "//table[" + tableIterator + "]/";
		String className = driver.findElement(By.xpath(tablePath + "tbody/tr[1]/td[3]")).getText();
		String methodName = driver.findElement(By.xpath(tablePath + "tbody/tr[1]/td[4]")).getText();
		String similarityScore = driver.findElement(By.xpath(tablePath + "tbody/tr[1]/td[5]")).getText();

		logger.info("Top result:" + "\tclassName=" + className + "\tmethodName=" + methodName + "\tconfidenceScore="
				+ similarityScore);

		logger.info("Validating class name");
		assertNotNull(className);
		assertTrue("Class name is empty or invalid", className.length() > 5);

		logger.info("Validating test case name");

		assertNotNull(methodName);
		assertTrue("Test case name is empty or invalid", methodName.length() > 4);

		logger.info("Validating similarity score");
		assertNotNull(similarityScore);
		assertTrue("Invalid Similarity score", Double.parseDouble(similarityScore) >= Double.parseDouble(similarityT));

		if (checkContent) {
			checkCloseContentButtonWorks();
		}
	}

	/**
	 * method check if wizard content display correct
	 */
	private void checkNewRecomendationButton() {
		logger.info("Check that new recomendation wizard display again");
		driver.findElement(By.xpath("//*[@id=\"recButton\"]")).click();

		WebElement wizardTitle = driver.findElement(By.xpath("//*[@id=\"rec-mzc-dialog\"]/div[1]/div[1]/div/h5"));

		try {
			if (wizardTitle.isDisplayed()) {
				logger.info("Wizard display");
			}
		} catch (Exception e) {
			logger.error("Wizard does not display");
			Assert.fail("Wizard does not display");
		}
		driver.findElement(By.xpath("//*[@id=\"recDialogCancel\"]")).click();
	}

	/**
	 * method to check if recommendation wizard can be closes success
	 */
	private void checkCloseContentButtonWorks() {
		logger.info("Check if close button works ");
		try {
			logger.info("Close button works");
			driver.findElement(By.xpath("//*[@id=\"search-results-card\"]/div[1]/div[2]/div[2]/i")).click();
			// *[@id="recDialogCancel"]
		} catch (Exception e) {
			logger.error("Close button does not works");
			Assert.fail("Close button does not works");
		}
	}

	/**
	 * Method for scroll webpage up or down
	 * 
	 * @param x
	 * @param y
	 */
	private void scrollPage(int x, int y) {
		logger.info("Scroling ");

		String execute = "window.scrollBy(" + x + "," + y + ")";
		if (y > 0) {
			logger.info("Scroll up: " + y + " pixels");
		} else {
			logger.info("Scroll down: " + y + " pixels");
		}

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript(execute);

		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	/**
	 * methods verify that show details section contains correct content
	 */
	private void checkShowDetails() {
		waitForVisibility(100, "//*[@id=\"search-results-card\"]/div[2]/div/table[2]/tbody[1]/tr[1]/td[2]/a");
		driver.findElement(By.xpath("//*[@id=\"search-results-card\"]/div[2]/div/table[2]/tbody[1]/tr[1]/td[2]/a"))
				.click();
		;
		WebElement codeSample = driver.findElement(By.xpath("//*[@id=\"bodyId0\"]/td/pre"));
		try {
			logger.info("Code sample exists");
			Assert.assertNotNull("Code sample exists", codeSample.getText());
		} catch (Exception e) {
			logger.error("Code sample does exists");
			Assert.fail("Code sample does exists");
		}
	}

	/**
	 * method verify that queried model is correct displayed on UI
	 * 
	 * @param modelName
	 */
	private void checkQueriedModel(String modelName) {
		logger.info("Check if new recommendation equals to selected model:  " + modelName);
		WebElement model = driver.findElement(By.xpath("//*[@id=\"search-results-card\"]/div[1]/div[1]/div[2]/div/b"));
		String modelContent = model.getText();

		try {
			logger.info("Model in details section equals " + modelName);
			Assert.assertEquals(modelContent, modelName);
		} catch (Exception e) {
			logger.error("Model in details section does not equals " + modelName);
			Assert.fail("Model in details section does not equals " + modelName);
		}
	}

	/**
	 * method verify that area details are displayed correct
	 */
	private void checkAreaDetails() {
		logger.info("Check if description of the test case: Area equals to displayed content");
		WebElement areaBody = driver
				.findElement(By.xpath("//*[@id=\"search-results-card\"]/div[1]/div[1]/div[1]/div[2]/span"));
		String rawbody = areaBody.getText();

		try {
			logger.info("Description of the test case: Area equals to displayed content");
			Assert.assertEquals(formatDetailsBody(5, rawbody), areaQuery);
		} catch (Exception e) {
			logger.error("Description of the test case: Area doe not equals to displayed content" + e.toString());
			Assert.fail("Description of the test case: Area doe not equals to displayed content" + e.toString());
		}
	}

	/**
	 * method verify that task details are displayed correct
	 */
	private void checkTaskDetails() {
		logger.info("Check if description of the test case: Task equals to displayed content");
		WebElement areaBody = driver
				.findElement(By.xpath("//*[@id=\"search-results-card\"]/div[1]/div[1]/div[1]/div[3]/span"));
		String rawbody = areaBody.getText();

		try {
			logger.info("Description of the test case: Task equals to displayed content");
			Assert.assertEquals(formatDetailsBody(5, rawbody), taskQuery);
		} catch (Exception e) {
			logger.error("Description of the test case: Task does not equals to displayed content" + e.toString());
			Assert.fail("Description of the test case: Task does not equals to displayed content" + e.toString());
		}
	}

	/**
	 * method which get webelement to string and parse this string. Remove all
	 * whitspaces
	 * 
	 * @param row
	 * @param rawString
	 * @return
	 */
	private String formatDetailsBody(int row, String rawString) {

		String cutString = rawString.substring(row);
		String cutQuote = cutString.replaceAll("\"", "");
		String actualMessage = cutQuote.replaceFirst(" ", "");

		return actualMessage;
	}

	@Test
	public void verifyGetRecommendationsInlineHelp() {
		logger.info("-------------------------- GUI-ERE-010 -------------------------");
		newTestCaseRecommendation(true, false);
	}

	@Test
	public void verifyGetRecommendationsAllContentTrial() {
		logger.info("-------------------------- GUI-ERE-011 -------------------------");
		newTestCaseRecommendation(false, true);
	}
}