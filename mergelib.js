const merge = require('concat');

const files = [
  './dist/suggested-widget/runtime.js',
  './dist/suggested-widget/polyfills.js',
  './dist/suggested-widget/scripts.js',
  './dist/suggested-widget/main.js'
];

merge(files, './dist/suggested-widget/suggestedwidget.js');
console.info('file generated');
