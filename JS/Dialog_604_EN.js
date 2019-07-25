// Dialog_604_EN.js	2019/7/19 by T. Fujita

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
var Photo_file = new Array();
var file;

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
'  <TD><input type="file" name="select" id="select_002" value="" onchange="CSV_Data()"></TD>'+
'  <BR><BR>'+
'</center></form></p></div>');

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
			"Set Markers": function(){
				CSV_Markers();
			},
			"Close": function(){
				$(this).dialog('close');
			}
		}
	});

        $("body").append('<div id="dialog_AD_002" style="z-index: 2000;"><p><form name="Form_AD_002">'+
'Title: <input type="text" style="width: 230px;" name="txt_file" value=""></form></p><HR>'+
'<p> Please select the Photo File.'+
'<form name="photoinput">'+
'<center><TD><input type="file" accept="image/*" name="select_AD" id="select_AD_002" value="" onchange="updateImageDisplay()"></TD>'+
'  <BR>'+
'<div class="preview"><p>Not selected!</p></div></center></form></p></div>');

	$('#dialog_AD_002').dialog({
		autoOpen: false,
		title: 'Select the Photo File',
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
			"Set Photo Marker": function(){
				Photo_Data();
			},
			"Close": function(){
				$(this).dialog('close');
			}
		}
	});


     $('#slider_001').slider( {
         orientation: 'horizontal',
         range: 'min',
         max: 255,
         value: 127,
         slide: refreshSwatch,
         change: refreshSwatch
     } );
     $( '#slider_001' ).slider( 'value', 96 );
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
	document.Form_002.txt_dat.value = "";
	document.subinput.select.value = "";
	$('#dialog_002').dialog('open');
}

function Dialog_Additional_002() {
	var preview = document.querySelector('.preview');
	document.Form_AD_002.txt_file.value = "";
	document.photoinput.select_AD.value = "";
	while(preview.firstChild){
		preview.removeChild(preview.firstChild);
	}
	$('#dialog_AD_002').dialog('open');
}


function refreshSwatch() {
     Icon_W = Math.round($('#slider_001').slider('value') / 255 * Max_M_Size);
     if (Icon_W <= Min_M_Size) { Icon_W = Min_M_Size; }
     Icon_H = Icon_W;
     $( '#num_001' ).html( 'Marker Size: ' + Icon_W );
     $( '#Selected_Icon img' ).css( { width: Icon_W, height: Icon_H } );
}

function CSV_Data() {
	var file_input = $('#select_002');
	var fileData = file_input[0].files[0];

	Data_CSV = [];
	var reader = new FileReader();
	reader.onerror = function() {
		alert('Failed to load the File!');
	}
	reader.onload = function() {
//		var lineArr = reader.result.split("\n");		// LF for MacOS X and UNIX
		var lineArr = reader.result.split("\r\n");		// CR + LF for Windows
		for (var i = 0; i < lineArr.length; i++) {
			Data_CSV[i] = lineArr[i].split(",");
		}
	}
	reader.readAsText(fileData);
}

