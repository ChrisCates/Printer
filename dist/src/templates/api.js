"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTemplate = void 0;
function ApiTemplate(name) {
    return "import { NextApiRequest, NextApiResponse } from 'next';\nimport { withIronSessionApiRoute } from 'iron-session/next';\nimport { Session } from 'util/session';\n\nexport const ".concat(name, " = withIronSessionApiRoute(\n    async (req: NextApiRequest, res: NextApiResponse) => {\n        res.status(200).send({ 'status': 'OK' })\n    },\n    Session,\n);\n\nexport default ").concat(name, ";\n");
}
exports.ApiTemplate = ApiTemplate;
//# sourceMappingURL=api.js.map