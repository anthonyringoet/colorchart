var colormap = require('../lib')();
var img = document.querySelector('img');
var form = document.querySelector('form');
var select = form.querySelectorAll('select')[0];

form.addEventListener('submit', function(e){
  e.preventDefault();
  updateColors(colormap.get(img, form.querySelectorAll('#number')[0].value));

  console.log('dominant color: ', colormap.getDominant(img));
});

select.addEventListener('change', function(e){
  img.src = './img/' + e.srcElement.value + '.png';
  updateColors();
});


function updateColors(array){
  var list = document.querySelectorAll('.colors')[0];
  list.innerHTML = '';

  if(!array){
    return;
  }

  var doc = new DocumentFragment();

  for (var i = 0; i < array.length; i++) {
    var el = document.createElement('li');
    var rgbValue = 'rgb(' + array[i][0] + ',' + array[i][1] + ',' + array[i][2] + ')';

    el.style.backgroundColor = rgbValue;
    el.innerText = rgbValue;

    doc.appendChild(el);
  };

  list.appendChild(doc);
}