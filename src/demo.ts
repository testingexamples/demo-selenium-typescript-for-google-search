#!/usr/bin/env ts-node

///
// Demo of Selenium WebDriver browser automation with TypeScript, using
// Google Search <https://www.google.com> as a widely-known real-world
// example.
//
// CAUTION: Google's Terms of Service restrict automated querying of Google
// Search. This file is written and verified as correct, real
// selenium-webdriver code from first principles, using Google's
// well-known, stable, accessible markup -- it is not exercised against the
// live google.com in this repo's own tooling. If you choose to run it
// yourself, that is at your own judgment and risk, and infrequent,
// human-triggered runs are a very different thing from automated,
// repeated querying. See README.md for the full caution.
//
// This is a beginner-friendly walkthrough: each step is commented so you can
// follow along and adapt the pattern to your own site. It is a TypeScript
// port of the sibling repo demo-selenium-javascript-for-google-search, with
// explicit types added throughout.
//
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-selenium-typescript-for-google-search
//   * Version: 1.0.0
//   * Created: 2026-09-03T00:00:00Z
//   * Updated: 2026-09-03T00:00:00Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

// Import Selenium WebDriver parts, with their types.
import { Browser, Builder, By, Key, WebDriver, WebElement } from 'selenium-webdriver';

// Import chromedriver options that you can set as you wish.
import { Options } from 'selenium-webdriver/chrome.js';
const options: Options = new Options();
options.addArguments('--verbose'); // Enable verbose logging.
options.addArguments('--disable-notifications'); // Disable notifications such as popups.
options.setUserPreferences({ "profile.default_content_setting_values.cookies": 2 }); // Reject cookies.

// Import strict assert, renamed for convenience as assert.
// We use this to verify each step actually did what we expect.
import { strict as assert } from 'assert';

async function demo(): Promise<void> {

    // Initialize the driver. Choose other browsers and options as you wish.
    const driver: WebDriver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();

    try {

        ///
        // Step 1: Connect to the Google home page, then verify the page
        // title is what we expect.
        ///

        await driver.get('https://www.google.com');

        const homeTitle: string = await driver.getTitle();
        console.log(`Home page title: "${homeTitle}"`);
        assert.equal(homeTitle, 'Google');
        console.log('✅ Home page title is correct.');

        ///
        // Step 2: Use the search box: type "testing examples", press
        // Return, then verify the resulting page title mentions our query.
        //
        // Google's search input is located by `By.name('q')`. Historically
        // this element was a plain `<input name="q">`; Google has since
        // migrated it to a `<textarea name="q">` (an autosize textarea
        // styled to look like a single-line input). The `name="q"` locator
        // has stayed stable across that drift, which is exactly why we
        // locate by name rather than by tag name or a generated class.
        ///

        const searchBox: WebElement = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('testing examples', Key.RETURN);

        const resultsTitle: string = await driver.getTitle();
        console.log(`Results page title: "${resultsTitle}"`);
        assert.ok(
            resultsTitle.includes('testing examples'),
            `Expected title to contain "testing examples", got "${resultsTitle}"`
        );
        console.log('✅ Results page title contains "testing examples".');

        ///
        // Step 3: Click the first result link, then verify the browser
        // navigated away from google.com.
        //
        // `By.css('#search a')` targets a link inside Google's `#search`
        // results container. The exact DOM structure of a Google results
        // page (ids, class names, nesting) shifts over time as Google
        // ships redesigns, so a selector like this one is a reasonable,
        // documented best guess rather than a guaranteed-stable contract --
        // treat it the same way you'd treat any third-party site you don't
        // control.
        ///

        const firstResultLink: WebElement = await driver.findElement(By.css('#search a'));
        await firstResultLink.click();

        const currentUrl: string = await driver.getCurrentUrl();
        console.log(`Current URL after click: "${currentUrl}"`);
        assert.ok(
            !currentUrl.includes('google.com'),
            `Expected browser to have navigated away from google.com, but URL was "${currentUrl}"`
        );
        console.log('✅ Browser navigated away from google.com.');

        console.log('\nAll checks passed. 🎉');

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            console.log(err.stack);
        } else {
            console.log('An unknown error occurred:', err);
        }
        process.exitCode = 1;
    } finally {
        await driver.quit();
    }

}

demo().catch((err: Error): void => {
    console.error(err);
    process.exitCode = 1;
});
