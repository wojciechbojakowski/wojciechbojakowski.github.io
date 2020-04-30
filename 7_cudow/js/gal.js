var zdjecia = Array(
	Array('img/gal1.jpg', 'img/gal1mini.jpg', 'Wiedźmin 3', 'Dziki Zgon'),
	Array('img/gal2.jpg', 'img/gal2mini.jpg', 'Wiedźmin 3', 'Dziki Zgon'),
	Array('img/gal3.jpg', 'img/gal3mini.jpg', 'Wiedźmin 3', 'Dziki Zgon'),
	Array('img/gal4.jpg', 'img/gal4mini.jpg', 'Wiedźmin 3', 'Dziki Zgon')
);
var max_width = 520;
function laduj() {
	for(var i = 0; i < zdjecia.length; i++)
		document.getElementById('miniaturki').innerHTML += '<img src="' + zdjecia[i][1] + '" onclick="zmien(' + i + ')" />';
	zmien(0);
	
}
function zmien(id) {
	document.getElementById('zdjecie').innerHTML += '<div id="ladowanie"></div>';
	var custom = '';
	var preload = new Image();
	preload.onload = function() {
		if(preload.width > max_width) 
			custom = ' style="height: '+(Math.floor(max_width / (preload.width / preload.height)))+'px;width:'+max_width+'px;"';
			
		document.getElementById('informacje').innerHTML = '<b>'+zdjecia[id][2]+'</b><br /><i>'+zdjecia[id][3]+'</i>';
		document.getElementById('zdjecie').innerHTML = '<img src="'+zdjecia[id][0]+'"'+custom+' />';
	}
	preload.src = zdjecia[id][0];
}
window.onload = laduj;