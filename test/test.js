var shootIt = require('../index.js');

shootIt("http://edit.sx/editor/vsPnvkSca5", function(e, d) {
  console.log("shot taken!");
  console.log(d.path);
});
