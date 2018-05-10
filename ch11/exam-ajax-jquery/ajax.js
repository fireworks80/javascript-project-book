(function($) {
	'use strict';

	var $showBtn = $('.js-btn');
	var $bookTable = $('.js-book-table');
	var $tbody = $('tbody', $bookTable);

	var showBookData = function(url) {

		$.ajax({
			url: url,
			success: function(dataArr) {

				$.each(dataArr, function(idx, data) {
					var $tr = $('<tr>');

					$.each(data, function(idx, value) {
						var $td = $('<td>');
							$td.text(value).appendTo($tr);
					});

					$tr.appendTo($tbody);
				});
			}
		});
	};

	$showBtn.on('click', function() {
		showBookData('../book-data.json');
	});

}(jQuery));