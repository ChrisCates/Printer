"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleTemplate = void 0;
function StyleTemplate(prefix, name) {
    return "import styled from 'styled-components';\n\nexport const ".concat(name, "Style = styled.div`\n\n`;");
}
exports.StyleTemplate = StyleTemplate;
//# sourceMappingURL=style.js.map