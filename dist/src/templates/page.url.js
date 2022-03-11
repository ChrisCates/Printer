"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageUrlTemplate = void 0;
function PageUrlTemplate(name, url) {
    return "import { useRouter } from 'next/router'\nimport { connect } from 'react-redux'\n  \nexport interface ".concat(name, "I {\n\n}\n\nexport function ").concat(name, "({ }: ").concat(name, "I) {\n    const router = useRouter()\n    const { ").concat(url.join(', '), " } = router.query  \n\n    return <h1>Welcome to Printer</h1>\n}\n\nexport const ").concat(name, "State = state => ({\n\n})\n\nexport const ").concat(name, "Actions = { }\n\nexport default connect(").concat(name, "State, ").concat(name, "Actions)(").concat(name, ")\n");
}
exports.PageUrlTemplate = PageUrlTemplate;
//# sourceMappingURL=page.url.js.map