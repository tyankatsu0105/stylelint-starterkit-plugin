# Development

`/development` is directory that local develop.

```bash
$ cd ./packages/cli
$ yarn link
$ cd ../../
$ cd yarn install
$ cd ./development
$ yarn stylelint-starterkit-plugin
```

If you want to add something module for packages.

```bash
$ yarn workspace <package-name> add something-package

# example
$ yarn workspace cli add fs-extra
```
