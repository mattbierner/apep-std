Common generators and combinators for the [Apep Javascript text generation library][apep].

# Usage

```sh
$ npm install apep-std
```

You can `apep-std` as a collection of libraries:

```js
const pep = require('apep');
const pep_vars = require('apep-std').vars;
const pep_trans = require('apep-std').transformations;

const p = pep_vars.store('var', pep_trans.upper(...));
```

Or to extend an Apep include with new APIs:

```js
const pep = require('apep-std')(require('apep'));

const p = pep.store('var', pep.upper(...));
```

# API
Apep-std is just a collection of sub libraries, each of which exposes one or more APIs. See each sub library for documentation.

* `sep` - [Apep-std-sep](https://github.com/mattbierner/apep-std-sep) - Helper combinators for working with sequencing generators.
* `transformations` - [Apep-std-transformations](https://github.com/mattbierner/apep-std-transformations) - Transforming text (capitalization, replacement, matching, ...).
* `vars` - [Apep-std-vars](https://github.com/mattbierner/apep-std-vars) - Working with variables (caching values).


[apep]: https://github.com/mattbierner/apep
