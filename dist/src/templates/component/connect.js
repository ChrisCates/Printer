"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectTemplate = void 0;
function ConnectTemplate(prefix, name) {
    return "import { connect } from 'react-redux';\nimport { ".concat(name, "Component } from './").concat(prefix, ".component';\n\nexport const ").concat(name, "State = state => ({\n\n});\n\nexport const ").concat(name, "Actions = ({\n\n});\n\nexport const ").concat(name, " = connect(").concat(name, "State, ").concat(name, "Actions)(").concat(name, "Component);");
}
exports.ConnectTemplate = ConnectTemplate;
//# sourceMappingURL=connect.js.map