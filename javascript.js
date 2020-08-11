adblockEnabled = false;

var score = 0;
var buy = 0;
var price = 100;
var lvl = 0;

if(lvl == 10){
  alert("Поздравляю! \n (Личное поздравление разработчика) \n напишите нам на почту: krllesn310@gmail.com ,что стоит: добавить или убрать! \n Удачи!");
}

function click8{
        alert("Правило N°1:("Нельзя использовать слова: \n ▪Мат \n ▪Сексуального похождения")");
        alert("Правило N°2:("Нельзя использовать: \n ▪Рекламу \n ▪Ввод в заблуждение \n ▪Атеизм")");
        alert("Правило N°3:("Нельзя использовать: \n ▪Сравнивание \n ▪Унижение \n ▪Вымагательство \n ▪Номера карт и тд. \n ▪Довод до самоубийства \n НЕ НАРУШАЙТЕ ПРИВИЛА!)))")");
}

function click7 (){
        alert("Создано компанией:Angel-Teck");
        alert("Версия: V2.0");
        alert("Дата рождения:02.08.2020 , Последнее Обновление 11.08.2020");
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
                score +=30;
}
        if(buy == 8){
                score +=20;
}
        if(buy == 7){
                score +=15;
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

