import { objectType, extendType } from 'nexus'	

export const FontFile = objectType({
  name: 'FontFile',
  definition(t) {
    t.model.createdAt()
    t.model.file()
    t.model.fontFamily()
    t.model.id()
    t.model.name()
    t.model.updatedAt()
  },
})

export const fontFileQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.fontFile()
    t.crud.fontFiles({ filtering: true, ordering: true })
  },
})

export const fontFileMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFontFile()
    t.crud.updateOneFontFile()
    t.crud.upsertOneFontFile()
    t.crud.deleteOneFontFile()

    t.crud.updateManyFontFile()
    t.crud.deleteManyFontFile()
  },
})