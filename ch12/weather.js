(function() {
	var api = 'd5fb1d44ffda46ddfe31f09679ff0954';
	var url = 'https://api.openweathermap.org/data/2.5/weather?';

	var displayError = function(disc) {
		throw new Error(disc);
	};

	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function(pos) {
		displayWeather(pos);
		});
	} else {
		displayError('지오로케이션 사용 불가');
	}

  var search = document.querySelector('.search');
  var searchBtn = search.querySelector('.search__btn');
  var searchField = search.querySelector('.search__field');

  var displayWeather = function(val) {
  	var query = '';
  	var widget = document.querySelector('.widget');
    var city = widget.querySelector('.widget__city');
    var img = widget.querySelector('.widget__img img');
    var celsius = widget.querySelector('.widget__celsius');
    var rangeLis = widget.querySelectorAll('.widget__temp-range li');

  	query = (typeof val === 'string') ? url + 'q=' + val : url + 'lat=' + val.coords.latitude + '&lon=' + val.coords.longitude;

  	if (!query) {
  		displayError('뭔가 잘못 되었음');
  	}

  	query += '&APPID=' + api;

    var getCelsius = function(temp) {
      return (temp - 273.15).toFixed(1) + ' ℃';
    };

    $.ajax({
    	url: query,
    	success: function(data) {
    		console.log(data);
	      var icon = data.weather[0].icon;

	      var ico = 'http://openweathermap.org/img/w/' + data.weather[0].icon;


	      city.innerHTML = data.name + ' / ' + data.sys.country;
	      celsius.innerHTML = getCelsius(data.main.temp);
	      rangeLis[0].innerHTML = 'max ' + getCelsius(data.main.temp_max);
	      rangeLis[0].innerHTML = 'min ' + getCelsius(data.main.temp_min);
	      img.setAttribute('src', ico + '.png');
    	},
    	error: function() {
    		alert('지역을 제대로 입력해 모르면 꺼져');
    		searchField.value = '';
    		searchField.focus();
    	}
    });

    // $.getJSON(query, function(data) {

    // });
  };

  searchBtn.addEventListener('click', function() {
    console.log(searchField.value);

    displayWeather(searchField.value);
  });

  document.addEventListener('keyup', function(e) {
  		// console.log(e.keyCode);
  		if (e.keyCode === 13) {
  			displayWeather(searchField.value);
  		}
  });


}());