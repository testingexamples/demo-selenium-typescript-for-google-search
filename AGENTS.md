# AGENTS.md

This repo is a small, beginner-friendly walkthrough that uses Selenium
WebDriver with TypeScript to describe driving a real browser against the
real, live [Google Search](https://www.google.com) website and run three
real assertion-based checks. It is a TypeScript port of the sibling repo
`demo-selenium-javascript-for-google-search`.

## Source of truth

`spec/index.md` is the single source of truth for the exact three assertions
and selectors this demo checks against the live google.com site. The code in
`src/demo.ts` must match it exactly (expected titles, expected substrings,
selectors, the search term). If the code and `spec/index.md` ever disagree,
that is a defect in one of them — fix it before doing anything else.

## Install and run

See `README.md` for the Install and Run sections. Do not duplicate those
steps here; follow the README.

## Non-negotiable: do not change the scenario without updating the spec

Don't change the target site, the three test scenarios, or the exact
expected strings/selectors without updating `spec/index.md` first, in the
same change.

## Non-negotiable: never execute this code against live google.com

This is the important difference from this workspace's other demos, such as
`demo-selenium-typescript`, which is meant to be run against
testingexamples.github.io. This repo is different on purpose:

Google's Terms of Service restrict automated querying of Google Search (see
the caution in `README.md`). `src/demo.ts` must never be executed against
the live google.com in CI, in a scheduled job, or by any other automated
tooling. It is written for correctness from `selenium-webdriver`'s
documented API and Google's well-known, stable accessible markup, but it is
not verified by a live run, and it must stay that way. If you want to see
whether the code still matches Google's current markup, read it and compare
it against the site by hand — do not run it as part of any automated
process.

CLAUDE.md is a pointer to this file — it is the single source of truth for
agent instructions.
