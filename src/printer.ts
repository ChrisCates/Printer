import 'colors';
import { Command } from 'commander';
import { generateNewProject } from './generators/new';
import { generateComponent } from './generators/component';
import { generateSlice } from './generators/slice';
import { generatePage } from './generators/page';
import { generatePrisma } from './generators/prisma';
import { generatePrismaSchema } from './generators/schema';

const Print = new Command('🖨️ Printer | By Chris Cates');

Print
.version('1.1.1')
.description('🖨️ Printer: A code generation tool for Next.js, Redux, Prisma Development.');

Print
.command('new [path]')
.description('Generate a new Printer project')
.action(async path => {
    console.log(`👷  Generating new Printer project`.green.bold);
    await generateNewProject(path);
});

Print
.command('component [path]')
.description('Generate a new Printer component')
.action(async path => {
    console.log(`👷  Generating new Printer component ${path}`.green.bold);
    await generateComponent(path);
});

Print
.command('slice [name]')
.description('Generate a new Printer slice')
.action(async name => {
    console.log(`👷  Generating new Printer slice ${name}`.green.bold);
    await generateSlice(name);
});

Print
.command('page [path]')
.description('Generate a new Printer page')
.action(async path => {
    console.log(`👷  Generating new Printer page`.green.bold);
    await generatePage(path);
});

Print
.command('prisma')
.description('Add prisma to a Printer project')
.action(async () => {
    console.log(`👷  Generating new Prisma Configuration`.green.bold);
    await generatePrisma();
    console.log(`Don't forget to run "yarn add prisma" to your project.`.yellow);
    console.log(`Also don't forget to update your .env with the DATABASE_URL. Happy printing! 🖨️  🖨️  🖨️`.yellow);
});

Print
.command('prisma schema [name]')
.description('Generate a new Prisma schema')
.action(async name => {
    console.log(`👷  Generating new Prisma Schema`.green.bold);
    await generatePrismaSchema(name);
});

Print
.command('prisma merge')
.description('Merge prisma schemas')
.action(async name => {
    console.log(`👷  Generating merged Prisma schema file`.green.bold);
    await generatePrismaSchema(name);
});

Print.parse(process.argv);