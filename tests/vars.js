"use strict";
const pep = require('apep');
const pep_std = require('../index');
const assert = require('assert');

describe('vars', function () {
    it('Should extend pep.', () => {
        const pep2 = pep_std(pep);
        let g = 0;
     
        const p = pep2.store('a',
            pep2.lit(5).map(x => { g = x; return x }));
        
        assert.deepStrictEqual(['5'], Array.from(p));
        assert.strictEqual(5, g);
        
        assert.strictEqual(undefined, pep.store);
    });

    it('Should have namespace.', () => {
        let g = 0;
     
        const p = pep_std.vars.store('a',
            pep.lit(5).map(x => { g = x; return x }));
        
        assert.deepStrictEqual(['5'], Array.from(p));
        assert.strictEqual(5, g);
    });
});

