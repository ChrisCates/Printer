import { IndexTitleStyle } from './index.title.style';
import { FiGithub, FiBook } from 'react-icons/fi';

export interface IndexTitleI {

}

export function IndexTitleComponent({ }: IndexTitleI) {
    return(
        <IndexTitleStyle>
            <div className="brand">
                <img src="/image/printer.png"/>
                <div className="text">
                    <h1>Printer</h1>
                    <p>A code generation tool for Next.js, Redux, Prisma Development.</p>
                    <div className="buttons">
                        <a className="button" href="https://github.com/ChrisCates/Printer" target="github">
                            <FiGithub className="i"/>
                            Github
                        </a>
                        <a className="button" href="https://github.com/ChrisCates/Printer/blob/master/CLI.md" target="guide">
                            <FiBook className="i"/>
                            Guide
                        </a>
                    </div>
                </div>
            </div>
            <div className="panel">
                <div className="window">
                    <div className="window-buttons">
                        <div className="window-button yellow"/>
                        <div className="window-button green"/>
                        <div className="window-button red"/>
                    </div>
                    <div className="window-inner">
                        <textarea value={`λ printer new project
👷  Generating new Printer project
    ✅  Created .babelrc
    ✅  Created .gitignore
    ✅  Created .gitkeep
    ✅  Created public/.gitkeep
    ✅  Created pages/_app.tsx
    ✅  Created pages/_document.tsx
    ✅  Created pages/index.tsx
    ✅  Created package.json
    ✅  Created redux/redux.wrapper.tsx
    ✅  Created redux/redux.reducer.tsx
    ✅  Created redux/reducers.json
    ✅  Created tsconfig.json`}/>
                    </div>
                </div>
            </div>
        </IndexTitleStyle>
    );
}
