var spawn = require('child_process').spawn;
var fs    = require('fs');
var path  = require('path');

module.exports = function(url, cb) {
  var name = Math.random() + ".png";
  var p = spawn('phantomjs', ['shoot.js', url, name]);

  p.stdout.on('data', function(d) {
    console.log(d.toString());
  });

  p.stdout.on('error', function(e) {
    console.log("phantomjs error");
    console.log(e);
    cb(e, null);
  });

  p.stdout.on('end', function() {
    fs.readFile(name, function(e, d) {
      cb(e, {
        fileBuffer: d,
        path: path.join(__dirname, name)
      });
    });
  });
}

