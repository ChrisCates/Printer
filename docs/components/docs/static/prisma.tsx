import { useState } from 'react'
import Editor from "@monaco-editor/react";
import { BiCodeAlt } from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import prisma from '../template/prisma';
import schema from '../template/schema';

export default function Prisma() {
    const [code, setCode] = useState(prisma)
    const [active, setActive] = useState('prisma')
    const [language, setLanguage] = useState('typescript')

    return (
        <>
            <h3>Adding Prisma</h3>
            <p>
                You can run the following to add prisma. In the future. This command will be used to auto generate types from the prisma schema. You are honestly better off using
                npx prisma init instead of this command.
            </p>
            <div className="code">printer prisma</div>

            <div className="vscode">
                <div className="vscode-nav">
                    <a className="header">
                        <BiCodeAlt className="icon" />
                        Adding Prisma
                    </a>
                    <a
                        className={`link ${active === 'prisma' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(prisma)
                            setActive('prisma')
                            setLanguage('typescript')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        prisma/prisma.tsx
                    </a>
                    <a
                        className={`link ${active === 'schema' ? 'active' : ''}`}
                        onClick={e => {
                            setCode(schema)
                            setActive('schema')
                            setLanguage('shell')
                        }}
                    >
                        <SiNextdotjs className="icon" />
                        prisma/schema.prisma
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