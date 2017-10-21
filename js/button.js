// requirements
var ac = readTextFile("../static/requirement2classes/ac.txt");
var ah = readTextFile("../static/requirement2classes/ah.txt");
var ai = readTextFile("../static/requirement2classes/ai.txt");
var al = readTextFile("../static/requirement2classes/al.txt");
var bs = readTextFile("../static/requirement2classes/bs.txt");
var elw = readTextFile("../static/requirement2classes/elw.txt");
var hs = readTextFile("../static/requirement2classes/hs.txt");
var is = readTextFile("../static/requirement2classes/is.txt");
var ps = readTextFile("../static/requirement2classes/ps.txt");
var pv = readTextFile("../static/requirement2classes/pv.txt");
var r1a = readTextFile("../static/requirement2classes/r1a.txt");
var r1b = readTextFile("../static/requirement2classes/r1b.txt");
var sbs = readTextFile("../static/requirement2classes/sbs.txt");

var dept2acro = readTextFile("../static/full_to_acr.txt");

var acro2classA = readTextFile("../static/acronym2classes/A.txt");
var acro2classB = readTextFile("../static/acronym2classes/B.txt");
var acro2classC = readTextFile("../static/acronym2classes/C.txt");
var acro2classD = readTextFile("../static/acronym2classes/D.txt");
var acro2classE = readTextFile("../static/acronym2classes/E.txt");
var acro2classF = readTextFile("../static/acronym2classes/F.txt");
var acro2classG = readTextFile("../static/acronym2classes/G.txt");
var acro2classH = readTextFile("../static/acronym2classes/H.txt");
var acro2classI = readTextFile("../static/acronym2classes/I.txt");
var acro2classJ = readTextFile("../static/acronym2classes/J.txt");
var acro2classK = readTextFile("../static/acronym2classes/K.txt");
var acro2classL = readTextFile("../static/acronym2classes/L.txt");
var acro2classM = readTextFile("../static/acronym2classes/M.txt");
var acro2classN = readTextFile("../static/acronym2classes/N.txt");
var acro2classO = readTextFile("../static/acronym2classes/O.txt");
var acro2classP = readTextFile("../static/acronym2classes/P.txt");
var acro2classR = readTextFile("../static/acronym2classes/R.txt");
var acro2classS = readTextFile("../static/acronym2classes/S.txt");
var acro2classT = readTextFile("../static/acronym2classes/T.txt");
var acro2classU = readTextFile("../static/acronym2classes/U.txt");
var acro2classV = readTextFile("../static/acronym2classes/V.txt");
var acro2classY = readTextFile("../static/acronym2classes/Z.txt");

function readTextFile(file) {
	var rawFile1 = new XMLHttpRequest();
	rawFile1.open("GET", file, false);
	rawFile.onreadystatechange = function() {
		if(rawFile1.readyState === 4) {
			if(rawFile1.status === 200 || rawFile1.status == 0) {
				return rawFile1.responseText;
			}
		}
	}
}

function loadClasses() {
	int i = 0;
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
				i = loadDepartment(dept2acro[dept], acro2classV), i;
				break;
			case 'Y':
				i = loadDepartment(dept2acro[dept], acro2classY), i;
				break;
			default:
				console.log('welp ur missing a letter');
		}
	}
}

function loadDepartment(acro, acro2class, i) {
	// set background color to be something different for each department
	for (var clas in acro2class[acronym]) {
		document.getElementById('courses').innerHTML = "<div class='" + acronym + "' id='" + i + "'><h1>" + clas + "</h1></div>";
		i++;
	}
	return i;
}

// animates tile once requirement is toggles
function animateTiles(requirement){
	requirement = requirement.toUpperCase();
	for (var clas in ac[requirement]) {
		// animate each element
		document.getElementsByClass(requirement).animate() // <<<--------------LOL FIX
	}
}