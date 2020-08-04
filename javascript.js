adblockEnabled=false;

var score = 0;
var buy = 0;
var price = 50;
var lvl = 0;

function click2 (){
	score -= score;
	document.getElementById("balance").innerHTML = "Баланс - " + score;
}

function click1 (){
    if(score >= price){
		score -=price;
		buy++;
		lvl++;
		price *= 2;
	}else{
		alert("У вас недостаточно денег!");
	}
	document.getElementById("lvl").innerHTML = "Ваш уровень прокачки:" + lvl;
	document.getElementById("balance").innerHTML = "Баланс - " + score;
    document.getElementById("buttom2").innerHTML = "Улучшить! <br/> Цена:" + price;
}



function click5 (){
        if(buy == 10){
                score += 100;
        }
        if(buy == 9){
                score += 40;
        }
        if(buy == 8){
                score += 20;
        }
        if(buy == 7){
                score +=10;
        }
        if(buy == 6){
                score +=5;
        }
	if(buy == 0){
		score++;
	}
	
	if(buy == 3){
		score +=3.5;
	}
	
	if(buy == 4){
		score +=3;
	}
	
	if(buy == 5){
		score +=4;
	}
	
	if(buy == 2){
		score +=2;
	}
	
	if(buy == 1){
		score +=1.5;
	}
	
	document.getElementById("balance").innerHTML = "Баланс - " + score;
}

alert ("Добро пожаловать в Кликкер!");
confirm("Ввести код на 10 lvl,если она есть!");
if(confirm){
  var cod1 = cod_2992;
  var confirm1 = prompt("Введите код: ");
  if(confirm1 == cod1){
    alert("Успешно!!!");
    lvl = 10;
    buy = 10;
    }else{
    alert("Неправильный код на 10 lvl");
    continue;
    }
}

