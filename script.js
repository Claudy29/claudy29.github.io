var legendary = 0;
var mythick = 0;
var epick = 0;
var rare1 = 0;
var rare = 0;
var balance = 1000;
var MegaBoxPrize = 0;
var name = "Сашко";
var parol = "1324567";
var _НовыйГод = 0;
alert("Welcome!");
function obnBalance (){document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
if(balance < 0){
				balance = 0;
				}
      }
/*document.getElementById("buttom2").innerHTML = "Улучшить! <br/> Цена:" + price; */

function f1 () {
				   if(balance >= 50){
				   				balance -= 50; 				document.getElementById("ht2b1").innerHTML= "Баланс: " + balance;
				   var rareLega = 1;
	    	  	var rareMythik = 5;
	    			var rareEpick = 10;
	    			var rere1 = 30;
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
				if(open < Rare1 && max <= 3){
								Rare1 ();
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
				
function Rare1 () {
				alert("Rare+!!!");
				return(rare1++);
				}
				
function Rare () {
				alert("Rare!!!");
				return(rare++);
				}

function f2 () {
				   if(balance < 0){
				   				balance = 0;
				   				}
				   if(balance >= 10){
				   				balance -= 10; 				document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
				   var rareLega = 1;
	    	  	var rareMythik = 3;
	    			var rareEpick = 7;
	    			var rare1 = 15;
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
				if(open < rare1 && max <= 2){
								Rare1 ();
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
  
function menu (){
				     if(_НовыйГод == 0){
			     	name1 = prompt("Введите ваше имя: ");
			     	parol1 = prompt("Введите ваш пароль: ")
			     	if(name1 == name && parol1 == parol){
			     					balance = 0;
legendary = 0;
mythick = 0;
epick = 0;
rare1 = 0;
rare = 0;
balance = 100;	document.getElementById("ht2b2").innerHTML=name;
				_НовыйГод++;
				    }else{
				    				alert("Попробуйте ещё раз!)))");
				    				return;
				    				}
			     	}
		     		alert("Ваш баланс: " + balance + "\n Легендарки: " + legendary + "\n Мифики: " + mythick + "\n Эпики: " + epick + "\n Сверх редкие: " + rare1 + "\n Редкие: " + rare);
		}
		
function f3 () {
				   if(balance >= 5){
				   				balance -= 5; 				document.getElementById("ht2b1").innerHTML= "Баланс: " + balance;
				   var rareLega = 1;
	    	  	var rareMythik = 3;
	    			var rareEpick = 5;
	    			var rere1 = 15;
	    			var rare = 20;
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
				if(open < Rare1 && max <= 3){
								Rare1 ();
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
		
function hors1 (){
				if(legendary >= 1){
								legendary--;
								balance += 700;	document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
								alert("Вы продали легу!");
								}else{
												alert("У вас нет лег!");
												}
				}

function hors2 (){
				if(mythick >= 1){
								mythick--;
								balance += 350;	document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
								alert("Вы продали мифика!");
								}else{
												alert("У вас нет мификов!");
												}
				}

function hors3 (){
				if(epick >= 1){
								epick--;
								balance += 170;	document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
								alert("Вы продали эпика!");
								}else{
												alert("У вас нет эпиков!");
												}
				}

function hors4 (){
				if(rare1 >= 1){
								rare1--;
								balance += 80;	document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
								alert("Вы продали сверх редкого!");
								}else{
												alert("У вас нет сверх редких!");
												}
				}

function hors5 (){
				if(rare >= 1){
								rare--;
								balance += 30;	document.getElementById("ht2b1").innerHTML="Баланс: " + balance;
								alert("Вы продали редкого!");
								}else{
												alert("У вас нет редких!");
												}
				}
