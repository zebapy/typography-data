"use strict";
exports.__esModule = true;
var nexus_1 = require("nexus");
exports.FontFile = nexus_1.objectType({
    name: 'FontFile',
    definition: function (t) {
        t.model.createdAt();
        t.model.file();
        t.model.fontFamily();
        t.model.id();
        t.model.name();
        t.model.updatedAt();
    }
});
exports.fontFileQuery = nexus_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.fontFile();
        t.crud.fontFiles({ filtering: true, ordering: true });
    }
});
exports.fontFileMutation = nexus_1.extendType({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneFontFile();
        t.crud.updateOneFontFile();
        t.crud.upsertOneFontFile();
        t.crud.deleteOneFontFile();
        t.crud.updateManyFontFile();
        t.crud.deleteManyFontFile();
    }
});
