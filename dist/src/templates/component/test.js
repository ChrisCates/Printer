"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTemplate = void 0;
function TestTemplate(prefix, name) {
    return "import { ".concat(name, "Component } from './").concat(prefix, ".component';\nimport { ").concat(name, " } from './").concat(prefix, ".connect';\n");
}
exports.TestTemplate = TestTemplate;
//# sourceMappingURL=test.js.map