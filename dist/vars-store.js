/**

*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pep = require('apep');

/**
*/
var store = exports.store = function store(name, generator) {
    var nothing = {};
    return pep.get(name, nothing).chain(function (x) {
        return x === nothing ? pep.chain(generator, function (val) {
            return pep.seq(pep.set(name, val), pep.lit(val));
        }) : pep.lit(x);
    });
};
//# sourceMappingURL=vars-store.js.map
