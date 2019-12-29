function timefromat(datetime, dateformat, timeformat) {
  /*'Sat Dec 08 2018 05:37:02 GMT-0500 (Eastern Standard Time)'*/
  var a = new Date(datetime);
  var timehours = a.getHours()
  var timeminutes = a.getMinutes()
  var timeseconds = a.getSeconds()
  if(timeminutes < 10){var minutes = "0{}".format(timeminutes)}else{var minutes = timeminutes}
  if(timeseconds < 10){var seconds = "0{}".format(timeseconds)}else{var seconds = timeseconds}
  
  if(timeformat == "H-M-S"){var time = "{}:{}:{}".format(timehours,minutes,seconds)
  }else if(timeformat == "H-M"){var time = "{}:{}".format(timehours,minutes)}
  
  if(timeformat == "I-M-S" || timeformat == "I-M"){
    if (timehours > 0 && timehours <= 12) {var hours = "{}".format(timehours)}
    else if (timehours > 12) {var hours = "{}".format(timehours - 12)}
    else if (timehours == 0) {var hours = "12"}
    if(timehours > 12){var ampm = "AM"}else{var ampm = "PM"}
    if(timeformat == "I-M-S"){ var time = "{}:{}:{} {}".format(hours,minutes,seconds,ampm)
    }else if(timeformat == "I-M"){var time = "{}:{} {}".format(hours,minutes,ampm)}
  }
  
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthNames = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"];
  var day = a.getDay()
  var month = a.getMonth()+1
  var date = a.getDate()
  var year = a.getFullYear()
  if(String(date).length == 2){
    if(String(date).slice(1) == 1){var datend = "{}st".format(date);if(date == 11){var datend = "{}th".format(date)}}
    if(String(date).slice(1) == 2){var datend = "{}nd".format(date);if(date == 12){var datend = "{}th".format(date)}}
    if(String(date).slice(1) == 3){var datend = "{}rd".format(date);if(date == 13){var datend = "{}th".format(date)}}
    if((String(date).slice(1) >= 4) || (String(date).slice(1) == 0)){var datend = "{}th".format(date)}
  }else{
    if(date == 1){var datend = "{}st".format(date)}
    if(date == 2){var datend = "{}nd".format(date)}
    if(date == 3){var datend = "{}rd".format(date)}
    if((date >= 4) || (date == 0)){var datend = "{}th".format(date)}
  }
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
  if(timeformat != undefined){return "{} {}".format(Retvar,time)}else{return Retvar}
}
