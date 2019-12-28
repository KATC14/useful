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

function timefromat(datetime, dateformat) {
  /*'Sat Dec 08 2018 05:37:02 GMT-0500 (Eastern Standard Time)'*/
  var a = new Date(datetime);
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthNames = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"];
  var day = a.getDay()
  var month = a.getMonth()+1
  var date = a.getDate()
  var year = a.getFullYear()
  var hours = a.getHours()
  if(a.getMinutes() < 10){var minutes = "0{}".format(a.getMinutes())}else{var minutes = a.getMinutes()}
  if(a.getSeconds() < 10){var seconds = "0{}".format(a.getSeconds())}else{var seconds = a.getSeconds()}
  if(a.getDate() < 10){var date2 = "0{}".format(a.getDate())}else{var date2 = a.getDate()}
  var time = "{}:{}:{}".format(hours, minutes, seconds)
  if(String(date).slice(1) == 1){var datend = "{}st".format(date);if(date == 11){var datend = "{}th".format(date)}}
  if(String(date).slice(1) == 2){var datend = "{}nd".format(date);if(date == 12){var datend = "{}th".format(date)}}
  if(String(date).slice(1) == 3){var datend = "{}rd".format(date);if(date == 13){var datend = "{}th".format(date)}}
  if((String(a.getDate()).slice(1) >= 4) || (String(a.getDate()).slice(1) == 0)){var datend = "{}th".format(a.getDate())}
  if(dateformat == "d-m-yyyy"){var Retvar =  "{}/{}/{}".format(date, month, year)}
  if(dateformat == "d-yyyy-m"){var Retvar =  "{}/{}/{}".format(date, year, month)}
  if(dateformat == "yyyy-m-d"){var Retvar =  "{}/{}/{}".format(year, month, date)}
  if(dateformat == "yyyy-d-m"){var Retvar =  "{}/{}/{}".format(year, date, month)}
  if(dateformat == "m-yyyy-d"){var Retvar =  "{}/{}/{}".format(month, year, date)}
  if(dateformat == "m-d-yyyy"){var Retvar =  "{}/{}/{}".format(month, date, year)}
  
  if(dateformat == "D-yyyy-M"){var Retvar =  "{} {} {} {}".format(dayNames[day], datend, year, monthNames[month-1])}
  if(dateformat == "D-M-yyyy"){var Retvar =  "{} {} {} {}".format(dayNames[day], datend, monthNames[month-1], year)}
  if(dateformat == "yyyy-D-M"){var Retvar =  "{} {} {} {}".format(year, dayNames[day], datend, monthNames[month-1])}
  if(dateformat == "yyyy-M-D"){var Retvar =  "{} {} {} {}".format(year, monthNames[month-1], dayNames[day], datend)}
  if(dateformat == "M-D-yyyy"){var Retvar =  "{} {} {} {}".format(monthNames[month-1], year, dayNames[day], datend)}
  if(dateformat == "M-D-yyyy"){var Retvar =  "{} {} {} {}".format(monthNames[month-1], dayNames[day], datend, year)}
  return Retvar
}
