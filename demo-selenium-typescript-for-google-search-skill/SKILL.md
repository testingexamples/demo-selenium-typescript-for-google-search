---
name: demo-selenium-typescript-for-google-search-skill
description: Explains the Selenium + TypeScript demo that describes testing the real, live Google Search website; invoke when someone wants to understand what this demo checks, adapt its real-world assertion-testing pattern to a different live site, or asks why this repo's code is not meant to be run.
---

# Demo Selenium TypeScript for Google Search — skill

## What this demo teaches

This repo is a beginner-friendly example of **real-world, assertion-based
browser testing against a live, production website** (no mocks, no
fixtures), written for Google Search using Selenium WebDriver with
TypeScript. It describes driving a real Chrome browser to
<https://www.google.com> and checking three things a visitor might actually
do:

1. The home page title equals exactly `Google`.
2. Sending keys `testing examples` then `Key.RETURN` to the search box
   (`By.name('q')`) leads to a results page whose title contains `testing
   examples`.
3. Clicking the first organic result link (`By.css('#search a')`) navigates
   the browser away from `google.com`.

## Important: this demo is deliberately not run

Unlike other demos in this workspace, this code is **not meant to be
executed against the live google.com**, in CI or otherwise, because
Google's Terms of Service restrict automated querying of Google Search. It
was written and reviewed for correctness from `selenium-webdriver`'s
documented API and Google's well-known, stable accessible markup — not
verified by a live run. See `README.md` and `AGENTS.md` for the full
caution and policy.

## Adapting the pattern to a different real site

1. Pick a real target site you're allowed to test against, and confirm its
   terms of service permit automated testing.
2. Pick 2-4 small, real user actions (visit a page, use a search box, click
   a link) and write down the exact expected titles/text/selectors *before*
   writing code — that becomes your spec.
3. Copy the structure of `src/demo.ts`: build a driver, navigate, assert,
   print a checkmark, move to the next step, quit the driver in a
   `finally` block.
4. Keep every expected string exact and verbatim between your spec and your
   code, the same way this repo keeps `spec/index.md` and `src/demo.ts` in
   agreement.

This skill summarizes the repo. `AGENTS.md` and `spec/index.md` are the
source of truth — if this skill's summary ever disagrees with those, they
win.
