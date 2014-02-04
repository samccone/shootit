var args    = require('system').args
var page    = require('webpage').create();
var url     = args[1];
var path    = args[2];

console.log("phantomjs booted");
page.viewportSize = { width: 900, height: 600 };

page.open(url, function() {
  console.log("phantomjs page opened " + url);
  page.render(path);
  phantom.exit();
});
