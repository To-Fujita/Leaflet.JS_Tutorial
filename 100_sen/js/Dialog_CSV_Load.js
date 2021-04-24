// Dialog_CSV_Load.js	2021/4/24 by T. Fujita
// Usage:
// var Temp_Data = new Array();
// var CSV_Data = new Array();
// Dialog_CSV_Load();


$(document).ready( function() {
        $("body").append('<div id="dialog_CSV_Load" style="z-index: 2000;"><center>'+
'<p><input type="file" name="select_CSV" id="select_CSV" value=""></p><HR>'+
'<table border="1" id="dsp_CSV"></table></center></div>');

	$('#dialog_CSV_Load').dialog({
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
				Temp_Data = new Array();
				Temp_Data = CSV_Data;
				$(this).dialog('close');
			}
		}
	});
});

function Dialog_CSV_Load() {
	CSV_Data_Load();
	$('#dialog_CSV_Load').dialog('open');
}

function CSV_Data_Load() {
    if(window.File) {
		var select = document.getElementById('select_CSV');
		var output_csv = document.getElementById('dsp_CSV');

		select.addEventListener('change', function(e) {
			var fileData = e.target.files[0];
			var reader = new FileReader();
			reader.onerror = function() {
				alert('ファイル読み取りに失敗しました')
			}
			reader.onload = function(event) {
				CSV_Data = new Array();
				var tmp = new Uint8Array(event.target.result);
				var tmp_text = Encoding.convert(tmp, 'UNICODE', 'AUTO');
		  		var txtArray = Encoding.codeToString(tmp_text);
		  		var tmp_head = txtArray.slice(0,1);
				var lineArr = txtArray.split('\n');
				for (var i = 0; i < lineArr.length; i++) {
					CSV_Data[i] = lineArr[i].split(',');
		  		}

				var insertElement = '';
				for (var i=0; i<CSV_Data.length; i++) {
					insertElement += '<tr>';
					for (var j=0; j<CSV_Data[0].length; j++) {
						insertElement += '<td>' + CSV_Data[i][j] + '</td>';
					}
					insertElement += '</tr>';
				}
				output_csv.innerHTML = insertElement;

			}
			reader.readAsArrayBuffer(fileData);
		}, false);
	}
}
