module.exports = {
  lib: ['src/packages/use-component-resize'], // need babel files or dirs
  dontLib: [], // dont babel files or dirs
  copy: {
    'src/packages/use-component-resize': '../src',
    'dist': '../lib',
    'dist/package.json': '../package.json',
  },
  delete: ['dist', '../lib/package.json'], // after copy builded, delete files
  package: {
    "main": "lib/index.js",
    "types": "src/index.d.ts",
    "dependencies": {
      "react": "^16.8.4"
    },
  },
  gitURL: 'github.com/ymzuiku/react-den-form',
};