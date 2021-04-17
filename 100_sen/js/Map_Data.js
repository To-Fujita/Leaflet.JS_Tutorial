// Map_Data.js	2019/4/26 by T. Fujita

var Basic_Map = new Array();
	Basic_Map[ 0 ] = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		continuousWorld: false
	});
	Basic_Map[ 1 ] = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
		attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
	});
	Basic_Map[ 2 ] = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
	});
	Basic_Map[ 3 ] = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
		attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
	});
	Basic_Map[ 4 ] = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png', {
		attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
	});
	Basic_Map[ 5 ] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; <a href="https://www.esrij.com/"> Esri Japan </a>'
	});
	Basic_Map[ 6 ] = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
		maxZoom: 13,
		attribution: 'Tiles by <a href="https://www.esrij.com/"> Esri Japan </a>'
	});
/*	
	Basic_Map[ 7 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
		variant: 'toner-background'
	});
	Basic_Map[ 8 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
		variant: 'toner-lite'
	});
	Basic_Map[ 9 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
		minZoom: 1,
		maxZoom: 16,
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
		variant: 'watercolor'
	});
*/	

	function Sel_Basic_Layer() {
		Temp = null;
		Temp = document.getElementsByName("Basic_Layer");
		for (i=0; i<Temp.length; i++) {
			if(Temp[i].checked) {
				map.removeLayer(Layer_00);
				Layer_00 = Basic_Map[ i ];
				map.addLayer(Layer_00);
			}
		}
	}

	function dummy() {
		alert("Under Construction!");
	}

