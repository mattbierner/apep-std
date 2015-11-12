"use strict";
const pep_trans = require('apep-std-transformations');
const pep_vars = require('apep-std-vars');

module.exports = (ext) =>
    [pep_trans, pep_vars]
        .reduce((p, c) => c(p), Object.create(ext || {}));


module.exports.transformations = pep_trans;
module.exports.vars = pep_vars;