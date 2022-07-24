# 🖨️ Printer

**Deprecation Notice**: project has been deprecated and has been moved [Printer Framework](https://github.com/PrinterFramework).

## A code generation tool for Next.js, Redux, Prisma Development

![license](https://img.shields.io/badge/license-AGPLv3-blue.svg)
![version](https://img.shields.io/badge/version-1.5.0-blue.svg)
[![CircleCI](https://circleci.com/gh/ChrisCates/Printer.svg?style=svg)](https://circleci.com/gh/ChrisCates/Printer)
[![codecov](https://codecov.io/gh/chriscates/printer/branch/master/graph/badge.svg)](https://codecov.io/gh/chriscates/printer)

## Why Printer?

- Easy to use Code Generation Tool.

- Boilerplate Automation

- Modularized

- Easy to scale

- Easy to manage type systems and interfaces

## How it works

1. Install printer:

```bash
# npm
npm install -g @chriscates/printer
# yarn
yarn global add @chriscates/printer
```

2. Create a new project:

```bash
printer new printer-sample
cd printer-sample
```

3. Start developing:

```bash
# Create a new component
printer component components/component
```

Review the documentation over [here](https://printer.chriscates.ca/docs).

Full changelog specified in [CHANGELOG](./CHANGELOG.md).

## Design and Approach

Every front end project involves a lot of boilerplate. Printer reduces the need to spend time writing boilerplate to almost zero. The principle approach of Printer is to automate anything trivial in Next.js development.

**Review the actual generated code in the [sample project](./example).**

## Comments and Feedback

Very open to comments and feedback. Very welcoming to people who open issues with reasonable constructive feedback. Please do not open PRs unless you're willing to commit code that matches the conventions and styles of the repository.

## Licensing

[AGPLv3](./LICENSE) - This applies to hard forking printer. Not to Next.js projects generated with printer.
