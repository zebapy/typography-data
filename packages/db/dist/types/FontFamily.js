"use strict";
exports.__esModule = true;
var nexus_1 = require("nexus");
exports.FontFamily = nexus_1.objectType({
    name: 'FontFamily',
    definition: function (t) {
        t.model.category();
        t.model.createdAt();
        t.model.family();
        t.model.id();
        t.model.kind();
        t.model.lastModified();
        t.model.subsets();
        t.model.updatedAt();
        t.model.variants();
        t.model.version();
        t.model.fonts();
        t.model.fontFiles();
    }
});
exports.fontFamilyQuery = nexus_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.fontFamily();
        t.crud.fontFamilies({ filtering: true, ordering: true });
    }
});
exports.fontFamilyMutation = nexus_1.extendType({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneFontFamily();
        t.crud.updateOneFontFamily();
        t.crud.upsertOneFontFamily();
        t.crud.deleteOneFontFamily();
        t.crud.updateManyFontFamily();
        t.crud.deleteManyFontFamily();
    }
});
