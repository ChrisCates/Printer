export const PrecommitTemplate = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run build
`
