package com.testleaf.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Page Object for Salesforce Login Page
 */
public class SalesforceLoginPage {

    @FindBy(id = "username")
    private WebElement usernameInput;

    @FindBy(id = "password")
    private WebElement passwordInput;

    @FindBy(id = "Login")
    private WebElement loginButton;

    @FindBy(id = "rememberUn")
    private WebElement rememberMeCheckbox;

    @FindBy(linkText = "Forgot Your Password?")
    private WebElement forgotPasswordLink;

    @FindBy(id = "mydomainLink")
    private WebElement useCustomDomainLink;

    @FindBy(id = "gidr-email-log-in-button")
    private WebElement loginWithEmailButton;

    /**
     * Initializes the Page Object with the given WebDriver
     * @param driver The WebDriver instance
     */
    public SalesforceLoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    /**
     * Enters the username for login
     * @param username The username to enter
     */
    public void enterUsername(String username) {
        usernameInput.sendKeys(username);
    }

    /**
     * Enters the password for login
     * @param password The password to enter
     */
    public void enterPassword(String password) {
        passwordInput.sendKeys(password);
    }

    /**
     * Clicks the login button to submit the form
     */
    public void clickLogin() {
        loginButton.click();
    }

    /**
     * Checks the 'Remember me' checkbox
     */
    public void checkRememberMe() {
        if (!rememberMeCheckbox.isSelected()) {
            rememberMeCheckbox.click();
        }
    }

    /**
     * Unchecks the 'Remember me' checkbox
     */
    public void uncheckRememberMe() {
        if (rememberMeCheckbox.isSelected()) {
            rememberMeCheckbox.click();
        }
    }

    /**
     * Checks if 'Remember me' checkbox is selected
     * @return true if checkbox is selected, false otherwise
     */
    public boolean isRememberMeSelected() {
        return rememberMeCheckbox.isSelected();
    }

    /**
     * Clicks the 'Forgot Your Password?' link
     */
    public void clickForgotPassword() {
        forgotPasswordLink.click();
    }

    /**
     * Clicks the 'Use Custom Domain' link
     */
    public void clickUseCustomDomain() {
        useCustomDomainLink.click();
    }

    /**
     * Clicks the 'Log In with Email' button
     */
    public void clickLoginWithEmail() {
        loginWithEmailButton.click();
    }
}