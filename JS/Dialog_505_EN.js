// Dialog_505_EN.js	2019/7/19 by T. Fujita

var Set_Text = "";
var Set_Link = " ";
var Icon_Url = "./ICONS/BW_Icon/BW_Icons_64/icon_000200_64.png";
var Icon_W = 24;
var Icon_H = 24;
var Icon_AW = Math.round(Icon_W / 2);
var Icon_AH = Math.round(Icon_H / 2);
var Icon_PW = 0;
var Icon_PH = Math.round(Icon_H / 2) * -1;
var Max_M_Size = 64;
var Min_M_Size = 8;
var Data_CSV = new Array();

var Line_W = 1;
var Selected_Color = 'ff0000';
var Selected_Fill_Color = 'ffff00';
var Selected_Opacity = 1;
var Selected_Fill_Opacity = 0.3;
var Line_Type = "10,0";
var Temp_LAT = 0.0;
var Temp_LON = 0.0;
var Temp_RAD = 0.0;

$(document).ready( function() {
        $("body").append('<div id="dialog_001" style="z-index: 2000;"><p><form name="Form_001"> Title: '+
'<input type="text" style="width: 230px;" name="txt_mk" value=""></form><BR>'+
'<div>Marker Select:<BR>'+
'<select id="Marker_Samples" name="Marker_Samples" style="width:150px;">'+
'<option value="1" title="./ICONS/BW_Icon/BW_Icons_64/icon_000200_64.png">001</option>'+
'<option value="2" title="./ICONS/BW_Icon/BW_Icons_64/icon_127890_64.png">002</option>'+
'<option value="3" title="./ICONS/BW_Icon/BW_Icons_64/icon_114880_64.png">003</option>'+
'<option value="4" title="./ICONS/BW_Icon/BW_Icons_64/icon_109890_64.png">004</option>'+
'<option value="5" title="./ICONS/BW_Icon/BW_Icons_64/icon_001050_64.png">005</option>'+
'<option value="6" title="./ICONS/BW_Icon/BW_Icons_64/icon_119170_64.png">006</option>'+
'<option value="7" title="./ICONS/BW_Icon/BW_Icons_64/icon_122590_64.png">007</option>'+
'<option value="8" title="./ICONS/BW_Icon/BW_Icons_64/icon_000220_64.png">008</option>'+
'<option value="9" title="./ICONS/BW_Icon/BW_Icons_64/icon_133000_64.png">009</option>'+
'<option value="10" title="./ICONS/BW_Icon/BW_Icons_64/icon_115740_64.png">010</option>'+
'<option value="11" title="./ICONS/BW_Icon/BW_Icons_64/icon_115710_64.png">011</option>'+
'<option value="12" title="./ICONS/BW_Icon/BW_Icons_64/icon_115750_64.png">012</option>'+
'<option value="13" title="./ICONS/BW_Icon/BW_Icons_64/icon_115720_64.png">013</option>'+
'<option value="14" title="./ICONS/BW_Icon/BW_Icons_64/icon_147060_64.png">014</option>'+
'<option value="15" title="./ICONS/BW_Icon/BW_Icons_64/icon_127900_64.png">015</option>'+
'<option value="16" title="./ICONS/BW_Icon/BW_Icons_64/icon_109850_64.png">016</option>'+
'<option value="17" title="./ICONS/BW_Icon/BW_Icons_64/icon_111050_64.png">017</option>'+
'<option value="18" title="./ICONS/BW_Icon/BW_Icons_64/icon_111060_64.png">018</option>'+
'<option value="19" title="./ICONS/BW_Icon/BW_Icons_64/icon_111520_64.png">019</option>'+
'<option value="20" title="./ICONS/BW_Icon/BW_Icons_64/icon_127100_64.png">020</option>'+
'<option value="21" title="./ICONS/BW_Icon/BW_Icons_64/icon_127110_64.png">021</option>'+
'<option value="22" title="./ICONS/BW_Icon/BW_Icons_64/icon_127120_64.png">022</option>'+
'<option value="23" title="./ICONS/BW_Icon/BW_Icons_64/icon_127130_64.png">023</option>'+
'<option value="24" title="./ICONS/BW_Icon/BW_Icons_64/icon_127140_64.png">024</option>'+
'<option value="25" title="./ICONS/BW_Icon/BW_Icons_64/icon_127150_64.png">025</option>'+
'<option value="26" title="./ICONS/BW_Icon/BW_Icons_64/icon_127160_64.png">026</option>'+
'<option value="27" title="./ICONS/BW_Icon/BW_Icons_64/icon_001720_64.png">027</option>'+
'<option value="28" title="./ICONS/BW_Icon/BW_Icons_64/icon_100590_64.png">028</option>'+
'<option value="29" title="./ICONS/BW_Icon/BW_Icons_64/icon_100600_64.png">029</option>'+
'<option value="30" title="./ICONS/BW_Icon/BW_Icons_64/icon_102040_64.png">030</option>'+
'<option value="31" title="./ICONS/BW_Icon/BW_Icons_64/icon_104940_64.png">031</option>'+
'<option value="32" title="./ICONS/BW_Icon/BW_Icons_64/icon_107470_64.png">032</option>'+
'<option value="33" title="./ICONS/BW_Icon/BW_Icons_64/icon_108510_64.png">033</option>'+
'<option value="34" title="./ICONS/BW_Icon/BW_Icons_64/icon_108730_64.png">034</option>'+
'<option value="35" title="./ICONS/BW_Icon/BW_Icons_64/icon_111960_64.png">035</option>'+
'<option value="36" title="./ICONS/BW_Icon/BW_Icons_64/icon_111970_64.png">036</option>'+
'<option value="37" title="./ICONS/BW_Icon/BW_Icons_64/icon_112440_64.png">037</option>'+
'<option value="38" title="./ICONS/BW_Icon/BW_Icons_64/icon_112450_64.png">038</option>'+
'<option value="39" title="./ICONS/BW_Icon/BW_Icons_64/icon_113000_64.png">039</option>'+
'<option value="40" title="./ICONS/BW_Icon/BW_Icons_64/icon_113010_64.png">040</option>'+
'<option value="41" title="./ICONS/BW_Icon/BW_Icons_64/icon_114520_64.png">041</option>'+
'<option value="42" title="./ICONS/BW_Icon/BW_Icons_64/icon_114530_64.png">042</option>'+
'<option value="43" title="./ICONS/BW_Icon/BW_Icons_64/icon_114770_64.png">043</option>'+
'<option value="44" title="./ICONS/BW_Icon/BW_Icons_64/icon_114780_64.png">044</option>'+
'<option value="45" title="./ICONS/BW_Icon/BW_Icons_64/icon_128020_64.png">045</option>'+
'<option value="46" title="./ICONS/BW_Icon/BW_Icons_64/icon_124660_64.png">046</option>'+
'<option value="47" title="./ICONS/BW_Icon/BW_Icons_64/icon_127930_64.png">047</option>'+
'<option value="48" title="./ICONS/Flat_Icons/s64_f_business_72_0nbg.png">048</option>'+
'<option value="49" title="./ICONS/Flat_Icons/s64_f_business_76_0nbg.png">049</option>'+
'<option value="50" title="./ICONS/Flat_Icons/s64_f_object_6_2nbg.png">050</option>'+
'<option value="51" title="./ICONS/Flat_Icons/s64_f_object_7_2nbg.png">051</option>'+
'<option value="52" title="./ICONS/Flat_Icons/s64_f_object_24_1nbg.png">052</option>'+
'<option value="53" title="./ICONS/Flat_Icons/s64_f_object_25_0nbg.png">053</option>'+
'<option value="54" title="./ICONS/Flat_Icons/s64_f_object_27_2nbg.png">054</option>'+
'<option value="55" title="./ICONS/Flat_Icons/s64_f_object_155_1nbg.png">055</option>'+
'<option value="56" title="./ICONS/Flat_Icons/s64_f_object_164_2nbg.png">056</option>'+
'<option value="57" title="./ICONS/Flat_Icons/s64_f_object_167_0nbg.png">057</option>'+
'<option value="58" title="./ICONS/Flat_Icons/s64_f_object_173_0nbg.png">058</option>'+
'<option value="59" title="./ICONS/Flat_Icons/s64_f_object_115_0nbg.png">059</option>'+
'<option value="60" title="./ICONS/Flat_Icons/s64_f_object_116_1nbg.png">060</option>'+
'</select></div><BR>'+
'<div><tr><td><BR><div id="num_001"></div><div id="slider_001"></div>'+
'<BR><BR><div id="Selected_Icon">Selected Icon: <img src=""></div>'+
'</td></tr></div><BR>Note: These Icons are downloaded from<A HREF = "http://flat-icon-design.com/" target="_blank"> FLAT ICON DESIGN </A> and' +
'<A HREF = "http://icooon-mono.com/" target="_blank"> ICOON MONO </A>.<BR>' +
'TopeconHeroes holds the copyright of these Icons.</p><div>');

	$('#Selected_Icon img').attr('src', Icon_Url);

	$('#dialog_001').dialog({
		autoOpen: false,
		title: 'Please Set the Icon Style.',
		height: 450,
		width: 300,
		closeOnEscape: true,
		modal: true,
		buttons: {
			"OK": function(){
				Set_Text = document.Form_001.txt_mk.value;
				var Temp = Marker_Samples.options[Marker_Samples.selectedIndex].title;
				Icon_Url = Temp;
				Icon_AW = Math.round(Icon_W / 2);
				Icon_AH = Math.round(Icon_H / 2);
				Icon_PW = 0;
				Icon_PH = Math.round(Icon_H / 2) * -1;
				Change_Marker(); 
				$(this).dialog('close');
			}
		}
	});

        $("body").append('<div id="dialog_002" style="z-index: 2000;"><p><form name="Form_002">'+
'Title: <input type="text" style="width: 230px;" name="txt_dat" value=""></form></p><HR>'+
'<p> File Select:'+
'<form name="subinput">'+
'<center>Please select the CSV File.<BR><BR>'+
'  <TD><input type="file" name="select" id="select_002" value=""></TD>'+
'  <BR><BR>'+
'</center></p></div>');

	$('#dialog_002').dialog({
		autoOpen: false,
		title: 'Select the CSV File',
		height: 400,
		width: 300,
		closeOnEscape: true,
		modal: true,
		show: "fade",
		hide: "fade",
		buttons: {
			"Select the Marker": function(){
				Dialog_001();
			},
			"Select the Line Style": function(){
				Dialog_003();
			},
			" Set Markers ": function(){
				CSV_Data();
				CSV_Markers();
			},
			" Draw Lines ": function(){
				CSV_Data();
				CSV_Lines();
			},
			" Draw Polygons ": function(){
				CSV_Data();
				CSV_Polygons();
			},
			" Draw Circles ": function(){
				CSV_Data();
				CSV_Circles();
			},
			" Close ": function(){
				$(this).dialog('close');
			}
		}
	});

        $("body").append('<div id="dialog_003" style="z-index: 2000;"><form name="Form_003">'+
'Title: <input type="text" style="width: 230px;" name="txt_line" value=""></form>'+
'<p><HR><div style="clear: both;"></div><div>Line Type:'+
'<select id="Line_Samples" name="Line_Samples" style="width:270px;">'+
'<option value="1" title="./ICONS/Lines/Line_Sample-001(10).png">001</option>'+
'<option value="2" title="./ICONS/Lines/Line_Sample-002(5,5).png">002</option>'+
'<option value="3" title="./ICONS/Lines/Line_Sample-003(5,10).png">003</option>'+
'<option value="4" title="./ICONS/Lines/Line_Sample-004(10,5).png">004</option>'+
'<option value="5" title="./ICONS/Lines/Line_Sample-005(5,1).png">005</option>'+
'<option value="6" title="./ICONS/Lines/Line_Sample-006(1,5).png">006</option>'+
'<option value="7" title="./ICONS/Lines/Line_Sample-007(15,10,5,10).png">007</option>'+
'<option value="8" title="./ICONS/Lines/Line_Sample-008(5,5,1,5).png">008</option>'+
'</select></div>'+
'<div id="num_301"></div><div id="slider_301"></div><BR>'+
'<div style="float: left;">Select Line Color: <BR>'+
'<div id="colorpicker-red_01"></div><div id="colorpicker-green_01"></div><div id="colorpicker-blue_01"></div>'+
'<div id="num_302"></div><div id="slider_302"></div>'+
'</div><div style="float: left;"><div id="colorpicker-swatch_01" class="ui-widget-content ui-corner-all"></div>'+
'</div><div style="float: left;"><div id="colorpicker-hex_01"></div><div id="colorpicker-rgb_01"></div></div>'+
'</p><p><div style="float: left;"><HR>Select Fill Color: <BR>'+
'<div id="colorpicker-red_02"></div><div id="colorpicker-green_02"></div><div id="colorpicker-blue_02"></div>'+
'<div id="num_303"></div><div id="slider_303"></div>'+
'</div><div style="float: left;">'+
'<div id="colorpicker-swatch_02" class="ui-widget-content ui-corner-all"></div></div>'+
'<div style="float: left;"><div id="colorpicker-hex_02"></div><div id="colorpicker-rgb_02"></div></div>'+
'<div style="clear: both;"></div></p></div>');

	$('#dialog_003').dialog({
		autoOpen: false,
		title: 'Select Line Style',
		height: 500,
		width: 360,
		closeOnEscape: true,
		modal: true,
		show: "fade",
		hide: "fade",
		buttons: {
			"OK": function(){
				Set_Text = document.Form_003.txt_line.value;
				var Temp = Line_Samples.options[Line_Samples.selectedIndex].value;
				if( Temp == 2 ) {
					Line_Type = 5 * Line_W + "," + 5 * Line_W;
				} else if( Temp == 3 ) {
					Line_Type = 5 * Line_W + "," + 10 * Line_W;
				} else if( Temp == 4 ) {
					Line_Type = 10 * Line_W + "," + 5 * Line_W;
				} else if( Temp == 5 ) {
					Line_Type = 5 * Line_W + "," + 2 * Line_W;
				} else if( Temp == 6 ) {
					Line_Type = 1 * Line_W + "," + 5 * Line_W;
				} else if( Temp == 7 ) {
					Line_Type = 15 * Line_W + "," + 10 * Line_W + "," + 5 * Line_W + "," + 10 * Line_W;
				} else if( Temp == 8 ) {
					Line_Type = 5 * Line_W + "," + 5 * Line_W + "," + 1 * Line_W + "," + 5 * Line_W;
				} else {
					Line_Type = 10 * Line_W + "," + 0;
				}
				$(this).dialog('close');
			}
		}
	});

        $("body").append('<div id="dialog_004" style="z-index: 2000"><form name="Form_004">'+
'Title: <input type="text" style="width: 230px;" name="txt_circle" value="">'+
'<p><HR><div style="clear: both;"></div>'+
'Please input the radius and center position of circle.<BR><BR>'+
'<TR>'+
'<TD>Latitude (Deg.): <input type="text" name="circle_lat" value=""></TD>'+
'<BR><BR>'+
'<TD>Longitude (Deg.): <input type="text" name="circle_lon" value=""></TD>'+
'<BR><BR>'+
'</TR><TR>'+
'<TD>Radius of Circle(km): <input type="text" name="radius" value=""></TD>'+
'<BR><BR></TR></p></form></div>');

	$('#dialog_004').dialog({
		autoOpen: false,
		title: 'Set the Circle Style',
		height: 300,
		width: 320,
		closeOnEscape: true,
		modal: true,
		show: "fade",
		hide: "fade",
		buttons: {
			"OK": function(){
			    Circles_LAT[ Circles_count ] = document.Form_004.circle_lat.value * 1.0;
			    Circles_LON[ Circles_count ] = document.Form_004.circle_lon.value * 1.0;
			    Circles_RAD[ Circles_count ] = document.Form_004.radius.value * 1000;
			    Circles_NAM[ Circles_count ] = document.Form_004.txt_circle.value;
			    Circles_LNK[ Circles_count ] = " ";
			    Circles_ID[ Circles_count ] = "Circle" + Circles_ID_count;
			    if ((Circles_LAT[ Circles_count ] != 0) || (Circles_LON[ Circles_count ] != 0)) {
				Circles_Set( Circles_count );
				Circles_count = Circles_count + 1;
				Circles_ID_count = Circles_ID_count + 1;
			    }
				$(this).dialog('close');
			}
		}
	});


     $('#slider_001, #slider_301, #colorpicker-red_01, #colorpicker-green_01, #colorpicker-blue_01, #slider_302, #colorpicker-red_02, #colorpicker-green_02, #colorpicker-blue_02, #slider_303').slider( {
         orientation: 'horizontal',
         range: 'min',
         max: 255,
         value: 127,
         slide: refreshSwatch,
         change: refreshSwatch
     } );
     $( '#slider_001' ).slider( 'value', 96 );
     $( '#colorpicker-red_01' ) . slider( 'value', 255 );
     $( '#colorpicker-green_01' ) . slider( 'value', 0 );
     $( '#colorpicker-blue_01' ) . slider( 'value', 0 );
     $( '#slider_301' ).slider( 'value', 25 );
     $( '#slider_302' ).slider( 'value', 204 );
     $( '#colorpicker-red_02' ) . slider( 'value', 255 );
     $( '#colorpicker-green_02' ) . slider( 'value', 255 );
     $( '#colorpicker-blue_02' ) . slider( 'value', 0 );
     $( '#slider_303' ).slider( 'value', 76 );
     $( '#Line_Samples' ).msDropDown();
     $( '#Marker_Samples' ).msDropDown({
		visibleRows:4,
		on:{change:function(data, ui) {
			Icon_Url = Marker_Samples.options[Marker_Samples.selectedIndex].title;
			$('#Selected_Icon img').attr('src', Icon_Url);
		}}
     });
});


