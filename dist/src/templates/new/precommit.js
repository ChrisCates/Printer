"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecommitTemplate = void 0;
exports.PrecommitTemplate = "#!/bin/sh\n. \"$(dirname \"$0\")/_/husky.sh\"\n\nnpm run lint\nnpm run build\n";
//# sourceMappingURL=precommit.js.map