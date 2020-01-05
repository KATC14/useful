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

function checker(value, prohibited, ra) {
  if(ra == true){
    var pa = []
    var notarray = ""
    for (var i = 0; i < prohibited.length; i++) {
      if (value.indexOf(prohibited[i].toLowerCase()) > -1) {
        pa.push(prohibited[i])
      }
    }
    for (var i2 = 0; i2 < pa.length; i2++) {
      if(pa[i2] != ""){
        notarray += "{}, ".format(pa[i2])
      }
    }
    return notarray;
  }else{
    for (var i = 0; i < prohibited.length; i++) {
      if (value.indexOf(prohibited[i].toLowerCase()) > -1) {
        if(prohibited[i] != ""){
          notarray += "{}, ".format(prohibited[i])
        }
      }
    }
    return notarray;
  }
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function eventremove(element, deep) {
  if(deep==undefined){var deep = true}
  var new_element = element.cloneNode(deep);
  element.parentNode.replaceChild(new_element, element);
}
