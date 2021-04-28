// Dialog_CSV_Load.js	2021/4/28 by T. Fujita
//
// Usage:
// <link rel = "stylesheet" href = "https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
// <link rel = "stylesheet" href = "./css/Dialog_CSV_Load.css" />
// <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
// <script src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
// <script src = "./js/encoding.min.js" ></script>
//
// var Local_Data = new Array();
// Dialog_CSV_Load();

var Local_Temp_Data = new Array();

$(document).ready( function() {
        $("body").append('<div id="dialog_CSV_Load" style="z-index: 2000;"><center>'+
'<p><input type="file" name="dialog_CSV" id="dialog_CSV" value=""></p><HR>'+
'<table border="1" id="dialog_DSP"></table></center></div>');

	$('#dialog_CSV_Load').dialog({
		dialogClass: "no-close",
		autoOpen: false,
		title: 'CSVファイルを選択してください。',
		height: 400,
		width: 500,
		closeOnEscape: true,
		modal: true,
		show: "fade",
		hide: "fade",
		buttons: {
			"OK": function(){
				Local_Data = Local_Temp_Data;
				$(this).dialog('close');
			},
			"Cancel": function() {
				Local_Data = "_";
				$(this).dialog('close');
			}
		}
	});
});

function Dialog_CSV_Load() {
	Local_Data = new Array();
	Local_Temp_Data = new Array();
	Dialog_CSV_Data_Load();
	$('#dialog_CSV_Load').dialog('open');
}

function Dialog_CSV_Data_Load() {
	var select = document.getElementById('dialog_CSV');
	var output_csv = document.getElementById('dialog_DSP');
	select.value = "";
	output_csv.value = "";
	output_csv.innerHTML = "";
    if(window.File) {
		select.addEventListener('change', function(e) {
			var fileData = e.target.files[0];
			var reader = new FileReader();
			reader.onerror = function() {
				alert('ファイル読み取りに失敗しました')
			}
			reader.onload = function(event) {
				var tmp = new Uint8Array(event.target.result);
				var tmp_text = Encoding.convert(tmp, 'UNICODE', 'AUTO');
		  		var txtArray = Encoding.codeToString(tmp_text);
				var lineArr = txtArray.split('\n');
				for (var i = 0; i < lineArr.length; i++) {
					Local_Temp_Data[i] = lineArr[i].split(',');
		  		}

				var insertElement = '';
				for (var i=0; i<Local_Temp_Data.length; i++) {
					insertElement += '<tr>';
					for (var j=0; j<Local_Temp_Data[0].length; j++) {
						insertElement += '<td>' + Local_Temp_Data[i][j] + '</td>';
					}
					insertElement += '</tr>';
				}
				output_csv.innerHTML = insertElement;
			}
			reader.readAsArrayBuffer(fileData);
		}, false);
	}
}
