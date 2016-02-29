function getMisns() {	
	$.getJSON('/cgi-bin/mst_json.py', function(data) {
		var items = []
		$.each(data, function(key, val) {
			items.push("<li><a href='#" + val + "'>"+ val + "</a></li>");	
		}) //end foreach
	    var new_li = items.join("");
		$('ul').html(new_li)
	}) //end ajax
} //end getMisns