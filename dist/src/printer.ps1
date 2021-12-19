function Get-ScriptDirectory {
	$Invocation = (Get-Variable MyInvocation -Scope 1).Value
	Split-Path $Invocation.MyCommand.Path
}

node "$(Get-ScriptDirectory)/print.js" $args