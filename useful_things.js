String.prototype.format = function () {
  var args = arguments;
  this.unkeyed_index = 0;
  return this.replace(/\{(\w*)\}/g, function(match, key) { 
    if (key === '') {
      key = this.unkeyed_index;
      this.unkeyed_index++
    }
    if (key == +key) {
      return args[key] !== 'undefined' ? args[key] : match;
    } else {
      for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === 'object' && typeof args[i][key] !== 'undefined') {
          return args[i][key];
        }
      }
      return match;
    }
  }.bind(this));
};

function addGlobalStyle(css) {
  var head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  var headNodes = head.childNodes
  for (var i = 0; i < headNodes.length; i++) {
    if(headNodes[i].nodeName == 'STYLE'){
      if(headNodes[i].innerHTML == css){return}
    }
  }
  var style = document.createElement('style');
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

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(result[1], 16)
  var g = parseInt(result[2], 16)
  var b = parseInt(result[3], 16)
  return 'rgb('+r+', '+g+', '+b+')'
}

function ComputedStyle(element, PropertyValue, PseudoElement) {
  var PValueArray = []
  var CStyle = window.getComputedStyle(element, PseudoElement);
  if (Array.isArray(PropertyValue)) {
    for (var i = 0; i < PropertyValue.length; i++) {
      var PValue = CStyle.getPropertyValue(PropertyValue[i])
      PValueArray.push(PValue)
    }
    return PValueArray
  } else {
    var PValue = CStyle.getPropertyValue(PropertyValue)
    return PValue
  }
}

function TCC(element, background) {
  var rgb = []
  rgb.push(background.split(', ')[0].split('(')[1])
  rgb.push(background.split(', ')[1])
  rgb.push(background.split(', ')[2].split(')')[0])
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000)
  if (o > 125) {element.style.color = 'black'}else{element.style.color = 'white'}
}

function eventFire(el, etype){
  if (el.fireEvent){el.fireEvent(etype)}else{
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

/*I realized that moment.js was a thing*/

function ElementCreate(type, attributes, append){
  var element = document.createElement(type);
  for(var key in attributes){
    if (key == "class") {
      element.classList.add.apply(element.classList, attributes[key]); // add all classes at once
    }else if(key == 'style'){
      for(var i = 0, max = attributes[key].length; i < max; i++){
        element.style.cssText += attributes[key][i]
      }
    }else{
      element[key] = attributes[key]
    }
  }
  append.appendChild(element)
}

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

function arrayremoval(array, search) {/*arrayremoval([1,2,3,4], [1,3])*/
  var searcharray = []
  if (parseInt(search) == 0) {
    for (var i = 0, max = search.length; i < max; i++) {
      var countof = array.filter(el => el.includes(search[i]));
      for (var i2 = 0, max2 = countof.length; i2 < max2; i2++) {
        searcharray.push(countof[i2])
      }
    }
    for (var i = 0, max = searcharray.length; i < max; i++) {
      const index = array.indexOf(searcharray[i]);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
    return array
  } else {
    for (var i = 0, max = array.length; i < max; i++) {
      const index = array.indexOf(search[i]);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
    return array
  }
}
