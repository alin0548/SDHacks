// acro2class - acronym to classes
// dept2acro - department to acronym
function loadClasses(dept2acro, acro2class) {
	int i = 0;
	for (var dept in dept2acro) {
		// set background color to be something different for each department
		for (var clas in acro2class[dept2acro[delt]]) {
			document.getElementById('courses').innerHTML = "<div class='course' id='" + i + "'><h1>" + clas + "</h1></div>";
			i++;
		}
	}
}

function readTextFile(file) {
	var rawFile1 = new XMLHttpRequest();
	rawFile1.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if(rawFile1.readyState === 4) {
			if(rawFile1.status === 200 || rawFile1.status == 0) {
				var allText = rawFile1.responseText;
				alert(allText);
			}
		}
	}
	rawFile1.send(null);

	var rawFile2 = new XMLHttpRequest();
	rawFile2.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if(rawFile2.readyState === 4) {
			if(rawFile2.status === 200 || rawFile2.status == 0) {
				var allText = rawFile2.responseText;
				alert(allText);
			}
		}
	}
	rawFile.send(null);
}