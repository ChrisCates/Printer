"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentTemplate = void 0;
function ComponentTemplate(prefix, name) {
    return "import { ".concat(name, "Style } from './").concat(prefix, ".style';\n\nexport interface ").concat(name, "I {\n\n}\n\nexport function ").concat(name, "Component({ }: ").concat(name, "I) {\n    return(\n        <").concat(name, "Style>\n\n        </").concat(name, "Style>\n    );\n}\n");
}
exports.ComponentTemplate = ComponentTemplate;
//# sourceMappingURL=component.js.map