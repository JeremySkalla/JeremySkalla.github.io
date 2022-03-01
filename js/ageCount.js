let agecount = document.getElementById('agecount');

setInterval(function () {
	let time = (new Date() - new Date('2000-05-30T00:00:00')) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	agecount.innerText = time.toString().substring(0, 12);
}, 50);