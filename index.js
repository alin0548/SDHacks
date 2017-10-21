var $canvas = $("#canvas");
// var $origin = $("#origin");
// console.log(canvas.style.height);
// origin.cx = canvas.style.height/2-origin.r;
// origin.cy = canvas.style.width/2-origin.r;
var radius = 10;
var children = 8;

// TweenLite.set($origin, {width:2*radius, height:2*radius, top:"50%", left:"50%",
// 	x: "-50%", y:"-50%", backgroundColor:"green", borderRadius:"50%", position:"absolute"});
var $origin = createNode("origin", "50%","50%");
var ox = parseInt($origin.css("left"));
var oy = parseInt($origin.css("top"));
//console.log(ox);
var radStep = 2*Math.PI/children;
for (i = 0; i<children; i++) {
	console.log(ox+Math.cos(i*radStep)+","+oy+Math.sin(i*radStep));
	createNode(i,(ox+100*Math.cos(i*radStep,oy))+"px",(oy+100*Math.sin(i*radStep,oy))+"px");
}
//createNode("otest", ox, oy);
 
function createNode(id, x, y) {
	var $newNode = $(document.createElement('div'));
	$newNode.id = id;
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