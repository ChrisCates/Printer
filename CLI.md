# 🖨️ Printer CLI Guide

## Creating a new project

Specify the path you want to create a new Printer project for by running

```bash
printer new $PATH

# Example
printer new test
```

Running this command will generate the following files:

```bash
$PATH/package.json
$PATH/tsconfig.json
$PATH/.gitignore
$PATH/.gitkeep
$PATH/public/.gitkeep

$PATH/pages/_app.tsx
$PATH/pages/_document.tsx
$PATH/pages/index.tsx

$PATH/redux/redux.wrapper.tsx
$PATH/redux/redux.reducer.tsx
$PATH/redux/reducers.json
```

## Creating a new component

Specify the path you want to create a new Printer component at by running:

```bash
printer component $PATH/$NAME

# Example
printer component components/hello/world
```

Running this command will generate the following:

```bash
$PATH/$NAME.component.tsx
$PATH/$NAME.connect.tsx
$PATH/$NAME.style.tsx
$PATH/$NAME.test.tsx
$PATH/$NAME.index.tsx
```

## Creating a new slice

Specify the name of the new slice you want to create by running:

```bash
printer slice $NAME

# Example
printer slice hello
```

Running this command will generate and updates the following:

```bash
redux/slice/$NAME.slice.tsx
# And updates
redux/redux.reducer.tsx
redux/reducers.json
```

## Creating a new page

Specify the name of the new page you want to create by running:

```bash
printer page $PATH

# Example
printer page hello/world
```

Running this command will generate the following:

```bash
pages/$PATH.tsx
```

## Creating a new API route

Specify the name of the new page you want to create by running:

```bash
printer api $PATH

# Example
printer api hello/world
```

Running this command will generate the following:

```bash
pages/api/$PATH.tsx
```


## Adding Prisma to Printer

Run this command to add Prisma to your Printer project:

```bash
printer prisma
```

Running this command will generate the following:

```bash
prisma/prisma.tsx
prisma/schema.prisma
.env
```

## Reindexing components

Generated Printer components using `v1.0.0`? And want to use the new `v1.1.0` standard? Just use the `reindex` command:

```bash
printer reindex ${PATH}

# Example
Printer reindex components
```

This command will automatically update all component folders with an `index.tsx` file.
