var legendary = 0;
var mythick = 0;
var epick = 0;
var rare = 0;
var balance = 0;
var MegaBoxPrize = 0;
alert("Welcome!");
function obnBalance (){document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
if(balance < 0){
				balance = 0;
				}
      }
/*document.getElementById("buttom2").innerHTML = "Улучшить! <br/> Цена:" + price; */

function f1 () {
				   if(balance >= 80){
				   				balance -= 80; 				document.getElementById("ht2b1").innerHTML= "Баланс: " + balance;
				   var rareLega = 1;
	    	  	var rareMythik = 5;
	    			var rareEpick = 10;
	    			var rare = 40;
			    	var max = 0;
	    			var open = Math.random() * 100;
	  			if(open < rareLega && max <= 3 ){
								Lega ();
								max++;
								}
				if(open < rareMythik && max <= 3){
								Mythick ();
								max++;
								}
			 if(open < rareEpick && max <= 3){
								Epick ();
								max++;
								}
			 if(open < rare && max <= 3){
								Rare ();
								max++;
								}
								
								if(balance < 0){
			        	balance = 0;
			         }	       
			         }else{
			         				alert("Недостаточно гемов!");
			         				}
						}
				
function Lega () {
				alert("Legendary!!!");
				return(legendary++);
				}
				
function Mythick () {
				alert("Mythick!!!");
				return(mythick++);
				}
				
function Epick () {
				alert("Epick!!!");
				return(epick++);
				}
				
function Rare () {
				alert("Rare!!!");
				return(rare++);
				}

function f2 () {
				   if(balance < 0){
				   				balance = 0;
				   				}
				   if(balance >= 30){
				   				balance -= 30; 				document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
				   var rareLega = 1;
	    	  	var rareMythik = 3;
	    			var rareEpick = 7;
	    			var rare = 20;
			    	var max = 0;
	    			var open = Math.random() * 100;
	  			if(open < rareLega && max <= 2){
								Lega ();
								max++;
								}
				if(open < rareMythik && max <= 2){
								Mythick ();
								max++;
								}
			 if(open < rareEpick && max <= 2){
								Epick ();
								max++;
								}
			 if(open < rare && max <= 2){
								Rare ();
								max++;
								}  
			         }else{
			         				alert("Недостаточно гемов!");
			         				}
						}
				
function Lega () {
				alert("Legendary!!!");
				return(legendary++);
				}
				
function Mythick () {
				alert("Mythick!!!");
				return(mythick++);
				}
				
function Epick () {
				alert("Epick!!!");
				return(epick++);
				}
				
function Rare () {
				alert("Rare!!!");
				return(rare++);
				}
						
function earnFunc (){
				  var truesk = 0;
				  var randomCatCut = Math.random() * 10;
				  var sunCatCut =  "http://catcut.net/WosO";
				  var smailikCatCut = "http://catcut.net/1psO";
				  var pechenbkaCatCut = "http://catcut.net/7psO";
				  if(randomCatCut > 5){
				  				randomCatCut = sunCatCut;
				  				}
				  	if(randomCatCut < 5){
				  				randomCatCut=smailikCatCut;
				  					}
				  	if(randomCatCut > 7){
				  				randomCatCut = pechenbkaCatCut;
				  					}
				  	if(randomCatCut > 3){
				  				randomCatCut = pechenbkaCatCut;
				  					}
				  					switch(randomCatCut){
				  							case "http://catcut.net/WosO"	:truesk = 1; break;
				  						case "http://catcut.net/1psO":truesk = 2; break;
				  							case "http://catcut.net/7psO":truesk = 3; break;
				  									}
						var b = prompt("Что было на странице?Укажите номер: \n *Солнце (1) \n *Смайлик (2) \n *Печенька (3) \n Ссылка: " + randomCatCut);
						if(b == truesk){
										balance += 10;
											alert("+10 гемов");
										}else{
														alert("Неправильно!");
														}	document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
										
				 }
				 
