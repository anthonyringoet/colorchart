## colorchart

Get most used colors in an image (in the browser).
Compatible with browserify.

Based on https://github.com/lokesh/color-thief but commonjs compatible and using the quantize module from npm.

```
npm install colorchart
```

## Use

### Get color palette

```
var colormap = require('colormap')();

// arg 1 = dom image node to parse
// arg 2 = amount of colors get back
// arg 3 = quality level/accuracy to use in algorithm (default = 10)

var palette = colormap.get(document.querySelector('img'), 5);
```

### Get dominant color

```
var colormap = require('colormap')();
var palette = colormap.getDominant(document.querySelector('img'));
```

Go to ```/example``` folder and run ```npm run example-js & npm start``` for a working example.

## License
MIT licensed