export default function Structure() {
    return (
        <>
            <h3>Structuring Projects</h3>
            <p>
                Most commands in Printer make assumptions for you. The only command that is more up to the discretion of the user is the &quot;component&quot; command.
                In general, I suggest you structure components based on the page and it's feature. This is the easiest way to structure components.
            </p>
            <div className="code">printer component components/[page]/[feature]<br/><span className="hl"># example</span><br/>printer component components/index/title</div>
            <p>
                Furthermore, any &quot;shared&quot; component goes into the shared folder.
            </p>
            <div className="code">printer component components/shared/[feature]<br/><span className="hl"># example</span><br/>printer component components/shared/header</div>
            <p>
                In general, I recommend using the &quot;public/assets&quot; folder to store any public facing content.
            </p>
            <div className="code">public/assets/css<br/>public/assets/font<br/>public/assets/image<br/>public/assets/video<br/>... and so forth</div>
        </>
    )
}