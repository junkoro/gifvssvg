var fs = require('fs');

var path = "./post_optim/";
var fileNames = fs.readdirSync(path);
fileNames = fileNames.filter(function(element, index, array) {
  return element.match(/\.png$/);
});

var xml = "";
for (var i = 0; i < fileNames.length; i++) {
  var fileName = fileNames[i];
  console.log("encoding:" + fileName);
  var file = fs.readFileSync(path + fileName);
  var base64 = new Buffer(file).toString('base64');
  var imgTag = "<image width='200' height='200' style='display: none;' xlink:href='data:image/png;base64,";
  imgTag += base64;
  imgTag += "' />\n";
  xml += imgTag;
}

console.log("writing imgTags.xml");
fs.writeFileSync("imgTags.xml", xml);
