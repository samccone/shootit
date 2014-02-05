var spawn = require('child_process').spawn;
var fs    = require('fs');
var path  = require('path');

module.exports = function(url, cb) {
  var name      = Math.random() + ".png";
  var location  = path.join("/tmp", name);
  var script    = path.join(__dirname, 'shoot.js');

  var p = spawn('phantomjs', [script, url, location]);

  p.stderr.on('data', function(e){
    console.log("~~ AN ERROR OCCURED ~~");
    console.log(e.toString());
  });

  p.stdout.on('data', function(d) {
    console.log(d.toString());
  });

  p.stdout.on('error', function(e) {
    console.log("phantomjs error");
    console.log(e);
    cb(e, null);
  });

  p.stdout.on('end', function() {
    fs.readFile(location, function(e, d) {
      cb(e, {
        fileBuffer: d,
        path: location
      });
    });
  });
}

