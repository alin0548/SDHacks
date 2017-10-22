var $canvas = $("#canvas");
// var $origin = $("#origin");
// console.log(canvas.style.height);
// origin.cx = canvas.style.height/2-origin.r;
// origin.cy = canvas.style.width/2-origin.r;
var radius = 10;
var gen1 = 20;
var gen2 = 50;
// TweenLite.set($origin, {width:2*radius, height:2*radius, top:"50%", left:"50%",
// 	x: "-50%", y:"-50%", backgroundColor:"green", borderRadius:"50%", position:"absolute"});
var $origin = createNode("origin", "50%","50%");
var ox = parseInt($origin.css("left"));
var oy = parseInt($origin.css("top"));
//console.log(ox);
var radStep = 2*Math.PI/gen1;
for (i = 0; i<gen1; i++) {
	console.log(ox+Math.cos(i*radStep)+","+oy+Math.sin(i*radStep));
	var rand = Math.random()*40-20;
	// var rand2 = Math.random()*20-10;
	createNode(i,(ox+(100+rand)*Math.cos(i*radStep))+"px",(oy+(100+rand)*Math.sin(i*radStep))+"px");
}
for (i = 0; i<gen1; i++) {
	drawLine("origin",i);
}
var radStep2 = 2*Math.PI/gen2;
for (i = gen1; i<gen1+gen2; i++) {
	var rand = Math.random()*40-20;
	// var rand2 = Math.random()*20-10;
	createNode(i,(ox+(200+rand)*Math.cos(i*radStep2))+"px",(oy+(200+rand)*Math.sin(i*radStep2))+"px");
}
for (i = gen1; i<gen1+gen2; i++) {
	var randParent = Math.floor(Math.random()*gen1);
	drawLine(randParent,i);
}

 
function createNode(id, x, y) {
	var $newNode = $(document.createElement('div'));
	$newNode.attr("id",id);
	$newNode.css("z-index",5);
	$canvas.append($newNode);
	TweenLite.set($newNode, {width:2*radius, height:2*radius, top:y, left:x,
	x: "-50%", y:"-50%", backgroundColor:"green", borderRadius:"50%", position:"absolute"});
	$newNode.hover(
	function() {
		TweenLite.to($(this), 1, {scale:2});
	},
	function() {
		TweenLite.to($(this), 1, {scale:1});
	}
	);
	return $newNode;
}

function drawLine(id1, id2) {
	var $line = $(document.createElement('div'));
	var x1 = parseInt($(document.getElementById(id1)).css("left"));
	var y1 = parseInt($(document.getElementById(id1)).css("top"));
	var x2 = parseInt($(document.getElementById(id2)).css("left"));
	var y2 = parseInt($(document.getElementById(id2)).css("top"));
	console.log(x1+","+y1);
	var angle = Math.atan2((y2-y1),(x2-x1))*180/Math.PI;
	var rads = Math.atan((y2-y1),(x2-x1));
	var dist = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	$canvas.append($line);
	console.log(dist);
	//TweenLite.set($line, {width:0, height: 5, top:y1, left:x1, y:"-50%", backgroundColor:"red", position:"absolute", transform:"rotate("+angle+"deg)"});
	TweenLite.fromTo($line, 3, {width:0, height: 2, top:y1-1, left:x1, backgroundColor:"red", position:"absolute", transform:"rotate("+angle+"deg)",transformOrigin:"0px 1px"},
		{width:dist});
	return $line;

}