/**

*/
"use strict";
const pep = require('apep');


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
export const storeCombined = (f, z, name, generator) => {
    const computeValue = pep.chain(
        pep.combine(f, z, generator),
        val =>
            pep.seq(pep.set(name, val), pep.lit(val)));
    
    const nothing = {};
    return pep.get(name, nothing)
        .chain(x =>
            x === nothing ? computeValue : pep.lit(x));
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
export const store = storeCombined.bind(null, (p, c) => p + c, '');

