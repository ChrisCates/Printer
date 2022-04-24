# 🖨️ Printer | Changelog

## 1.4.2

- Updated default `_document.tsx` template

- Added `/public/assets/css` files and are auto injected into `_document.tsx`

- Updated `redux` namespaces

- Added more comprehensive and interactive documentation

## 1.4.1

- Updated `util/util.session.ts` to just `util/session.ts`. Imports look nicer as just `util/session`

## 1.4.0

- Fix page namespace being lowercase (needed to be Pascal Case)

- Added API scaffolding and `iron-session` scaffolding

- Added API routing command `printer api [path]`

- Removed redundant Prisma `schema` and `merge` commands

## 1.3.0

- Added multi url injectable pages

- Added `pre-commit` hooks

- Added `.eslintrc.js` configuration

  - Includes `standard` lint enforcement

  - Includes `prettier` code style enforcement

## 1.2.1

- Fixed `prisma` auxillary commands

- Improved formatting and layout of jest unit tests

- Added more unit tests (now 90% coverage)

- Removed redundant modules

- Updated Documentation

## 1.2.0

- Added Circle CI Integration

- Added baseline Jest unit tests

- Added eslint configuration

- Add pre commit hooks

## 1.1.2

- Created the `reindex` command

```bash
printer reindex ${PATH}

# Example
Printer reindex components
```

This command will automatically update all component folders with an `index.tsx` file.

## 1.1.1

- Fix copy

- Update homepage CSS

## 1.1.0

- Added `index.tsx` for new components generated with `printer component ${PATH}`.

- Added new command `printer prisma merge`.

- Added husky pre-commit git hooks

- Added `baseUrl` to `tsconfig.json`

## 1.0.1

- Added support for the Pascal Namespace component generation when using hyphenated file names.