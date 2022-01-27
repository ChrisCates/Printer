# 🖨️ Printer | Changelog

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