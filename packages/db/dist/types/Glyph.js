"use strict";
exports.__esModule = true;
var nexus_1 = require("nexus");
exports.Glyph = nexus_1.objectType({
    name: 'Glyph',
    definition: function (t) {
        t.model.advanceWidth();
        t.model.createdAt();
        t.model.font();
        t.model.id();
        t.model.index();
        t.model.leftSideBearing();
        t.model.name();
        t.model.rightSideBearing();
        t.model.unicode();
        t.model.unicodes();
        t.model.updatedAt();
        t.model.x1();
        t.model.x2();
        t.model.xMax();
        t.model.xMin();
        t.model.y1();
        t.model.y2();
        t.model.yMax();
        t.model.yMin();
    }
});
exports.glyphQuery = nexus_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.glyph();
        t.crud.glyphs({ filtering: true, ordering: true });
    }
});
exports.glyphMutation = nexus_1.extendType({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneGlyph();
        t.crud.updateOneGlyph();
        t.crud.upsertOneGlyph();
        t.crud.deleteOneGlyph();
        t.crud.updateManyGlyph();
        t.crud.deleteManyGlyph();
    }
});
