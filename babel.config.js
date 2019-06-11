module.exports = {
  presets: [['@vue/app', { useBuiltIns: 'entry' }]],
  plugins: [  //babel转 ES5
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
