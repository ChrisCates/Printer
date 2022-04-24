import { useState } from 'react'
import Editor from "@monaco-editor/react";
import { ImCss3 } from 'react-icons/im'
import { BiCodeAlt, BiCog, BiGitBranch } from 'react-icons/bi'
import { SiBabel, SiNpm, SiNextdotjs } from 'react-icons/si'
import { AppTemplate } from '../../../../src/templates/new/_app'
import { DocumentTemplate } from '../../../../src/templates/new/_document'
import { IndexTemplate } from '../../../../src/templates/new/index'
import { ThemeTemplate } from '../../../../src/templates/new/theme'
import { UtilSessionTemplate } from '../../../../src/templates/new/util.session'
import { ResetTemplate } from '../../../../src/templates/new/reset.css'
import { FontsTemplate } from '../../../../src/templates/new/fonts.css'
import { PrinterTemplate } from '../../../../src/templates/new/printer.css'
import { PackageTemplate } from '../../../../src/templates/new/package'
import { BabelTemplate } from '../../../../src/templates/new/babel'
import { ReduxWrapperTemplate } from '../../../../src/templates/new/redux.wrapper'
import { ReduxReducerTemplate } from '../../../../src/templates/new/redux.reducer'
import { GitIgnoreTemplate } from '../../../../src/templates/new/gitignore'
import { TSConfigTemplate } from '../../../../src/templates/new/tsconfig'
import { PrecommitTemplate } from '../../../../src/templates/new/precommit'
import { EslintrcTemplate } from '../../../../src/templates/new/eslintrc'

export default function NewProject() {
    const [code, setCode] = useState(PackageTemplate)
    const [active, setActive] = useState('package.json')
    const [language, setLanguage] = useState('json')

    return (
        <>
            <h3>Creating A New Project</h3>
            <p>
                You can run the following to create a new project. This generates a baseline Printer template for you to get started developing.
            </p>
            <div className="code">printer new [path]</div>

            <div className="vscode">
                <div className="vscode-nav">
                    <a className="header">
                        <BiCodeAlt className="icon" />
                        New Project
                    </a>
                    <a
                        className={`link ${active === 'package.json' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(PackageTemplate)
                            setActive('package.json')
                            setLanguage('json')
                        }}
                    >
                        <SiNpm className="icon" />
                        package.json
                    </a>
                    <a
                        className={`link ${active === '_app.tsx' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(AppTemplate)
                            setActive('_app.tsx')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        pages/_app.tsx
                    </a>
                    <a
                        className={`link ${active === '_document.tsx' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(DocumentTemplate)
                            setActive('_document.tsx')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        pages/_document.tsx
                    </a>
                    <a
                        className={`link ${active === 'pages/index.tsx' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(IndexTemplate)
                            setActive('pages/index.tsx')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        pages/index.tsx
                    </a>
                    <a
                        className={`link ${active === 'components/theme.tsx' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(ThemeTemplate)
                            setActive('components/theme.tsx')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        components/theme.tsx
                    </a>
                    <a
                        className={`link ${active === 'util/session.ts' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(UtilSessionTemplate)
                            setActive('util/session.ts')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        util/session.ts
                    </a>
                    <a
                        className={`link ${active === 'wrapper.tsx' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(ReduxWrapperTemplate)
                            setActive('wrapper.tsx')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        redux/wrapper.tsx
                    </a>
                    <a
                        className={`link ${active === 'reducer.tsx' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(ReduxReducerTemplate)
                            setActive('reducer.tsx')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        redux/reducer.tsx
                    </a>
                    <a
                        className={`link ${active === 'reset.css' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(ResetTemplate)
                            setActive('reset.css')
                            setLanguage('css')
                        }}
                    >
                        <ImCss3 className="icon" />
                        public/assets/css/reset.css
                    </a>
                    <a
                        className={`link ${active === 'fonts.css' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(FontsTemplate)
                            setActive('fonts.css')
                            setLanguage('css')
                        }}
                    >
                        <ImCss3 className="icon" />
                        public/assets/css/fonts.css
                    </a>
                    <a
                        className={`link ${active === 'printer.css' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(PrinterTemplate)
                            setActive('printer.css')
                            setLanguage('css')
                        }}
                    >
                        <ImCss3 className="icon" />
                        public/assets/css/printer.css
                    </a>
                    <a
                        className={`link ${active === 'tsconfig.json' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(TSConfigTemplate)
                            setActive('tsconfig.json')
                            setLanguage('json')
                        }}
                    >
                        <BiCog className="icon" />
                        tsconfig.json
                    </a>
                    <a
                        className={`link ${active === 'husky' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(PrecommitTemplate)
                            setActive('husky')
                            setLanguage('shell')
                        }}
                    >
                        <BiCog className="icon" />
                        .husky/pre-commit
                    </a>
                    <a
                        className={`link ${active === 'eslint' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(EslintrcTemplate)
                            setActive('eslint')
                            setLanguage('javascript')
                        }}
                    >
                        <BiCog className="icon" />
                        .eslintrc.js
                    </a>
                    <a
                        className={`link ${active === '.babelrc' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(BabelTemplate)
                            setActive('.babelrc')
                            setLanguage('json')
                        }}
                    >
                        <SiBabel className="icon" />
                        .babelrc
                    </a>
                    <a
                        className={`link ${active === '.gitignore' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(GitIgnoreTemplate)
                            setActive('.gitignore')
                            setLanguage('shell')
                        }}
                    >
                        <BiGitBranch className="icon" />
                        .gitignore
                    </a>
                    <a className="link">
                        <BiGitBranch className="icon" />
                        .gitkeep
                    </a>
                    <a className="link">
                        <BiGitBranch className="icon" />
                        public/.gitkeep
                    </a>
                </div>
                <div className="vscode-content">
                    <Editor
                        width="100%"
                        height="100%"
                        theme="vs-dark"
                        loading=""
                        options={{
                            lineNumbers: 'off',
                            padding: {
                                top: 15,
                                bottom: 15
                            },
                            minimap: { enabled: false },
                        }}
                        language={language}
                        value={code}
                    />
                </div>
            </div>
        </>
    )
}