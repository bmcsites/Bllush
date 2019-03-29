const merge = require('concat');
const fs = require('fs');

const files = [
  './dist/suggested-widget/runtime.js',
  './dist/suggested-widget/polyfills.js',
  './dist/suggested-widget/scripts.js',
  './dist/suggested-widget/main.js'
];

// merge all files to one file .
merge(files, './dist/suggested-widget/suggestedwidget.js');

// console that file was generated
console.info('file generated');

// function that delete the unnecessary files .
function deleteFiles(files, callback){
  if (files.length === 0) callback();
  else {
    var f = files.pop();
    fs.unlink(f, function(err){
      if (err) callback(err);
      else {
        console.log(f + ' deleted.');
        deleteFiles(files, callback);
      }
    });
  }
}

// copy the injectwidget.js file to the dist folder.
fs.copyFile('./injectwidget.js', './dist/suggested-widget/injectwidget.js', (err) => {
  if (err) throw err;
  // call the delete files function.
  deleteFiles(files, function(err) {
    if (err) {
      console.log(err);
    } else {
      // console that the file was deleted.
      console.log('all files removed');
      // create new index.html file for the demo.
      fs.writeFile('./dist/suggested-widget/index.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>SuggestedWidget</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div id="suggested-stories-container"></div><script type="text/javascript" src="./injectwidget.js"></script></body></html>', function(){console.log('widget is ready')})
    }
  });
});


