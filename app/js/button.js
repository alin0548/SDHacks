// requirements
var requirement2classes = {};
requirement2classes['AC'] = JSON.parse(readTextFile("../static/requirement2classes/ac.txt"));
requirement2classes['AH'] = JSON.parse(readTextFile("../static/requirement2classes/ah.txt"));
requirement2classes['AI'] = JSON.parse(readTextFile("../static/requirement2classes/ai.txt"));
requirement2classes['AL'] = JSON.parse(readTextFile("../static/requirement2classes/al.txt"));
requirement2classes['BS'] = JSON.parse(readTextFile("../static/requirement2classes/bs.txt"));
requirement2classes['ELW'] = JSON.parse(readTextFile("../static/requirement2classes/elw.txt"));
requirement2classes['HS'] = JSON.parse(readTextFile("../static/requirement2classes/hs.txt"));
requirement2classes['IS'] = JSON.parse(readTextFile("../static/requirement2classes/is.txt"));
requirement2classes['PS'] = JSON.parse(readTextFile("../static/requirement2classes/ps.txt"));
requirement2classes['PV'] = JSON.parse(readTextFile("../static/requirement2classes/pv.txt"));
requirement2classes['R1A'] = JSON.parse(readTextFile("../static/requirement2classes/r1a.txt"));
requirement2classes['R1B'] = JSON.parse(readTextFile("../static/requirement2classes/r1b.txt"));
requirement2classes['SBS'] = JSON.parse(readTextFile("../static/requirement2classes/sbs.txt"));


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
	document.getElementById('courses').innerHTML = html;
}


// animates tile once requirement is toggles
function anim(req){
	var x;
	if (!document.getElementById(req).on) {
		document.getElementById(req).on=true;
		x=1;
	} else {
		document.getElementById(req).on=false;
		x=-1;
	}

	req = req.toUpperCase();
	//console.log(requirement2classes[req][req]);
	for (var clas of requirement2classes[req][req]) {
		// animate each element
		//console.log(clas);
		if(!document.getElementById(clas).count) {
			document.getElementById(clas).count=0;
		}
		document.getElementById(clas).count+=x;
		if(document.getElementById(clas).count>0) {
			$(document.getElementById(clas)).animate({opacity:1}); // <<<--------------LOL FIX
		} else {
			$(document.getElementById(clas)).animate({opacity:0});
		}
	}
}

function popup(id) {
	console.log("popping "+id);
	document.getElementById("h" + id).style.display = "block";
}

open = false;
function overlay() {
	if (open) {
    	document.getElementById("require").style.width = 0;
    	open = false;
    } else {
    	document.getElementById("require").style.width = "350px";
    	open = true;
    }
}