function Dialog_001() {
	document.Form_001.txt_mk.value = "";
	$('#dialog_001').dialog('open');
}

function Dialog_002() {
	CSV_Data();
	document.Form_002.txt_dat.value = "";
	$('#dialog_002').dialog('open');
}

function Dialog_003() {
	document.Form_003.txt_line.value = "";
	$('#dialog_003').dialog('open');
}

function Dialog_004() {
	document.Form_004.circle_lat.value = "";
	document.Form_004.circle_lon.value = "";
	document.Form_004.radius.value = "";
	document.Form_004.txt_circle.value = "";
	$('#dialog_004').dialog('open');
}


function refreshSwatch() {
     Icon_W = Math.round($('#slider_001').slider('value') / 255 * Max_M_Size);
     if (Icon_W <= Min_M_Size) { Icon_W = Min_M_Size; }
     Icon_H = Icon_W;
     $( '#num_001' ).html( 'Marker Size: ' + Icon_W );
     $( '#Selected_Icon img' ).css( { width: Icon_W, height: Icon_H } );

     var red_01 = $( '#colorpicker-red_01' ) . slider( 'value' );
     var green_01 = $( '#colorpicker-green_01' ) . slider( 'value' );
     var blue_01 = $( '#colorpicker-blue_01' ) . slider( 'value' );
     Line_W = Math.ceil($('#slider_301').slider('value') / 255 * 10);
     Selected_Opacity = Math.round($('#slider_302').slider('value') / 255 * 100) / 100;
     Selected_Color = hexFromRGB( red_01, green_01, blue_01 );
     var red_02 = $( '#colorpicker-red_02' ) . slider( 'value' );
     var green_02 = $( '#colorpicker-green_02' ) . slider( 'value' );
     var blue_02 = $( '#colorpicker-blue_02' ) . slider( 'value' );
     Selected_Fill_Opacity = Math.round($('#slider_303').slider('value') / 255 * 100) / 100;
     Selected_Fill_Color = hexFromRGB( red_02, green_02, blue_02 );
     $( '#colorpicker-swatch_01' ) . css( 'background-color', '#' + Selected_Color );
     $( '#colorpicker-swatch_01' ) . css( 'opacity', Selected_Opacity );
     $( '#colorpicker-hex_01' ) . html( 'HEX: #' + Selected_Color );
     $( '#colorpicker-rgb_01' ) . html( 'RGB: (' + red_01 + ',' + green_01 + ',' +blue_01 + ')' );
     $( '#num_301' ).html( 'Line Width: ' + Line_W );
     $( '#num_302' ).html( 'Line Opacity: ' + Selected_Opacity );
     $( '#colorpicker-swatch_02' ) . css( 'background-color', '#' + Selected_Fill_Color );
     $( '#colorpicker-swatch_02' ) . css( 'opacity', Selected_Fill_Opacity );
     $( '#colorpicker-hex_02' ) . html( 'HEX: #' + Selected_Fill_Color );
     $( '#colorpicker-rgb_02' ) . html( 'RGB: (' + red_02 + ',' + green_02 + ',' +blue_02 + ')' );
     $( '#num_303' ).html( 'Fill Opacity: ' + Selected_Fill_Opacity );
}

function CSV_Data() {
    if(window.File) {
	var select = document.getElementById('select_002');
	select.addEventListener('change', function(e) {
	var fileData = e.target.files[0];
	Data_CSV = [];
	var reader = new FileReader();
	reader.onerror = function() {
		alert('Failed to load the file!');
	}
	reader.onload = function() {
//		var lineArr = reader.result.split("\n");		// LF for MacOS X and UNIX
		var lineArr = reader.result.split("\r\n");		// CR + LF for Windows
		for (var i = 0; i < lineArr.length; i++) {
			Data_CSV[i] = lineArr[i].split(",");
		}
	}
	reader.readAsText(fileData);
	}, false);
    }
}

function hexFromRGB( r, g, b ) {
     var hex = [
         r . toString( 16 ),
         g . toString( 16 ),
         b . toString( 16 )
     ];
     jQuery.each( hex, function( nr, val ) {
         if ( val . length === 1 ) {
             hex[ nr ] = "0" + val;
         }
     } );
     return hex . join( '' ) . toUpperCase();
}

