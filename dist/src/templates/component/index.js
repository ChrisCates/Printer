"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexTemplate = void 0;
function IndexTemplate(prefix, name) {
    return "import { ".concat(name, "Component } from './").concat(prefix, ".component';\nimport { ").concat(name, " } from './").concat(prefix, ".connect';\nimport { ").concat(name, "Style } from './").concat(prefix, ".style';\n\nexport { ").concat(name, "Component, ").concat(name, ", ").concat(name, "Style }\n\n");
}
exports.IndexTemplate = IndexTemplate;
//# sourceMappingURL=index.js.map