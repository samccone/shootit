shoot-it
=======
## A light wrapper around phantomjs

#### Dependencies
* ensure phantomjs is in your path

#### install
`npm install shootit`

#### How To Use

```js
require('shootit')('http://google.com', function(e, d) {
  //e == error
  //d.fileBuffer == file buffer
  //d.path == file path
});
```
