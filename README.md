# Demo Selenium TypeScript for Google Search

A friendly, step-by-step tutorial that demonstrates:

* [Selenium](https://www.selenium.dev/) browser automation testing
* [TypeScript](https://en.wikipedia.org/wiki/TypeScript) programming language
* [Node](https://nodejs.org/) runtime built on Chrome's V8 JavaScript engine
* [ChromeDriver](https://developer.chrome.com/docs/chromedriver) extends WebDriver by adding Chromium-specific capabilities
* Real-world locator patterns against [Google Search](https://www.google.com)

This demo is meant to be read top to bottom like a guide: open `src/demo.ts`
alongside this README and follow along.

The exact scenario this demo checks is specified in [spec/index.md](spec/index.md); the code and that spec must always agree.

## ⚠️ Caution: Google's Terms of Service restrict automated querying

Google's [Terms of Service](https://www.google.com/policies/terms/) restrict
automated querying of Google Search. `src/demo.ts` in this repo is written
and reviewed as correct, real `selenium-webdriver` code, built from
first-hand knowledge of Google's well-known accessible markup -- it is not
run against the live `google.com` by this repo's own tooling, and it is
never run in CI or any automated pipeline. The code exists to teach
locator strategies and interaction patterns, not to be executed
repeatedly against the live service. See `AGENTS.md` and
`spec/index.md` for this project's non-negotiable rule against automated
execution.

If you choose to try the script yourself, do so sparingly and manually, at
your own judgment and risk, and review Google's Terms of Service first.

## What this demo tests

The script drives a real browser to Google Search and checks a few things a
visitor might do:

1. **Visit the home page** and verify the page title equals `Google`.
2. **Use the search box**: type `testing examples`, press Return, and
   verify the resulting page title contains `testing examples`.
3. **Click the first result link** and verify the browser navigated away
   from `google.com`.

Each step prints what it found, then asserts it matches what we expect, so
you can see the demo succeed (or fail loudly) as it runs.

## Install

### Install Node and NPM

Install Node and NPM from <https://nodejs.org/>

Run this to confirm your version:

```sh
node -v
```

Output should be at least:

```stdout
v23.6.1
```

Run this to confirm your version:

```sh
npm -v
```

Output should be at least:

```stdout
11.2.0
```

### Install TypeScript

Install TypeScript, ts-node, and Node type definitions:

```sh
npm install --save-dev typescript @types/node ts-node
```

### Install Selenium

Install Selenium WebDriver:

```sh
npm install --save selenium-webdriver@latest
```

Selenium WebDriver ships its own JavaScript implementation but does not
ship complete TypeScript type declarations, so also install the community
types package as a dev dependency:

```sh
npm install --save-dev @types/selenium-webdriver@latest
```

### Install chromedriver

Install Google chromedriver:

```sh
npm install --save chromedriver@latest
```

### Update

Run:

```sh
npm install npm@latest
npm upgrade
npm audit fix
```

## Run

Run:

```sh
npx ts-node src/demo.ts
```

The script will:

1. Launch your local Chrome web browser and go to <https://www.google.com>.
2. Search for "testing examples" and click the first result, the same way a
   real visitor would.
3. Print a checklist of ✅ verifications as it confirms each expectation,
   then print "All checks passed. 🎉" when everything succeeds.

Remember the caution above: run this manually and sparingly, not as part of
any automated or repeated process.

### Troubleshooting “chromedriver” Not Opened

If you get this kind of error message:

```txt
“chromedriver” Not Opened. Apple could not verify “chromedriver”
is free of malware that may harm your Mac or compromise your privacy.
```

Or this kind of error message:

```txt
Apple is not able to verify that it is free from malware that could harm your
Mac or compromise your privacy. Don’t open this unless you are certain it is
from a trustworthy source.
```

Then click "Done".

Try this command line solution:

```sh
xattr -d com.apple.quarantine $(which chromedriver) 2>/dev/null
```

Try adjusting your system settings:

* Apple menu -> Settings -> Security & Privacy -> General

* See the entry that says: "chromedriver" was blocked to protect your Mac.

* Click the button "Allow Anyway".

### Troubleshooting "This version of ChromeDriver …"

If you get this kind of error message:

```txt
UnhandledPromiseRejectionWarning:
SessionNotCreatedError: session not created:
This version of ChromeDriver only supports Chrome version …
```

Then you may need to harmonize your Chrome browser app and your Chrome webdriver.

If you use macOS brew, then upgrade chromedriver:

```sh
brew upgrade chromedriver
```

To update your Chrome browser app:

* On your computer, open Chrome.

* Find your current Chrome version by typing in the URL bar: `chrome://version/`.

* You should see a web page with many details, and you should see the first line with the version number, such as: "Google Chrome 135.0.7049.86 (Official Build)".

* At top right, tap the "More" icon, which is 3 vertical dots.

* You see the "More" menu. If you see a menu item "Update", then choose it. If you don't see a menu item "Update", then  you're on the current version.

To update your Chrome webdriver:

* Go to https://chromedriver.chromium.org/downloads

* Download the version that matches your Chrome browser app.

## Tracking

* Package: demo-selenium-typescript-for-google-search
* Version: 1.0.0
* Created: 2026-09-03T00:00:00Z
* Updated: 2026-09-03T00:00:00Z
* License: GPL-2.0-or-greater or for custom license contact us
* Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
