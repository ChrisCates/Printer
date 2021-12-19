"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTemplate = void 0;
exports.PrismaTemplate = "import { PrismaClient } from \"@prisma/client\";\n\nlet prisma: PrismaClient;\n\nif (process.env.NODE_ENV === 'production') {\n  prisma = new PrismaClient();\n} else {\n  if (!global.prisma) {\n    global.prisma = new PrismaClient();\n  }\n  \n  prisma = global.prisma;\n}\n\nexport default prisma;";
//# sourceMappingURL=prisma.js.map