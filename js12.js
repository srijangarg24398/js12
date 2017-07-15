alink=document.querySelectorAll('a[href^="#"]');
elements=["home","tools","about","contact"]
function mod (i) {
	var maxheight=document.body.clientHeight;
	function getelement(id){
		return document.getElementById(id);
	}
	var el=getelement(elements[i]);
	var time=500;
	var frequency=5;
	var number;
	function scrollthere(event){
		var delta=((el.offsetTop-scrollY)/time)*frequency;
		if (number!=null)
		{
			clearInterval(number);
		}
		console.log(alink[3]);
		console.log(delta,scrollY,el.offsetTop);

		number=setInterval(function(){
			console.log("printing");
			window.scrollTo(window.scrollX,window.scrollY+delta);
			if (Math.abs(scrollY - el.offsetTop)<=10||scrollY==0||scrollY==maxheight){
			// if (scrollY>=el.offsetTop){
				window.scrollTo(window.scrollX,el.offsetTop-50);
				clearInterval(number);
			}
		},frequency);
		
	}
	alink[i].addEventListener('mouseover',scrollthere);
}
for (var k=0;k<alink.length;k++){
	mod(k);
}