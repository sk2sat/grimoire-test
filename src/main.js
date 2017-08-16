gr(function() {
	var colors = ['blue','red','lime'];
	var i = 0;
	setInterval(function() {
		gr('#main')('mesh')
			.setAttribute('color', colors[i%3]);
		i++;
	}, 1000);
});
