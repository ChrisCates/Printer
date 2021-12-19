"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSchemaTemplate = void 0;
function NewSchemaTemplate(name) {
    return "model ".concat(name, " {\n    id String @id @default(dbgenerated()) @map(\"_id\") @db.ObjectId\n}");
}
exports.NewSchemaTemplate = NewSchemaTemplate;
//# sourceMappingURL=new.schema.js.map