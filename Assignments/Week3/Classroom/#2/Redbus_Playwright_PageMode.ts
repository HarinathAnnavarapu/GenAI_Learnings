import { Page, Locator } from '@playwright/test';

/**
 * Page Object for Search Widget component
 */
export class SearchWidgetPage {
    readonly page: Page;
    readonly fromCityInput: Locator;
    readonly toCityInput: Locator;
    readonly dateInput: Locator;
    readonly todayButton: Locator;
    readonly tomorrowButton: Locator;
    readonly womenBookingToggle: Locator;
    readonly searchButton: Locator;

    /**
     * Initializes the SearchWidgetPage with the given page
     */
    constructor(page: Page) {
        this.page = page;
        this.fromCityInput = page.locator('[data-autoid="searchWidget"] .srcDest___aa6db3', { has: page.locator('.label___57eda7', { text: 'From' }) });
        this.toCityInput = page.locator('[data-autoid="searchWidget"] .srcDest___aa6db3', { has: page.locator('.label___57eda7', { text: 'To' }) });
        this.dateInput = page.locator('.dateLabel___a92fe6');
        this.todayButton = page.locator('button', { text: 'Today' });
        this.tomorrowButton = page.locator('button', { text: 'Tomorrow' });
        this.womenBookingToggle = page.locator('#switch');
        this.searchButton = page.locator('i.icon-search + ..primaryButton___3262c2');
    }

    /**
     * Sets the from city in the search widget
     * @param city - The city name to set
     */
    async setFromCity(city: string): Promise<void> {
        await this.fromCityInput.fill(city);
    }

    /**
     * Sets the to city in the search widget
     * @param city - The city name to set
     */
    async setToCity(city: string): Promise<void> {
        await this.toCityInput.fill(city);
    }

    /**
     * Sets the journey date in the search widget
     * @param date - The date to set
     */
    async setJourneyDate(date: string): Promise<void> {
        await this.dateInput.click();
        await this.page.locator('.doj___e69938').fill(date);
    }

    /**
     * Clicks the Today button
     */
    async clickTodayButton(): Promise<void> {
        await this.todayButton.click();
    }

    /**
     * Clicks the Tomorrow button
     */
    async clickTomorrowButton(): Promise<void> {
        await this.tomorrowButton.click();
    }

    /**
     * Toggles the women booking option
     */
    async toggleWomenBooking(): Promise<void> {
        await this.womenBookingToggle.click();
    }

    /**
     * Clicks the Search Buses button
     */
    async clickSearchBuses(): Promise<void> {
        await this.searchButton.click();
    }
}