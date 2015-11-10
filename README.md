# babel-plugin-transform-import-extension-es6-to-js

This Babel 6 plugin transforms the extension of imported files from .es6 to .js.

For example:

```
import { foo } from 'foo.es6';

```

Becomes:

```
import { foo } from 'foo.js';
```


All this does is use `resolveModuleSource`: 

```
babel.transform('code', {
  resolveModuleSource: function (source) {
    return source.replace('.es6', '.js');
  }
})
```

which unfortunately cannot be specified via babel-cli.
