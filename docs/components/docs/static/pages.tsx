import { useState } from 'react'
import Editor from "@monaco-editor/react";
import { BiCodeAlt } from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import page from '../template/page';
import page2 from '../template/page2';
import page3 from '../template/page3';

export default function Pages() {
    const [code, setCode] = useState(page)
    const [active, setActive] = useState('page')
    const [language, setLanguage] = useState('typescript')

    return (
        <>
            <h3>Creating New Pages</h3>
            <p>
                You can run the following to create a standard new page. This generates a Printer styled page. The following uses an example path of &quot;test&quot;.
                If you specify [url] parameters. Printer will automatically inject the query parameters for you. Review the following examples.
            </p>
            <div className="code">printer page [path]</div>

            <div className="vscode">
                <div className="vscode-nav">
                    <a className="header">
                        <BiCodeAlt className="icon" />
                        New Page
                    </a>
                    <a
                        className={`link ${active === 'page' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(page)
                            setActive('page')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        pages/test.tsx
                    </a>
                    <a
                        className={`link ${active === 'url' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(page2)
                            setActive('url')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        pages/[url].tsx
                    </a>
                    <a
                        className={`link ${active === 'url2' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(page3)
                            setActive('url2')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        pages/[url1]/[url2].tsx
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