(function() {
	'use strict';

	var showBtn = el('.js-btn');
	var bookTable = el('.js-book-table');
	var tbody = el('tbody', bookTable);

	var showBookData = function(url) {

		var httpRequest = new XMLHttpRequest();
		var displayData = function() {

			// readyState
			// ================================
			// 0: uninitialized
			// 1: loading
			// 2: loaded
			// 3: interactive
			// 4: complete

			// status
			// =================================
			// Numeric code returned by server, such as 404 for "Not Found" or 200 for "OK"

			if (httpRequest.readyState === 4 && httpRequest.status === 200) {
					var bookObj = JSON.parse(httpRequest.responseText);

					bookObj.forEach(function(bookData, idx) {
						var tr = document.createElement('tr');

						for (var key in bookData) {
							var td = document.createElement('td');
							var txt = document.createTextNode(bookData[key]);

							td.appendChild(txt);
							tr.appendChild(td);
						} // for

						tbody.appendChild(tr);
					}); // foreach

			}
		};

		if (!httpRequest) {
			throw new Error('XHLHTTP 인스턴스가 없습니다');
		}

		httpRequest.onreadystatechange = displayData;
		httpRequest.open('GET', url);
		httpRequest.send(null);
	};

	showBtn.addEventListener('click', function() {
		showBookData('../book-data.json');
	});

}());