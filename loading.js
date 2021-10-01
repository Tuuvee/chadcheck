let count=1;

function myLoop(){
	setTimeout(function(){
		if (document.readyState==='complete'){
			console.log('got em');
			
			let x = document.getElementById("loading");
			let y = document.getElementById("loading2");
			let z = document.getElementById("loading3");
			
			let c = document.getElementsByTagName('body');
			x.style.display = "none";
			y.style.display = "none";
			z.style.display = "none";
			
			c[0].style.overflowY="scroll";
			count++;
			
		}
		
		if(count < 10 && document.readyState!='complete'){
			myLoop();
			}
	},2000);
}
  myLoop();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
 
}