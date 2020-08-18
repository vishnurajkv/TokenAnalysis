"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GraphToQuery_1 = require("./DataProcessing/GraphToQuery");
exports.maxTryCount = 8;
exports.maxQueryDepth = 1000;
exports.ProviderList = [
    "https://nodes.iota.org:443",
];
var NewThefts = [
    "FEYALUZRP9VVDKUNLUBGBDGHRMYUKLSRGX9HNRVKPT99KDELZHWOHJRATORHNKHVBEWZEWBUAOKNVPFPD",
];
exports.command = {
    name: "NewThefts",
    seperateRender: true,
    outputAllTxs: false,
    outputAllBundles: false,
    outputAllAddresses: false,
    outputAllPositiveAddresses: false,
    graphs: [
        new GraphToQuery_1.GraphToQuery("NewThefts", GraphToQuery_1.RenderType.ADD, "#fcc658", "#ffb621", undefined, undefined, NewThefts),
    ]
};
//# sourceMappingURL=settings.js.map