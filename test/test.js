var shootIt = require('../index.js');
var fs      = require('fs');

shootIt("http://edit.sx/editor/vsPnvkSca5", function(e, d) {
  console.log("shot taken!");
  console.log(d.path);
  fs.unlink(d.path);
});
