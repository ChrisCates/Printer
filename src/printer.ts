import 'colors'
import { Command } from 'commander'
import { Log } from './helpers/log'
import { generateNewProject } from './generators/new'
import { generateComponent } from './generators/component'
import { reindexComponents } from './generators/reindex'
import { generateSlice } from './generators/slice'
import { generatePage } from './generators/page'
import { generatePrisma } from './generators/prisma'
import { generatePrismaSchema } from './generators/schema'

export const Print = new Command('🖨️ Printer | By Chris Cates')

Print
  .version('1.2.1')
  .description('🖨️ Printer: A code generation tool for Next.js, Redux, Prisma Development.')

Print
  .command('new [path]')
  .description('Generate a new Printer project')
  .action(async path => {
    Log('👷  Generating new Printer project'.green)
    await generateNewProject(path)
  })

Print
  .command('component [path]')
  .description('Generate a new Printer component')
  .action(async path => {
    Log(`👷  Generating new Printer component ${path}`.green)
    await generateComponent(path)
  })

Print
  .command('reindex [path]')
  .description('Reindex all Printer components in the following path')
  .action(async path => {
    Log(`🔧  Reindexing all Printer components in the ${path} folder`.green)
    await reindexComponents(path)
  })

Print
  .command('slice [name]')
  .description('Generate a new Printer slice')
  .action(async name => {
    Log(`👷  Generating new Printer slice ${name}`.green)
    await generateSlice(name)
  })

Print
  .command('page [path]')
  .description('Generate a new Printer page')
  .action(async path => {
    Log('👷  Generating new Printer page'.green)
    await generatePage(path)
  })

Print
  .command('prisma')
  .description('Add prisma to a Printer project')
  .action(async () => {
    Log('👷  Generating new Prisma Configuration'.green)
    await generatePrisma()
    Log('Don\'t forget to run "yarn add prisma" to your project.'.yellow)
    Log('Also don\'t forget to update your .env with the DATABASE_URL. Happy printing! 🖨️  🖨️  🖨️'.yellow)
  })

Print
  .command('prisma-schema [name]')
  .description('Generate a new Prisma schema')
  .action(async name => {
    Log('👷  Generating new Prisma Schema'.green)
    await generatePrismaSchema(name)
  })

Print
  .command('prisma-merge')
  .description('Merge prisma schemas')
  .action(async name => {
    Log('👷  Generating merged Prisma schema file'.green)
    await generatePrismaSchema(name)
  })

if (process.env.NODE_ENV !== 'test') {
  Print.parse(process.argv)
}
