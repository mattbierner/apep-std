"use strict";
const pep = require('apep');
const pep_std = require('../index');
const assert = require('assert');

describe('transformations', function () {
    it('Should extend pep.', () => {
        const pep2 = pep_std(pep);
     
        const p = pep2.upper(['ab', 'c']);
        assert.deepStrictEqual(['AB', 'C'], Array.from(p));
    });

     it('Should have namespace.', () => {     
        const p = pep_std.transformations.upper(['ab', 'c']);
        assert.deepStrictEqual(['AB', 'C'], Array.from(p));
    });
});

