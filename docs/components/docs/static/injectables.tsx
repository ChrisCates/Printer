export default function Injectables() {
  return (
    <>
      <h3>Injectables</h3>
      <p>
        More sophisticated code injections are needed. Probably the biggest
        priority code injection would be slices into components. This would
        simplify so much since it would automatically generate the types, the
        actions and state all for you in the component.
      </p>
      <div className="code">printer inject [slice] [component]</div>
      <p>
        It should support concatentation. So you can inject multiple slices into
        the same component.
      </p>
      <div className="code">
        printer inject slice1 [component]
        <br />
        printer inject slice2 [component]
      </div>
      <p>
        The biggest edge case that probably needs to be accounted for is
        duplication. If they&apos;ve already injected slice1. It should not be
        injected again.
      </p>
    </>
  )
}