function Photo_Data() {
	var Temp_Lat;
	var Temp_Lon;
        var Temp_Date;
	var Temp_Name;
	var Temp_Pos;
	var NSEW;
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(file);

	EXIF.getData(file, function() {
	    Temp_Pos = EXIF.getTag(this, "GPSLatitude");
	if( Temp_Pos === undefined ) {
	    alert("This Photo File has not EXIF Data! \n" + "This Marker is able to move any point.");
	    Photo_Data_Set();
	} else {
	    Temp_Pos = EXIF.getTag(this, "GPSLatitude");
	    NSEW = EXIF.getTag(this, "GPSLatitudeRef");
	    if(NSEW == "N") {
		Temp_Lat = Temp_Pos[0] + Temp_Pos[1]/60 + Temp_Pos[2]/60/60;
	    } else {
		Temp_Lat = (Temp_Pos[0] + Temp_Pos[1]/60 + Temp_Pos[2]/60/60) * -1.0;
	    }
	    Temp_Pos = EXIF.getTag(this, "GPSLongitude");
	    NSEW = EXIF.getTag(this, "GPSLongitudeRef");
	    if(NSEW == "E") {
		Temp_Lon = Temp_Pos[0] + Temp_Pos[1]/60 + Temp_Pos[2]/60/60;
	    } else {
		Temp_Lon = (Temp_Pos[0] + Temp_Pos[1]/60 + Temp_Pos[2]/60/60) * -1.0;
	    }
            Temp_Date = EXIF.getTag(this, "DateTimeOriginal");
	    Temp_Name = file.name;
	    Photo_Marker_LAT[ Photo_Marker_count ] = Temp_Lat;
	    Photo_Marker_LON[ Photo_Marker_count ] = Temp_Lon;
	    Photo_Marker_NAM[ Photo_Marker_count ] = Temp_Date + "_Photo";
	    Photo_Marker_LNK[ Photo_Marker_count ] = file;
	    Photo_Marker_ICN[ Photo_Marker_count ] = L.icon({
		iconUrl: Icon_Url,
		iconSize: [Icon_W, Icon_H],
		iconAnchor : [Icon_AW, Icon_AH],
		popupAnchor: [Icon_PW, Icon_PH]
	    });
		Photo_Marker_ID[ Photo_Marker_count ] = "Photo" + Photo_Marker_ID_count;
		Photo_Marker_Drag_flag[ Photo_Marker_count ] = false;
		Photo_Marker_Drag_info[ Photo_Marker_count ] = "This Marker can not to move.";
		Temp = Photo_Marker_count;
		Photo_Marker_Setting();
		Photo_Marker_Set();
		Layer_AD003[ Temp ] = Temp_shape;
		Layer_AD003[ Temp ].addTo(map_AD003);
		Layer_AD003_clone[ Temp ] = Temp_shape_clone;
		Layer_AD003_clone[ Temp ].addTo(map_AD003);
		Photo_Marker_count = Photo_Marker_count + 1;
		Photo_Marker_ID_count = Photo_Marker_ID_count + 1;
	}
    });
}

function Photo_Data_Set() {
	var Temp_Lat = map_AD003.getCenter().lat;
	var Temp_Lon = map_AD003.getCenter().lng;
        var Temp_Name;
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(file);
	Temp_Name = file.name;
	Photo_Marker_LAT[ Photo_Marker_count ] = Temp_Lat;
	Photo_Marker_LON[ Photo_Marker_count ] = Temp_Lon;
	Photo_Marker_NAM[ Photo_Marker_count ] = Temp_Name + "_Photo";
	Photo_Marker_LNK[ Photo_Marker_count ] = file;
	Photo_Marker_ICN[ Photo_Marker_count ] = L.icon({
		iconUrl: Icon_Url,
		iconSize: [Icon_W, Icon_H],
		iconAnchor : [Icon_AW, Icon_AH],
		popupAnchor: [Icon_PW, Icon_PH]
	});
	Photo_Marker_ID[ Photo_Marker_count ] = "Photo" + Photo_Marker_ID_count;
	Photo_Marker_Drag_flag[ Photo_Marker_count ] = true;
	Photo_Marker_Drag_info[ Photo_Marker_count ] = "This Marker is able to move any point.";
	Temp = Photo_Marker_count;
	Photo_Marker_Setting();
	Photo_Marker_Set();
	Layer_AD003[ Temp ] = Temp_shape;
	Layer_AD003[ Temp ].addTo(map_AD003);
	Layer_AD003_clone[ Temp ] = Temp_shape_clone;
	Layer_AD003_clone[ Temp ].addTo(map_AD003);
	Photo_Marker_count = Photo_Marker_count + 1;
	Photo_Marker_ID_count = Photo_Marker_ID_count + 1;
}

function updateImageDisplay() {
    var preview = document.querySelector('.preview');
    var file_input = $('#select_AD_002');
    file = file_input[0].files[0];
    var para = document.createElement('p');
    if(file === undefined) {
	para.textContent = 'Not selected.';
	preview.removeChild(preview.childNodes.item(0));
	preview.appendChild(para);
    } else {
        para.textContent = 'File Name: ' + file.name;
	while(preview.firstChild){
		preview.removeChild(preview.firstChild);
	}
	preview.appendChild(para);
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(file);
	preview.appendChild(image);
    }
}

