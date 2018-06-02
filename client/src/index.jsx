var component = function() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Shop', 'Prodcuts'], ' ');
  return element;
}

document.body.appendChild(component());