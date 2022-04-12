"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilSessionTemplate = void 0;
var crypto_1 = require("crypto");
exports.UtilSessionTemplate = "export const password = '".concat((0, crypto_1.randomBytes)(32).toString('hex'), "';\n\nexport const Session = {\n  cookieName: 'printer',\n  password,\n  cookieOptions: {\n    secure: process.env.NODE_ENV === 'production',\n  },\n}\n");
//# sourceMappingURL=util.session.js.map