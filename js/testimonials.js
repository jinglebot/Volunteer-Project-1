	var testi_idx = 0;
	var testi_elem;
	var testi_arr = [
		"<p>Flor is so nice. Her girls have helped us in so many ways. We can't thank them enough. </p><small>Somebody famous, <cite>Somewhere</cite></small>",
		"<p>Christine is so pretty. </p><small>Anonymous, <cite>Company Unknown</cite></small>",
		"<p>Keisha is so cute. </p><small>Rock Star, <cite>Place Unknown</cite></small>"
	];
	function testi_next () {
		testi_idx++;
		testi_elem.style.opacity = 0;
		setTimeout('testi_ofOne()', 1000);
		if (testi_idx > (testi_arr.length - 1)) {
			testi_idx = 0;
		}
	}
	function testi_ofOne () {
		testi_elem.innerHTML = testi_arr[testi_idx];
		testi_elem.style.opacity = 1;
		setTimeout('testi_next()', 5000);
	}
