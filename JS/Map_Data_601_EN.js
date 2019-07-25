// Map_Data_601_EN.js	2019/7/19 by T. Fujita

var Basic_Map = new Array();
	Basic_Map[ 0 ] = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		continuousWorld: false
	});
	Basic_Map[ 1 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
		variant: 'toner-background'
	});
	Basic_Map[ 2 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
		variant: 'toner-lite'
	});
	Basic_Map[ 3 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
		minZoom: 1,
		maxZoom: 16,
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ',
		variant: 'watercolor'
	});
	Basic_Map[ 4 ] = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; <a href="http://www.esrij.com/"> Esri </a>'
	});
	Basic_Map[ 5 ] = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
		maxZoom: 13,
		attribution: 'Tiles by <a href="http://www.esrij.com/"> Esri </a>'
	});
	Basic_Map[ 6 ] = new L.GIBSLayer('Coastlines', {
		date: new Date('2015/04/01'),
		transparent: true
	});

var Over_Layer = new Array();
	Over_Layer[ 0 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
	    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
		'<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
		'Map data {attribution.OpenStreetMap}',
	    variant: 'toner-hybrid'
	});
	Over_Layer[ 1 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
	    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
		'<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
		'Map data {attribution.OpenStreetMap}',
	    variant: 'toner-lines'
	});
	Over_Layer[ 2 ] = L.tileLayer('http://{s}.tile.stamen.com/{variant}/{z}/{x}/{y}.png', {
	    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
		'<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
		'Map data {attribution.OpenStreetMap}',
	    variant: 'toner-labels'
	});
	Over_Layer[ 3 ] = L.tileLayer('http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
	    attribution: "<a href='http://www.openseamap.org' target='_blank'>OpenSeaMap</a> contributors"
	});
	Over_Layer[ 4 ] = new L.GIBSLayer('MODIS_Water_Mask', {
	    date: new Date('2018/11/15'),
	    transparent: true
	});
	Over_Layer[ 5 ] = new L.GeoJSON.AJAX(
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson",
		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson",
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson",
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson",
//		"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
	   {pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, {
		    radius: feature.properties.mag * feature.properties.mag / 3,
		    fillcolor: "#FF7800",
		    color: "#FF7800",
		    weight: 1,
		    opacity: 0.5,
		    fillOpacity: 0.5
		}); },
	    onEachFeature: function (feature, layer) {
	    layer.bindPopup(new Date(feature.properties.time).toUTCString() + " / " + feature.properties.title);
	    } 
	});

	var OverLayerFlag = new Array();

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

	$(function() {
	    $("#Over_Layer :checkbox").change(function() {
		var cb_count = Over_Layer.length;
		for (i = 0; i < cb_count; i++) {
		    Temp = $("#ckbox" + String(i) + ":checked").val();
		    if( Temp == i ) {
			map.addLayer(Over_Layer[ i ]);
			OverLayerFlag[ i ] = 1;
		    } else {
			if (OverLayerFlag[ i ] == 1) {
			    map.removeLayer(Over_Layer[ i ]);
			    OverLayerFlag[ i ] = 0;
			}
		    }			
		}
	    });
	});

	function dummy() {
		alert("Under Construction!");
	}

