"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTemplate = void 0;
function PageTemplate(name) {
    return "import { connect } from 'react-redux'\n\nexport interface ".concat(name, "I {\n\n}\n\nexport function ").concat(name, "({ }: ").concat(name, "I) {\n  return <h1>Welcome to Printer</h1>\n}\n\nexport const ").concat(name, "State = state => ({\n\n})\n\nexport const ").concat(name, "Actions = { }\n\nexport default connect(").concat(name, "State, ").concat(name, "Actions)(").concat(name, ")\n");
}
exports.PageTemplate = PageTemplate;
//# sourceMappingURL=page.js.map