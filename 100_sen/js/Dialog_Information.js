// Dialog_Information.js	2021/4/24 by T. Fujita
// Usage:
// <link rel = "stylesheet" href = "https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
// <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
// <script src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
//
// Dialog_Information();

$(document).ready( function() {
        $("body").append('<div id="dialog_Information" style="z-index: 2000;">'+
'<BR>Excel等で次によりデータを入力し、CSV形式で保存して下さい。<BR>'+
'A列1行: データのタイトル<BR>'+
'A列: 番号、記号、日付等<BR>'+
'B列: 場所の名称<BR>'+
'C列: 緯度（画面の右下にマウス位置の緯度・経度が表示されます、その値を入力）<BR>'+
'D列: 経度（　同上　）<BR>'+
'E列: 所在地等（なくても良い）<BR>'+
'F列: リンク先（なくても良い）<BR>'+
'G列: 備考等（表示されません）<BR>'+
'<BR>次にサンプルを示します。'+
'<img src="./data/CSV_Data.jpg" width="98%"></div>');

	$('#dialog_Information').dialog({
		autoOpen: false,
		title: '個人用CSVファイル作成方法',
		height: 400,
		width: 500,
		closeOnEscape: true,
		modal: true,
		show: "fade",
		hide: "fade",
		buttons: {
			"OK": function(){
				$(this).dialog('close');
			}
		}
	});
});

function Dialog_Information() {
	$('#dialog_Information').dialog('open');
}
