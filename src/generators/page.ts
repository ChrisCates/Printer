import { join } from 'path';
import { write } from 'fs-jetpack';

import { PageTemplate } from '../templates/page';

export async function generatePage(path: string) {
    const pathArray = path.split('/');
    const fileName = pathArray[pathArray.length - 1];
    let name = fileName.replace(/[^\w\s]/gi, '')
    
    if (fileName.indexOf(`.`) !== -1) {
        name = fileName.split(`.`).map(word => word[0].toUpperCase() + word.substring(1)).join(``);
    } else if (fileName.indexOf(`-`) !== -1) {
        name = fileName.split(`-`).map(word => word[0].toUpperCase() + word.substring(1)).join(``);
    } else {
        name = name[0].toUpperCase() + name.substring(1);
    }

    const pagePath = join(process.cwd(), 'pages', `${path}.tsx`);

    write(pagePath, PageTemplate(name));
    console.log(`    ✅  Created pages/${path}.tsx`.green);
}