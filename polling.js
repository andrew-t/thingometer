document.addEventListener('DOMContentLoaded', function() {
	var overlay = document.getElementById('poll-window'),
		data,
		smap = {
            "con": "tory",
            "green": "green",
            "lab": "labour",
            "libdem": "libdem",
            "pc": "cymru",
            "snp": "snp",
            "ukip": "ukip" 
        }, vimap = {
            "con": "tory",
            "grn": "green",
            "lab": "labour",
            "ldem": "libdem",
            "ukip": "ukip"
        };
	document.getElementById('poll').addEventListener('click', function(e) {
		if (!data) {
			var req = new XMLHttpRequest();
			overlay.classList.add('loading');
			req.addEventListener('load', function() {
				data = JSON.parse(req.response);
				var seatList = document.getElementById('seats');
				data.sheets['Log Seats'].sort(function(a, b) {
					return parseDate(b.logdate) - parseDate(a.logdate);
				}).forEach(function(projection) {
					var el = document.createElement('li');
					el.addEventListener('click', function() {
						applyPoll(projection, smap);
					});
					el.appendChild(document.createTextNode(projection.logdate));
					seatList.appendChild(el);
				});
				var viList = document.getElementById('vi');
				data.sheets['vi-continuous-series'].sort(function(a, b) {
					if (a.date != b.date)
						return parseDate(b.date) - parseDate(a.date);
					if (a.pollster == b.pollster) return 0;
					if (a.pollster > b.pollster) return 1;
					return -1;
				}).forEach(function(poll) {
					var el = document.createElement('li');
					el.addEventListener('click', function() {
						applyPoll(poll, vimap);
					});
					el.appendChild(document.createTextNode(poll.date + ' (' + poll.pollster + ')'));
					viList.appendChild(el);
				});
				// TODO - VI polls
				overlay.classList.remove('loading');
			});
			req.open('GET', 'http://interactive.guim.co.uk/spreadsheetdata/1YilVzArect3kcE1rzJvYivXkfs1oL0MLCrvC9GjPF6E.json');
			req.send();
		}
		overlay.classList.remove('hidden');
		size();
		e.preventDefault();
	});
	document.getElementById('close-polls').addEventListener('click', function(e) {
		overlay.classList.add('hidden');
		size();
		e.preventDefault();
	});
	function parseDate(d) {
		var p = d.split('/').map(function(d) {
			return parseInt(d, 10);
		});
		return p[2] * 10000 + p[1] * 100 + p[0];
	}
	function applyPoll(poll, gmap) {
		var total = 0, done = {};
		for (var party in gmap)
			total += poll[party];
		for (var party in gmap) {
			done[gmap[party]] = true;
			document.getElementById(gmap[party]).value = poll[party] * 100 / total;
		}
		for (var party in smap)
			if (!done[smap[party]])
				document.getElementById(smap[party]).value = 0;
		update();
	}
});