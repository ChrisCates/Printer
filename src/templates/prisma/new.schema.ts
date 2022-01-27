export function NewSchemaTemplate (name: string) {
  return `model ${name} {
    id String @id @default(dbgenerated()) @map("_id") @db.ObjectId
}`
}
