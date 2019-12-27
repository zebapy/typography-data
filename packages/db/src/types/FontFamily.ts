import { objectType, extendType } from 'nexus'	

export const FontFamily = objectType({
  name: 'FontFamily',
  definition(t) {
    t.model.category()
    t.model.createdAt()
    t.model.family()
    t.model.id()
    t.model.kind()
    t.model.lastModified()
    t.model.subsets()
    t.model.updatedAt()
    t.model.variants()
    t.model.version()
    t.model.fonts()
    t.model.fontFiles()
  },
})

export const fontFamilyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.fontFamily()
    t.crud.fontFamilies({ filtering: true, ordering: true })
  },
})

export const fontFamilyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFontFamily()
    t.crud.updateOneFontFamily()
    t.crud.upsertOneFontFamily()
    t.crud.deleteOneFontFamily()

    t.crud.updateManyFontFamily()
    t.crud.deleteManyFontFamily()
  },
})