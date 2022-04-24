export default function Themes() {
    return (
        <>
            <h3>Themes</h3>
            <p>
                Eventually, I will be creating custom themes. These themes will be useful components similar to a template like MUI or Chakra.
            </p>
            <div className="code">printer theme [optional url]</div>
            <p>
                By default the first iteration would be the &quot;vanilla&quot; theme. Eventually, I would love for anyone to be able to create a theme. And all you have to do is point
                to their Github repo and it will auto import their theme to your codebase.
            </p>

            <div className="code">
                theme/colors<br/>
                theme/fonts<br/>
                theme/button<br/>
                theme/loader<br/>
                theme/input<br/>
                ... and so forth
            </div>
        </>
    )
}