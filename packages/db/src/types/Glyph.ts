import { objectType, extendType } from 'nexus'	

export const Glyph = objectType({
  name: 'Glyph',
  definition(t) {
    t.model.advanceWidth()
    t.model.createdAt()
    t.model.font()
    t.model.id()
    t.model.index()
    t.model.leftSideBearing()
    t.model.name()
    t.model.rightSideBearing()
    t.model.unicode()
    t.model.unicodes()
    t.model.updatedAt()
    t.model.x1()
    t.model.x2()
    t.model.xMax()
    t.model.xMin()
    t.model.y1()
    t.model.y2()
    t.model.yMax()
    t.model.yMin()
  },
})

export const glyphQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.glyph()
    t.crud.glyphs({ filtering: true, ordering: true })
  },
})

export const glyphMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneGlyph()
    t.crud.updateOneGlyph()
    t.crud.upsertOneGlyph()
    t.crud.deleteOneGlyph()

    t.crud.updateManyGlyph()
    t.crud.deleteManyGlyph()
  },
})