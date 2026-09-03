# Spec

## Summary

This demo uses Selenium WebDriver with TypeScript to describe driving a
real Chrome browser against the real, live
[Google Search](https://www.google.com) website and run three real
assertion-based checks, as a beginner-friendly example of end-to-end
browser testing against a live search engine.

## Scope

This spec covers `src/demo.ts` only: the three test scenarios it runs, the
exact strings and selectors it checks, and the criteria for the demo to be
considered correct. It does not cover installation or how to run the
script — see `README.md` for that.

## Principles and rules

* This demo's code describes real assertions against a real, live
  production website. There is no mocking, no stubbing, and no fixture
  server. That is the point of this demo: to show what real-world browser
  testing against a live search engine looks like.
* Google's Terms of Service restrict automated querying of Google Search.
  This code is deliberately never executed against the live site in CI or
  other automated tooling — see `AGENTS.md` for the non-negotiable policy.
* `src/demo.ts` is the implementation. This file, `spec/index.md`, is the
  specification. They must agree exactly. If they ever disagree, that is a
  defect in one of them — fix it before doing anything else.

## Detail

1. **Home page title test**
   * Navigate to: `https://www.google.com`
   * Assert the page title equals exactly: `Google`

2. **Search box test**
   * From the home page, locate the search box with `By.name('q')`
     (Google's search input has historically been a plain `<input>`; it is
     currently rendered as a `<textarea>`, which is why the code comments
     document that drift honestly rather than pretending the tag never
     changed — see the comment in `src/demo.ts`)
   * Send keys: `testing examples`, followed by `Key.RETURN`
   * Assert the resulting page title contains the exact substring:
     `testing examples`

3. **First result link test**
   * Locate the first link matching `By.css('#search a')` (the first
     organic result link within Google's results container; exact
     results-page structure shifts over time — see the comment in
     `src/demo.ts`)
   * Click it
   * Assert the resulting page's URL does not contain the substring
     `google.com` (i.e., the browser navigated away from Google)

## Acceptance criteria

* The code in `src/demo.ts` is syntactically correct, matches this spec
  exactly (expected titles, expected substrings, selectors, the search
  term), and is written from `selenium-webdriver`'s documented API and
  Google's well-known, stable accessible markup.
* This demo's acceptance criteria are deliberately **not** "all 3 checks
  pass when run against the live site." Per `AGENTS.md`, this code must
  never be executed against the live google.com in CI or other automated
  tooling, because Google's Terms of Service restrict automated querying of
  Google Search.

## Related topics

* [../README.md](../README.md)
* [../AGENTS.md](../AGENTS.md)

## Sources

* <https://www.google.com>
* <https://testingexamples.github.io/examples/google-search/>
