# 🖨️ Printer

## A prescriptive, precision based approach to Next.js, Redux, Prisma Development. 

![license](https://img.shields.io/badge/license-AGPLv3-blue.svg)
![version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![Build Status](https://travis-ci.org/chriscates/printer.svg?branch=master)](https://travis-ci.org/chriscates/printer)
[![codecov](https://codecov.io/gh/chriscates/printer/branch/master/graph/badge.svg)](https://codecov.io/gh/chriscates/printer)

## Why Print?

- Easy to use Code Generation Tool.

- Boilerplate Automation

- Precision based approach to Next.js and Redux development.

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
printer component new/component
```

Full command line tool API is specified in [CLI](./CLI.md).

## Design and Approach

Every front end project involves a lot of boilerplate. Printer reduces the need to spend time writing boilerplate to almost zero. The principle approach of Printer is to automate anything trivial in Next.js development.

### Components

**Review the actual generated code in the [sample project](./examples/print-sample).**

*Input*

```bash
printer component components/hello/world
```

*Output*

```bash
# React FC
components/hello/world.component.tsx
# Redux Connect Component
components/hello/world.connect.tsx
# Style Component
components/hello/world.style.tsx
# Test Component
components/hello/world.test.tsx
```

### Slices

*Input*

```bash
printer slice hello
```

*Output*

```bash
redux/hello.slice.tsx
# It also updates the Redux reducer with the slice added.
redux.reducer.tsx
```

### Pages

*Input*

```bash
printer page hello/world
```

*Output*

```bash
pages/hello/world.tsx
```

## Comments and Feedback

Very open to comments and feedback. Very welcoming to people who open issues with reasonable constructive feedback. Please do not open PRs unless you're willing to commit code that matches the conventions and styles of the repository.

## Licensing

[AGPLv3](./LICENSE) - This applies to hard forking printer. Not to Next.js projects generated with printer.