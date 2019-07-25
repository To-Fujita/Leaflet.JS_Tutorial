// Leaflet_Graticule.js		2019/4/26 by T. Fujita

var grid_line_col = "FFFFFF";
var flag_grid = 0;
var grid_shape_A = new Array();
var grid_shape_B = new Array();
var grid_text_Lat = new Array();
var grid_text_Lng = new Array();

function Grid_on_W()
{
	grid_line_col ="FFFFFF";
	grid( grid_line_col );
	flag_grid = 1;
}

function Grid_on_B()
{
	grid_line_col ="000000";
	grid( grid_line_col );
	flag_grid = 1;
}

function Grid_off()
{
	if( flag_grid == 1 ) {
		del_grid();
	}
	flag_grid = 0;
}

function grid( grid_line_col )
{
	if( flag_grid == 1 ) {
		del_grid();
	}

	var zoom = map.getZoom();
	var c_point = map.getCenter();
	var temp_Lat = c_point.lat;
	var temp_Lng = c_point.lng;
	var grid_Lat = new Array();
	var grid_Lng = new Array();
	var grid_pos_A = new Array();
	var grid_pos_B = new Array();
	var infobox_Lat;
	var infobox_Lng;
	var grid_i = 30;
	var c_pos_Lat = 30 * Math.floor(temp_Lat/30);
	var c_pos_Lng = 30 * Math.floor(temp_Lng/30);
	var NS = " N";
	var EW = " E";
	var Temp_min, Temp_max;
	var Temp_West = map.getBounds().pad(0.0).getWest();
	var Temp_North = map.getBounds().pad(0.0).getNorth();

	if( zoom == 3 )
	{
		grid_i = 30;
		var c_pos_Lat = grid_i * Math.floor(temp_Lat / grid_i);
		var c_pos_Lng = grid_i * Math.floor(temp_Lng / grid_i);
	}
	if( zoom == 4 )
	{
		grid_i = 10;
		var c_pos_Lat = grid_i * Math.floor(temp_Lat / grid_i);
		var c_pos_Lng = grid_i * Math.floor(temp_Lng / grid_i);
	}
	if( zoom == 5 )
	{
		grid_i = 5;
		var c_pos_Lat = grid_i * Math.floor(temp_Lat / grid_i);
		var c_pos_Lng = grid_i * Math.floor(temp_Lng / grid_i);
	}
	if( zoom == 6 )
	{
		grid_i = 2.5;
		var c_pos_Lat = grid_i * Math.floor(temp_Lat / grid_i);
		var c_pos_Lng = grid_i * Math.floor(temp_Lng / grid_i);
	}
	if( zoom == 7 )
	{
		grid_i = 2;
		var c_pos_Lat = grid_i * Math.floor(temp_Lat / grid_i);
		var c_pos_Lng = grid_i * Math.floor(temp_Lng / grid_i);
	}
	if( zoom == 8 )
	{
		grid_i = 1;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 2) / 2;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 2) / 2;
	}
	if( zoom == 9 )
	{
		grid_i = 30/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 3) / 3;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 3) / 3;
	}
	if( zoom == 10 )
	{
		grid_i = 20/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 6) / 6;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 6) / 6;
	}
	if( zoom == 11 )
	{
		grid_i = 10/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 20) / 20;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 20) / 20;
	}
	if( zoom == 12 )
	{
		grid_i = 5/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 30) / 30;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 30) / 30;
	}
	if( zoom == 13 )
	{
		grid_i = 2/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 60) / 60;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 60) / 60;
	}
	if( zoom == 14 )
	{
		grid_i = 1/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 200) / 200;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 200) / 200;
	}
	if( zoom == 15 )
	{
		grid_i = 0.5/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 300) / 300;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 300) / 300;
	}
	if( zoom == 16 )
	{
		grid_i = 0.2/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 600) / 600;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 600) / 600;
	}
	if( zoom == 17 )
	{
		grid_i = 0.1/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 2000) / 2000;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 2000) / 2000;
	}
	if( zoom == 18 )
	{
		grid_i = 0.05/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 3000) / 3000;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 3000) / 3000;
	}
	if( zoom == 19 )
	{
		grid_i = 0.02/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 3000) / 3000;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 3000) / 3000;
	}
	if( zoom >=20 )
	{
		grid_i = 0.01/60;
		var c_pos_Lat = Math.floor(temp_Lat) + Math.floor((temp_Lat - Math.floor(temp_Lat)) * 6000) / 6000;
		var c_pos_Lng = Math.floor(temp_Lng) + Math.floor((temp_Lng - Math.floor(temp_Lng)) * 6000) / 6000;
	}

	Temp_min = c_pos_Lat - grid_i * 20;
	Temp_max = c_pos_Lat + grid_i * 20;
	if(Temp_min < -90)
	{
		Temp_min = -90;
	}
	if(Temp_max > 90)
	{
		Temp_max = 90;
	}
	j = 0;
	for ( i = Temp_min; i <= Temp_max; i = i + grid_i )
	{
		grid_Lat[ j ] = i;
		j = j + 1;
	}

	Temp_min = c_pos_Lng - grid_i * 20;
	Temp_max = c_pos_Lng + grid_i * 20;
	if(Temp_min < -360)
	{
		Temp_min = -360;
	}
	if(Temp_max > 360)
	{
		Temp_max = 360;
	}
	j = 0;
	for ( i = Temp_min; i <= Temp_max; i = i + grid_i )
	{
		grid_Lng[ j ] = i;
		j = j + 1;
	}

	j = grid_Lat.length - 1;
	for ( i = 0; i <= j; i ++ )
	{
		grid_pos_A = [ [ grid_Lat[i], -360 ], [ grid_Lat[i], 360 ] ];
		grid_shape_A[i] = L.polyline([ grid_pos_A ],
			{ color: "#"+grid_line_col,
			  weight: 1,
			  opacity: 0.5
		});
		grid_shape_A[i].addTo(map);
		if (grid_Lat[i] >= 0)
		{
			NS = "'N";
		}
		else
		{
			NS = "'S";
		}
		var grid_Lat_dsp = Math.abs( grid_Lat[i]);
		infobox_Lat = Math.floor(grid_Lat_dsp) + "°" + Math.round(6000 * (grid_Lat_dsp - Math.floor(grid_Lat_dsp)))/100 + NS;
		if( grid_line_col == "FFFFFF" ) {
			grid_text_Lat[ i ] = L.marker([ grid_Lat[i], Temp_West ], {
		            icon: L.divIcon({
		                className: 'grid_textStyle_W',
		                html: infobox_Lat,
				iconAnchor: [-10,6]
		            }),
		            draggable: true,
		            zIndexOffset: 100
		        });
		} else {
			grid_text_Lat[ i ] = L.marker([ grid_Lat[i], Temp_West ], {
		            icon: L.divIcon({
		                className: 'grid_textStyle_B',
		                html: infobox_Lat,
				iconAnchor: [-10,6]
		            }),
		            draggable: true,
		            zIndexOffset: 100
		        });
		}
		grid_text_Lat[ i ].addTo(map);
	}

	j = grid_Lng.length - 1;
	for ( i = 0; i <= j; i ++ )
	{
		grid_pos_B = [ [ -90, grid_Lng[i]] , [ 90, grid_Lng[i] ] ];
		grid_shape_B[i] = L.polyline([ grid_pos_B ],
			{ color: "#"+grid_line_col,
			  weight: 1,
			  opacity: 0.5
		});
		grid_shape_B[i].addTo(map);
		if (grid_Lng[i] >= 0)
		{
			EW = "'E";
		}
		else
		{
			EW = "'W";
		}

		var grid_Lng_dsp = Math.abs( grid_Lng[i]);
	if(grid_Lng[i] >= -180 && grid_Lng[i] <= 180) {
		infobox_Lng = Math.floor(grid_Lng_dsp) + "°" + Math.round(6000 * (grid_Lng_dsp - Math.floor(grid_Lng_dsp)))/100 + EW;
	}
	if(grid_Lng[i] < -180) {
		grid_Lng_dsp = Math.abs(grid_Lng[i] + 360);
		EW = "E";
		infobox_Lng = Math.floor(grid_Lng_dsp) + "°" + Math.round(6000 * (grid_Lng_dsp - Math.floor(grid_Lng_dsp)))/100 + EW;
	}
	if(grid_Lng[i] > 180) {
		grid_Lng_dsp = Math.abs(grid_Lng[i] - 360);
		EW = "W";
		infobox_Lng = Math.floor(grid_Lng_dsp) + "°" + Math.round(6000 * (grid_Lng_dsp - Math.floor(grid_Lng_dsp)))/100 + EW;
	}

		if( grid_line_col == "FFFFFF" ) {
			grid_text_Lng[ i ] = L.marker([ Temp_North, grid_Lng[i] ], {
		            icon: L.divIcon({
		                className: 'grid_textStyle_W',
		                html: infobox_Lng,
				iconAnchor: [15,-10]
		            }),
		            draggable: true,
		            zIndexOffset: 101
		        });
		} else {
			grid_text_Lng[ i ] = L.marker([ Temp_North, grid_Lng[i] ], {
		            icon: L.divIcon({
		                className: 'grid_textStyle_B',
		                html: infobox_Lng,
				iconAnchor: [15,-10]
		            }),
		            draggable: true,
		            zIndexOffset: 101
		        });
		}
		grid_text_Lng[ i ].addTo(map);
	}
}

function del_grid()
{
	var j = grid_shape_A.length - 1;
	for(i=0; i<=j; i++) {
		map.removeLayer(grid_shape_A[i])
	}
	var j = grid_shape_B.length - 1;
	for(i=0; i<=j; i++) {
		map.removeLayer(grid_shape_B[i])
	}
	var j = grid_text_Lat.length - 1;
	for(i=0; i<=j; i++) {
		map.removeLayer(grid_text_Lat[i])
	}
	var j = grid_text_Lng.length - 1;
	for(i=0; i<=j; i++) {
		map.removeLayer(grid_text_Lng[i])
	}
}

