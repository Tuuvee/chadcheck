
//Player stats
let pLevel = 1;
let pSkillpoints=0;
let xp=0;
let xpReq=(pLevel*10)*3;
let pStr = 3;
let pEnd = 3;
const acc = 0.85;
let pHp = 4+(pEnd*2);
//Enemy info
let enemies = ['Bandit', 'Orc', 'Undead', 'Wolf'];
let battleEnemy ="lmao";
let enemyHp = 0;
let dmgMod=1;
let canAttack=true;
let xpRew;

function setText(){
	document.getElementById("p2").innerHTML = battleEnemy+ " Lvl: "+pLevel;
	document.getElementById("hp2").innerHTML = "HP: "+enemyHp;
	document.getElementById("xp").innerHTML = "Xp: "+xp +"/"+xpReq;
	xpRew=enemyHp;
	console.log(xpRew);
}

//Enemy initiation function
function initEnemy(){
	
	battleEnemy = enemies[Math.round(Math.random(4))];
	
	switch(battleEnemy){
		case 'Bandit':
			enemyHp = Math.ceil(6+(pLevel*1.5));
			dmgMod = 1.0;
			setText();
			
			break;
		case 'Orc':
			enemyHp = Math.ceil(6+(pLevel*1.7));
			dmgMod = 1.2;
			setText();
			
			break;
		case 'Undead':
			enemyHp = Math.ceil(6+(pLevel*2));
			dmgMod = 0.8;
			setText();
			
			break;
		case 'Wolf':
			enemyHp = Math.ceil(6+(pLevel*1));
			dmgMod = 2;
			setText();

			break;
	}
	
}

//skillpoint functions
function endPlus(){
	if(pSkillpoints>=1){
	pSkillpoints--;
	pEnd++;
	document.getElementById("sp2").innerHTML = "Skillpoints: "+pSkillpoints;
	document.getElementById("sp3").innerHTML = "Strength: "+pEnd;
	pHp=4+(pEnd*2);
	}
}
function strPlus(){
	if(pSkillpoints>=1){
	pSkillpoints--;
	pStr++;
	document.getElementById("sp2").innerHTML = "Skillpoints: "+pSkillpoints;
	document.getElementById("sp3").innerHTML = "Strength: "+pStr;
	}
	
}
function xpCalc(){
	if (xp>=xpReq){
		pLevel++;
		document.getElementById("p1").innerHTML = "Player Lvl "+pLevel;
		pSkillpoints++;
		xpReq=(pLevel*10)*3;
	}
}
function spCheck(){
	if (pSkillpoints>=1){	
		var a = document.getElementById("sp1");
		a.style.display = "inline";
		document.getElementById("sp2").innerHTML = "Skillpoints: "+pSkillpoints;
		document.getElementById("sp3").innerHTML = "Strength: "+pStr;
		document.getElementById("sp4").innerHTML = "Endurance: "+pEnd;
		document.getElementById("main").style.display="none";
	}
	else {
		var z = document.getElementById("newEnem");
		z.style.display="inline";
	}
}
function spClose(){
	var sp = document.getElementById("sp1");
		sp.style.display = "none";
		document.getElementById("main").style.display="inline";
		initEnemy();
		canAttack=true;
}
//Battle related functions
function battleEnd(){
	pHp=4+(pEnd*2);
	xp+=xpRew;
	xpCalc();
	document.getElementById("xp").innerHTML = "Xp: "+xp +"/"+xpReq;
	spCheck();
	document.getElementById("hp1").innerHTML = "HP: "+pHp;
	
}
function pAttack(){
	
		if (Math.round(Math.random(100)<=(acc*100))){
			enemyHp -=pStr;	
			if (enemyHp<0){
				enemyHp=0;
			}
			document.getElementById("enemybox").style.animation= "dmgEffect 1.5s";
			document.getElementById("hp2").innerHTML = "HP: "+enemyHp;
			canAttack=false;
			document.getElementById("playerbox").style.animation= "none";
		
			
		}
	
	setTimeout(function(){
	
	document.getElementById("enemybox").style.animation= "none";
				if (enemyHp>=1){
					if (Math.random(100)<=(acc*100)){
						document.getElementById("playerbox").style.animation= "dmgEffect 1.5s";
						pHp -= 2+Math.round(Math.random(pLevel*3));
						
						document.getElementById("hp1").innerHTML = "HP: "+pHp;
						if (pHp <=0){
							var z = document.getElementById("l");
							z.style.display ="inline";
						}
					}
					
					canAttack=true;
				}
				else {
					battleEnd();
				}	
		},1500);
	
}
function attack(){
	if (canAttack===true){
		pAttack();
	}
}
// "Menu"
function play(){
	var x = document.getElementById("menu");
	var y = document.getElementById("newEnem");
	var z = document.getElementById("l");
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "none";
	initEnemy();
	canAttack=true;
	
}
//restart
function restart(){
pLevel = 1;
pSkillpoints=0;
xp=0;
xpReq=(pLevel*10)*3;
pStr = 3;
pEnd = 3;
pHp = 4+(pEnd*2);
play();
}
//HTML Button stuff
window.onload = function() {
	var butn1 = document.getElementById("btn1");
	var butn2 = document.getElementById("btn2");
	var butn3 = document.getElementById("btn3");
	var butn4 = document.getElementById("btn4");
	var butn5 = document.getElementById("btn5");
	var butn6 = document.getElementById("newEnem");
	var butn7 = document.getElementById("btn7");
	butn1.onclick = strPlus;
	butn2.onclick = endPlus;
	butn3.onclick = spClose;
	butn4.onclick = play;
	butn5.onclick = attack;
	butn6.onclick = play;
	butn7.onclick = restart;
};



