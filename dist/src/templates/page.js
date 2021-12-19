"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTemplate = void 0;
function PageTemplate(name) {
    return "export function ".concat(name, "() {\n    return (<h1>Hello, from Printer</h1>);\n}\n\nexport default ").concat(name, ";");
}
exports.PageTemplate = PageTemplate;
//# sourceMappingURL=page.js.map