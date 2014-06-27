module.exports = Canvas;

function Canvas(img){
  if(!(this instanceof Canvas)){
    return new Canvas();
  }

  this.canvas  = document.createElement('canvas');
  this.context = this.canvas.getContext('2d');

  document.body.appendChild(this.canvas);

  this.width  = this.canvas.width  = img.width;
  this.height = this.canvas.height = img.height;
  this.context.drawImage(img, 0, 0, this.width, this.height);
}

Canvas.prototype.getSize = function(){
  return this.width * this.height;
}

Canvas.prototype.getData = function(){
  return this.context.getImageData(0, 0, this.width, this.height);
}

Canvas.prototype.delete = function(){
  this.canvas.parentNode.removeChild(this.canvas);
}