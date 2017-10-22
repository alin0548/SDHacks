// requirements
var requirement2classes = {};
requirement2classes['AC'] = readTextFile("../static/requirement2classes/ac.txt");
requirement2classes['AH'] = readTextFile("../static/requirement2classes/ah.txt");
requirement2classes['AI'] = readTextFile("../static/requirement2classes/ai.txt");
requirement2classes['AL'] = readTextFile("../static/requirement2classes/al.txt");
requirement2classes['BS'] = readTextFile("../static/requirement2classes/bs.txt");
requirement2classes['ELW'] = readTextFile("../static/requirement2classes/elw.txt");
requirement2classes['HS'] = readTextFile("../static/requirement2classes/hs.txt");
requirement2classes['IS'] = readTextFile("../static/requirement2classes/is.txt");
requirement2classes['PS'] = readTextFile("../static/requirement2classes/ps.txt");
requirement2classes['PV'] = readTextFile("../static/requirement2classes/pv.txt");
requirement2classes['R1A'] = readTextFile("../static/requirement2classes/r1a.txt");
requirement2classes['R1B'] = readTextFile("../static/requirement2classes/r1b.txt");
requirement2classes['SBS'] = readTextFile("../static/requirement2classes/sbs.txt");


var dept2acro = readTextFile("../static/full_to_acr.txt");
dept2acro = JSON.parse(dept2acro);

var acro2class = {};
acro2class['A'] = JSON.parse(readTextFile("../static/acronym2classes/A.txt"));
acro2class['B'] = JSON.parse(readTextFile("../static/acronym2classes/B.txt"));
acro2class['C'] = JSON.parse(readTextFile("../static/acronym2classes/C.txt"));
acro2class['D'] = JSON.parse(readTextFile("../static/acronym2classes/D.txt"));
acro2class['E'] = JSON.parse(readTextFile("../static/acronym2classes/E.txt"));
acro2class['F'] = JSON.parse(readTextFile("../static/acronym2classes/F.txt"));
acro2class['G'] = JSON.parse(readTextFile("../static/acronym2classes/G.txt"));
acro2class['H'] = JSON.parse(readTextFile("../static/acronym2classes/H.txt"));
acro2class['I'] = JSON.parse(readTextFile("../static/acronym2classes/I.txt"));
acro2class['J'] = JSON.parse(readTextFile("../static/acronym2classes/J.txt"));
acro2class['K'] = JSON.parse(readTextFile("../static/acronym2classes/K.txt"));
acro2class['L'] = JSON.parse(readTextFile("../static/acronym2classes/L.txt"));
acro2class['M'] = JSON.parse(readTextFile("../static/acronym2classes/M.txt"));
acro2class['N'] = JSON.parse(readTextFile("../static/acronym2classes/N.txt"));
acro2class['O'] = JSON.parse(readTextFile("../static/acronym2classes/O.txt"));
acro2class['P'] = JSON.parse(readTextFile("../static/acronym2classes/P.txt"));
acro2class['R'] = JSON.parse(readTextFile("../static/acronym2classes/R.txt"));
acro2class['S'] = JSON.parse(readTextFile("../static/acronym2classes/S.txt"));
acro2class['T'] = JSON.parse(readTextFile("../static/acronym2classes/T.txt"));
acro2class['U'] = JSON.parse(readTextFile("../static/acronym2classes/U.txt"));
acro2class['V'] = JSON.parse(readTextFile("../static/acronym2classes/V.txt"));
acro2class['Y'] = JSON.parse(readTextFile("../static/acronym2classes/Y.txt"));

// var classList = readTextFile("../static/class_list.txt");
// classList = JSON.parse(classList);

function readTextFile(file) {
	var rawFile1 = new XMLHttpRequest();
	rawFile1.open("GET", file, false);
	rawFile1.onreadystatechange = function() {
		if(rawFile1.readyState === 4) {
			if(rawFile1.status === 200 || rawFile1.status == 0) {
				return rawFile1.responseText;
			}
		}
	}
	rawFile1.send(null);
	return rawFile1.responseText;
}

var html = readTextFile("../static/html_block.txt");

function loadClasses() {
	var i = 0;
	for (var dept in dept2acro) {
		switch (dept[0]){
			case 'A':
				i = loadDepartment(dept2acro[dept], acro2classA, i);
				break;
			case 'B':
				i = loadDepartment(dept2acro[dept], acro2classB, i);
				break;
			case 'C':
				i = loadDepartment(dept2acro[dept], acro2classC, i);
				break;
			case 'D':
				i = loadDepartment(dept2acro[dept], acro2classD, i);
				break;
			case 'E':
				i = loadDepartment(dept2acro[dept], acro2classE, i);
				break;
			case 'F':
				i = loadDepartment(dept2acro[dept], acro2classF, i);
				break;
			case 'G':
				i = loadDepartment(dept2acro[dept], acro2classG, i);
				break;
			case 'H':
				i = loadDepartment(dept2acro[dept], acro2classH, i);
				break;
			case 'I':
				i = loadDepartment(dept2acro[dept], acro2classI, i);
				break;
			case 'J':
				i = loadDepartment(dept2acro[dept], acro2classJ, i);
				break;
			case 'K':
				i = loadDepartment(dept2acro[dept], acro2classK, i);
				break;
			case 'L':
				i = loadDepartment(dept2acro[dept], acro2classL, i);
				break;
			case 'M':
				i = loadDepartment(dept2acro[dept], acro2classM, i);
				break;
			case 'N':
				i = loadDepartment(dept2acro[dept], acro2classN, i);
				break;
			case 'O':
				i = loadDepartment(dept2acro[dept], acro2classO, i);
				break;
			case 'P':
				i = loadDepartment(dept2acro[dept], acro2classP, i);
				break;
			case 'R':
				i = loadDepartment(dept2acro[dept], acro2classR, i);
				break;
			case 'S':
				i = loadDepartment(dept2acro[dept], acro2classS, i);
				break;
			case 'T':
				i = loadDepartment(dept2acro[dept], acro2classT, i);
				break;
			case 'U':
				i = loadDepartment(dept2acro[dept], acro2classU, i);
				break;
			case 'V':
				i = loadDepartment(dept2acro[dept], acro2classV, i);
				break;
			case 'Y':
				i = loadDepartment(dept2acro[dept], acro2classY, i);
				break;
			default:
				console.log('welp ur missing a letter');
		}
	}
	document.getElementById('courses').innerHTML = html;
}


// animates tile once requirement is toggles
function animate(req){
	req = req.toUpperCase();
	for (var clas in requirement2classes[req]) {
		// animate each element
		document.getElementsByClass(requirement).animate() // <<<--------------LOL FIX
	}
}

open = false;
function overlay() {
	if (open) {
    	document.getElementById("require").style.width = 0;
    	open = false;
    } else {
    	document.getElementById("require").style.width = "300px";
    	open = true;
    }
}