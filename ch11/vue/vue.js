new Vue({
	el: '.js-book-table',
	data: {
		title: '인기도서 목록',
		books: [
			{
				title: "채식주의자",
				name: "한강",
				price: 12000
			},
			{
				title: "종의 기원",
				name: "정유정",
				price: 10000
			},
			{
				title: "다르게 보는 힘",
				name: "이종인",
				price: 12600
			}
		]
	}
});