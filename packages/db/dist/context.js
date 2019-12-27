"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var photon_1 = require("@prisma/photon");
dotenv.config();
var photon = new photon_1.Photon({ debug: false });
function createContext() {
    return { photon: photon };
}
exports.createContext = createContext;
