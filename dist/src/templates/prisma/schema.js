"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaTemplate = void 0;
exports.SchemaTemplate = "generator client {\n    provider = \"prisma-client-js\"\n    previewFeatures = [\"mongoDb\"]\n}\n\ndatasource db {\n    provider = \"mongodb\"\n    url = env(\"DATABASE_URL\")\n}";
//# sourceMappingURL=schema.js.map