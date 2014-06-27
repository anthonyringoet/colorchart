var quantize = require('quantize');
var Canvas = require('./canvas');

module.exports = Colormap;

function Colormap(){
  if(!(this instanceof Colormap)){
    return new Colormap();
  }
}

Colormap.prototype.get = function(img, count, quality){
  var mapQuality = quality || 10;
  var colorCount = count;

  if(!count || count == '1'){
    colorCount = 5;
  }

  var canvas = new Canvas(img);
  var canvasData = canvas.getData();
  var pixels = canvasData.data;
  var size = canvas.getSize();

  // canvas RGB values in an array format suitable for quantize function
  var rgbArray = [];

  for (var i = 0, offset, r, g, b, a; i < size; i = i + mapQuality) {
    offset = i * 4;
    r = pixels[offset + 0];
    g = pixels[offset + 1];
    b = pixels[offset + 2];
    a = pixels[offset + 3];

    // if a pixel is mostly opaque and not white
    if (a >= 125) {
      if (!(r > 250 && g > 250 && b > 250)) {
        rgbArray.push([r, g, b]);
      }
    }
  }

  var result = quantize(rgbArray, colorCount);
  canvas.delete();

  return result.palette().slice(0, count);
}

Colormap.prototype.getDominant = function(img){
  return this.get(img, 1)[0];
}