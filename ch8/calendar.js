
var calendar = document.querySelector('.calendar');
var tds = calendar.querySelectorAll('td');
var yearField = calendar.querySelector('.year');
var monthField = calendar.querySelector('.mon');
var btns = calendar.querySelectorAll('button');

var calendar = function(newYear, newMonth) {
  var d = new Date(newYear, newMonth-1, 1);
  var dLength = 32 - new Date(newYear, newMonth-1, 32).getDate();
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  var day = d.getDay();

  yearField.innerHTML = year;
  monthField.innerHTML = month + 1;

  for (var i = 0; i < tds.length; i += 1) {
    tds[i].innerHTML = '&nbsp;';
  }

  for (var i = day; i < day + dLength; i += 1) {
    tds[i].innerHTML = date;
    date += 1;
  } // for
};

var currentDateObj = new Date();
var currentYear = currentDateObj.getFullYear();
var currentMonth = currentDateObj.getMonth() + 1;

calendar(currentYear, currentMonth);

btns.forEach(function(btn, idx) {
  btn.addEventListener('click', function() {
    switch(idx) {
      case 0:
        currentMonth -= 1;
      break;
      case 1:
      currentMonth += 1;
      break;
    }
    calendar(currentYear, currentMonth);
  });
});



