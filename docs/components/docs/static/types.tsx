export default function Types() {
    return (
        <>
            <h3>Types</h3>
            <p>
                Autogenerating types will be an important feature for Printer to implement. A future spec would probably implement a nodemon daemon
                that would auto generate types for slices. And if applicable, types for Components as well. I'm also not against the idea of a procedural
                command. It would most likely look something like this.
            </p>
            <div className="code">printer type [path] --slice [slice path]</div>
            <p>
                And for Components it would look like this.
            </p>
            <div className="code">printer type [path] --component [component path]</div>
            <p>
                I am most likely going to have the command available for reference purposes. However, auto generation via a node daemon would be most optimal.
                How types are generated is TBD. Since auto generation could also potentially give rise to the problem of overwriting.
            </p>
        </>
    )
}