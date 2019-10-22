# Development

`/development` is directory that local develop.

```bash
$ cd ./packages/@stylelint-starterkit-plugin/cli
$ yarn link
$ cd ../../../development
$ yarn stylelint-starterkit-plugin
```

If you want to add something module for packages.

```bash
$ yarn workspace <package-name> add something-package

# example
$ yarn workspace @stylelint-starterkit-plugin/cli add fs-extra
```
