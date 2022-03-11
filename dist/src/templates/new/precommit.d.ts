export declare const PrecommitTemplate = "#!/bin/sh\n. \"$(dirname \"$0\")/_/husky.sh\"\n\nnpm run lint\nnpm run build\n";
