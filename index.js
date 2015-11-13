"use strict";

module.exports = (ext) =>
    Object.keys(module.exports)
        .reduce((p, c) => module.exports[c](p), Object.create(ext || {}));


module.exports.sep = require('apep-std-sep');
module.exports.transformations = require('apep-std-transformations');
module.exports.vars = require('apep-std-vars');
