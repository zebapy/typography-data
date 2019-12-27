import { objectType, extendType } from 'nexus'	

export const Font = objectType({
  name: 'Font',
  definition(t) {
    t.model.ascender()
    t.model.compatibleFullName()
    t.model.copyright()
    t.model.createdAt()
    t.model.descender()
    t.model.description()
    t.model.designer()
    t.model.designerURL()
    t.model.family()
    t.model.fontFamily()
    t.model.fontFile()
    t.model.fontSubfamily()
    t.model.fullName()
    t.model.id()
    t.model.license()
    t.model.licenseURL()
    t.model.manufacturer()
    t.model.manufacturerURL()
    t.model.numberOfHMetrics()
    t.model.numGlyphs()
    t.model.outlinesFormat()
    t.model.postScriptName()
    t.model.preferredFamily()
    t.model.preferredSubfamily()
    t.model.sampleText()
    t.model.supported()
    t.model.trademark()
    t.model.uniqueID()
    t.model.unitsPerEm()
    t.model.updatedAt()
    t.model.version()
    t.model.glyphs()
  },
})

export const fontQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.font()
    t.crud.fonts({ filtering: true, ordering: true })
  },
})

export const fontMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFont()
    t.crud.updateOneFont()
    t.crud.upsertOneFont()
    t.crud.deleteOneFont()

    t.crud.updateManyFont()
    t.crud.deleteManyFont()
  },
})