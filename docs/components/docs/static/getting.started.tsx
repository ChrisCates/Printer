export default function GettingStarted() {
  return (
    <>
      <h3>Getting Started</h3>
      <p>
        First thing you have to do to get started is install printer. You can do
        so by running the following command.
      </p>
      <div className="code">npm install -g @chriscates/printer</div>
      <p>
        From there, you can start and create a new Printer template by running
        the &quot;printer new&quot; command. This will create a new project in
        the &quot;project&quot; folder of your current working directory.
      </p>
      <div className="code">printer new project</div>
      <p>
        After that you can then start developing as you would any other Next.js
        project.
      </p>
      <div className="code">
        cd project
        <br />
        yarn
        <br />
        yarn dev
      </div>
      <p>
        This summarizes everything you need to know to get started with Printer.
      </p>
    </>
  )
}
