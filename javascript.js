adblockEnabled=false;

var score = 0;
var buy = 0;
var price = 50;
var lvl = 0;

function click7 (){
        alert("Разработчик:Лесницкий Кирилл Олександрович , Почта: krllesn310@gmail.com");
        alert(Создано компанией:Angel-Teck);
        alert(Версия: 1.5);
        alert("Дата рождения:02.08.2020 , Последнее Обновление 02.08.2020");
}

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
        if(buy >= 10){
                score +=100;
}
        if(buy == 9){
                score +=50;
}
        if(buy == 8){
                score +=30;
}
        if(buy == 7){
                score +=20;
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

