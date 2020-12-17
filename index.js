
function refresh()
{
	var ref=1000;
	mytime=setTimeout('display_dt()',ref)
}

function display_dt()
{
	var d = new Date();
	var t = new Date();
	document.getElementById("date").innerHTML = (("0"+d.getDate()).slice(-2)) +"."+ (("0"+(d.getMonth()+1)).slice(-2)) +"."+ (d.getFullYear());
	document.getElementById("time").innerHTML = (("0"+t.getHours()).slice(-2)) +":"+ (("0"+t.getMinutes()).slice(-2)) +":"+ (("0"+t.getSeconds()).slice(-2));
	refresh();
}