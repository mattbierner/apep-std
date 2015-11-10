/**

*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pep = require('apep');

/**
    Get the currently stored value of a variable or compute it with a generator.

    Yields the result value.

    @param f Accumulator function to reduce multiple yields from `generator` to
        a single value.
    @param z Initial value for accumulator.
    @param name Variable name.
    @param generator Generator run to produce the value.

    The function always stores value as strings. The output of multiple
    yielding generators are joined together into a single string value which 
    is yielded once.
*/
var storeCombined = exports.storeCombined = function storeCombined(f, z, name, generator) {
    var computeValue = pep.chain(pep.combine(f, z, generator), function (val) {
        return pep.seq(pep.set(name, val), pep.lit(val));
    });

    var nothing = {};
    return pep.get(name, nothing).chain(function (x) {
        return x === nothing ? computeValue : pep.lit(x);
    });
};

/**
    Get the currently stored value of a variable or compute it with a generator.

    Yields the result value.

    @param name Variable name.
    @param generator Generator run to produce the value.

    The function always stores value as strings. The output of multiple
    yielding generators are joined together into a single string value which 
    is yielded once.
*/
var store = exports.store = storeCombined.bind(null, function (p, c) {
    return p + c;
}, '');
//# sourceMappingURL=vars.js.map
