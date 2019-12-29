String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild(style);
}

const countOccurrencesOf = (word, search) => {
  var countof = word.filter(el => el.includes(search));
  return countof
};

function rgbToHex(code) {
  var rgb = code.replace("rgb(", "").replace(")", "").split(',');
  var r = parseInt(rgb[0]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2]);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function ComputedStyle(element, PropertyValue, PseudoElement) {
  var CStyle = window.getComputedStyle(element, PseudoElement);
  var PValue = CStyle.getPropertyValue(PropertyValue)
  return PValue
}

/*I realized that moment.js was a thing*/
