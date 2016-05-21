require('babel-core').transform('code', {
  presets: [
    'es2015',
    'stage-0'
  ],
  plugins: [
    require("babel-plugin-transform-react-jsx"),
    require("babel-plugin-transform-flow-strip-types"),
    require("babel-plugin-syntax-flow"),
    require("babel-plugin-syntax-jsx"),
    require("babel-plugin-transform-react-display-name"),
    [require("babel-plugin-transform-es2015-modules-commonjs"), { "loose": true }],
    [require("babel-plugin-transform-regenerator"), { async: true, asyncGenerators: false }]
  ]
});
