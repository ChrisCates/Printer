import { join } from 'path';
import { write } from 'fs-jetpack';

import { AppTemplate } from '../templates/new/_app';
import { DocumentTemplate } from '../templates/new/_document';
import { BabelTemplate } from '../templates/new/babel';
import { GitIgnoreTemplate } from '../templates/new/gitignore';
import { IndexTemplate } from '../templates/new/index';
import { PackageTemplate } from '../templates/new/package';
import { ReduxWrapperTemplate } from '../templates/new/redux.wrapper';
import { ReduxReducerTemplate } from '../templates/new/redux.reducer';
import { TSConfigTemplate } from '../templates/new/tsconfig';

export async function generateNewProject(path: string) {
    const appPath = join(process.cwd(), path, 'pages', '_app.tsx');
    const documentPath = join(process.cwd(), path, 'pages', '_document.tsx');
    const babelPath = join(process.cwd(), path, '.babelrc');
    const gitignorePath = join(process.cwd(), path, '.gitignore');
    const gitkeepPath = join(process.cwd(), path, '.gitkeep');
    const gitkeepPublicPath = join(process.cwd(), path, 'public', '.gitkeep');
    const indexPath = join(process.cwd(), path, 'pages', 'index.tsx');
    const packagePath = join(process.cwd(), path, 'package.json');
    const wrapperPath = join(process.cwd(), path, 'redux', 'redux.wrapper.tsx');
    const reducerPath = join(process.cwd(), path, 'redux', 'redux.reducer.tsx');
    const reducersPath = join(process.cwd(), path, 'redux', 'reducers.json');
    const tsconfigPath = join(process.cwd(), path, 'tsconfig.json');

    write(babelPath, BabelTemplate);
    console.log(`    ✅  Created .babelrc`.green);
    write(gitignorePath, GitIgnoreTemplate);
    console.log(`    ✅  Created .gitignore`.green);
    write(gitkeepPath, ``);
    console.log(`    ✅  Created .gitkeep`.green);
    write(gitkeepPublicPath, ``);
    console.log(`    ✅  Created public/.gitkeep`.green);
    write(appPath, AppTemplate);
    console.log(`    ✅  Created pages/_app.tsx`.green);
    write(documentPath, DocumentTemplate);
    console.log(`    ✅  Created pages/_document.tsx`.green);
    write(indexPath, IndexTemplate);
    console.log(`    ✅  Created pages/index.tsx`.green);
    write(packagePath, PackageTemplate);
    console.log(`    ✅  Created package.json`.green);
    write(wrapperPath, ReduxWrapperTemplate);
    console.log(`    ✅  Created redux/redux.wrapper.tsx`.green);
    write(reducerPath, ReduxReducerTemplate);
    console.log(`    ✅  Created redux/redux.reducer.tsx`.green);
    write(reducersPath, `[]`);
    console.log(`    ✅  Created redux/reducers.json`.green);
    write(tsconfigPath, TSConfigTemplate);
    console.log(`    ✅  Created tsconfig.json`.green);
}