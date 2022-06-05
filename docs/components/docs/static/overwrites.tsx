export default function Overwrites() {
  return (
    <>
      <h3>Overwrites</h3>
      <p>
        If you want to customize some of the default templates. It would be
        great if there was a sub folder called &quot;.printer&quot; where you
        could store the overwrites.
      </p>
      <div className="code">printer overwrite</div>

      <p>
        This would then generate the following code where you can modify and
        overwrite the default Printer templates.
      </p>

      <div className="code">
        .printer/overwrite/component/...
        <br />
        .printer/overwrite/slice/...
        <br />
        ... and so forth
      </div>
    </>
  )
}
