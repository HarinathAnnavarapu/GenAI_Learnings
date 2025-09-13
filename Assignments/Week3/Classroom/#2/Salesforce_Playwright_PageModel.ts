import { Page, Locator } from '@playwright/test';

/**
 * Page Object for Salesforce Login Page
 */
export class SalesforceLoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly loginButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly useCustomDomainLink: Locator;
    readonly customDomainInput: Locator;
    readonly customDomainPreview: Locator;
    readonly customDomainBackButton: Locator;
    readonly customDomainContinueButton: Locator;
    readonly savedUsernamesLabel: Locator;
    readonly editSavedUsernamesLink: Locator;
    readonly saveEditButton: Locator;
    readonly cancelEditButton: Locator;
    readonly capsLockWarning: Locator;
    readonly domainError: Locator;

    /**
     * Initializes the Salesforce login page object
     * @param page - The Playwright page instance
     */
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.rememberMeCheckbox = page.locator('#rememberUn');
        this.loginButton = page.locator('#Login');
        this.forgotPasswordLink = page.locator('#forgot_password_link');
        this.useCustomDomainLink = page.locator('#mydomainLink');
        this.customDomainInput = page.locator('#mydomain');
        this.customDomainPreview = page.locator('#mydomain_preview');
        this.customDomainBackButton = page.locator('#hint_back_domain');
        this.customDomainContinueButton = page.locator('#mydomainContinue');
        this.savedUsernamesLabel = page.locator('#chooser_label');
        this.editSavedUsernamesLink = page.locator('#edit');
        this.saveEditButton = page.locator('#hint_save_edit');
        this.cancelEditButton = page.locator('#hint_back_edit');
        this.capsLockWarning = page.locator('#pwcaps');
        this.domainError = page.locator('#domain_error');
    }
}