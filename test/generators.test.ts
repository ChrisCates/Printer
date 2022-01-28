import { inspect, write, remove } from 'fs-jetpack'
import { join } from 'path'

import { generateNewProject } from '../src/generators/new'
import { generateComponent } from '../src/generators/component'
import { generatePage } from '../src/generators/page'
import { generateSlice } from '../src/generators/slice'
import { generatePrisma } from '../src/generators/prisma'
import { reindexComponents } from '../src/generators/reindex'
import { generatePrismaSchema } from '../src/generators/schema'
import { mergePrisma } from '../src/generators/merge'

test('Generator - New Project', async () => {
  const path = join('test', 'temporary')
  await generateNewProject(path)

  expect(inspect(join(path, '.babelrc'))?.type).toBe('file')
  expect(inspect(join(path, '.gitignore'))?.type).toBe('file')
  expect(inspect(join(path, '.gitkeep'))?.type).toBe('file')
  expect(inspect(join(path, 'package.json'))?.type).toBe('file')
  expect(inspect(join(path, 'tsconfig.json'))?.type).toBe('file')
  expect(inspect(join(path, 'pages', '_app.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'pages', '_document.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'pages', 'index.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'public', '.gitkeep'))?.type).toBe('file')
  expect(inspect(join(path, 'tsconfig.json'))?.type).toBe('file')
  expect(inspect(join(path, 'redux', 'redux.wrapper.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'redux', 'redux.reducer.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'redux', 'reducers.json'))?.type).toBe('file')

  remove(path)
})

test('Generator - Component', async () => {
  const path = join('test', 'temporary')
  await generateComponent(path)

  expect(inspect(join(path, 'index.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'temporary.component.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'temporary.connect.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'temporary.style.tsx'))?.type).toBe('file')
  expect(inspect(join(path, 'temporary.test.tsx'))?.type).toBe('file')

  remove(path)
})

test('Generator - Page', async () => {
  const expectedPath = join(process.cwd(), 'pages', 'test.tsx')

  await generatePage('test')
  expect(inspect(expectedPath)?.type).toBe('file')

  remove(join(process.cwd(), 'pages'))
})

test('Generator - Slice', async () => {
  const reducersPath = join(process.cwd(), 'redux', 'reducers.json')
  write(reducersPath, '[]')

  const expectedPath = join(process.cwd(), 'redux', 'slice', 'slice.test.tsx')

  await generateSlice('test')
  expect(inspect(expectedPath)?.type).toBe('file')

  remove(join(process.cwd(), 'redux'))
})

test('Generator - Prisma', async () => {
  const prismaPath = join(process.cwd(), 'prisma', 'prisma.tsx')
  const schemaPath = join(process.cwd(), 'prisma', 'schema.prisma')
  const envPath = join(process.cwd(), '.env')

  await generatePrisma();

  expect(inspect(prismaPath)?.type).toBe('file')
  expect(inspect(schemaPath)?.type).toBe('file')
  expect(inspect(envPath)?.type).toBe('file')

  remove(join(process.cwd(), 'prisma'))
})


test('Generator - Prisma Schema', async () => {
  const expectedPath = join(process.cwd(), 'prisma', 'test.prisma')
  await generatePrismaSchema('test')
  expect(inspect(expectedPath)?.type).toBe('file')

  remove(join(process.cwd(), 'prisma'))
})

test('Generator - Prisma Merge', async () => {
  await generatePrisma()
  await generatePrismaSchema('test')
  await mergePrisma()

  remove(join(process.cwd(), 'prisma'))
})

test('Generator - Reindex', async () => {
  await reindexComponents(join('examples', 'print-sample'))
})
