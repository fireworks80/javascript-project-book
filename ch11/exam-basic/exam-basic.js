var datas = [
		{
			title: '채식주의자',
			name: '한강',
			price: 12000
		},
		{
			title: '종의 기원',
			name: '정유정',
			price: 10000
		},
		{
			title: '다르게 보는 힘',
			name: '이종인',
			price: 12600
		}
	];

	var bookTable = document.querySelector('.js-book-table');
	var tbody = bookTable.querySelector('tbody');


	datas.forEach(function(obj, idx) {
		var tr = document.createElement('tr');
		for (var key in obj) {
			var td = document.createElement('td');
			var txt = document.createTextNode(obj[key]);
			td.appendChild(txt);
			tr.appendChild(td);
		} // for

		tbody.appendChild(tr);
	});