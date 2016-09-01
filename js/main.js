$(document).ready(function(){
	var intervalId = setInterval(function() {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		$('.hour').text(hours);
		$('.minute').text(minutes);
		$('.second').text(seconds);
	}, 100);

	// ДЗ с кнопками не получилось :(

	// getButtonId();

	// function getButtonId() {
	// 	var buttonArr = [];
	// 	var size = $('.button-list button').size(); //берем колличество кнопок
	// 	console.log(size);
	// 	for (var i = 0; i < size; i++){
	// 		// var item = $('.button-list button').eq(i); //берем колличество лишек
	// 		// item.addClass('item' + item);
	// 		buttonArr.push(i);
	// 	}
	// 	$('button').click(function() {
	// 		var i = $(this).eq();
	// 		console.log(i);
	// 	});
	// 	console.log(buttonArr);
	// }
});
