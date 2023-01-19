
// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

function sayHello() {
	// debugger;
	const userName = prompt('What is your name?').trim();
		if (userName !== null && userName !== '' ) {
			alert(`Hello,  ${userName}!`)
		} else {
			alert('Enter your name')
		}
} 


// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
function age() {
	const yearNow = 2022;
	const yourYearBirth =parseInt(prompt('Enter your year of birth'));
	const age = yearNow - yourYearBirth;
		if (!isNaN (yourYearBirth) && yourYearBirth !=='') {
			alert(`Your age ${age}`);
		} else {
			alert(`Enter yuor birth`)
		}
}

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

function pSq() {
	const hSq = prompt('Enter number').trim();
	if (!isNaN(hSq) && hSq !=='') {
		const pSq = hSq * 4;
		alert(`Result ${pSq}`)
	} else {
		alert('Enter corect number')
	}
}


// Запитай у користувача радіус кола і виведи площу такої окружності.

function sC() {
	const rC = prompt('Enter number');
	const sC = (Math.PI*rC*rC).toFixed(2);
	if(!isNaN(rC) && rC !==' ' && rC !==null) {
		alert(`${sC}`);
	} else {
		alert('Enter number')
	}
}

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

function vSpeed() {
	let s = parseInt(prompt('Какое расстояние до точки дислокации в километрах?'));
	let tHour = parseInt(prompt('За какое время хочешь добраться? Введи часы'));
	let tMin = parseInt(prompt('За какое время хочешь добраться? Введи минуты'));
	tMin = (tHour * 60 ) + tMin;
	s = s * 1000;
	let vSpeed = s / tMin;
	vSpeed = vSpeed / 1000 * 60;
	alert(`Speed = ${vSpeed} km/h`);
	}
	
	// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
	
	function currencyConverter() {
		const euroInDol = parseInt(prompt('How much $ do you want to change?'));
		const euroRate = 1.06;
		const euro = (euroInDol / euroRate).toFixed(2);
		if (!isNaN(euroInDol)) {
			alert(`${euro} €`);
		} else {
			alert('Enter number');
		}
	}


	// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

	let a=0.1;
	let b=0.2;
	let c=a+b;
	console.log(`0.1 + 0.2 = ${(c).toFixed(1)}`);

	// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

	const str = '1';
	const num = 2;
	const rez = +'1'+2;
	console.log(`"1" + 2 = ${rez}`);

	// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

	// 0.001 гигабайта flashDrive
function howManyF() {
	let GB = prompt('How many GB do you have ?').trim();
	const oneFileContainse = 820;
	const howManyF = ((GB*1000)+(GB * 24)) / oneFileContainse;
if (!isNaN(GB) && GB !==``) {
	alert(`${Math.floor(howManyF)} files can fit on your drive`);
} else {
		alert(`Enter number`);
	}
}

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

function shoppingCalculator() {
	// debugger
const iHaveManey = prompt('How much money you have?').trim();
const howMuchIsIt = prompt('How much is it?').trim();
const howManyPieces = Math.floor(iHaveManey / howMuchIsIt);
const moneyLeftOver = (iHaveManey - (howManyPieces * howMuchIsIt)).toFixed(2);
// Не понятно как сделать проверку?
if (!isNaN(iHaveManey) && iHaveManey !== '')
if (!isNaN(howMuchIsIt) && howMuchIsIt !== '') {
	alert(`You can buy ${howManyPieces} pieces`);
	alert(`Change from purchase ${moneyLeftOver} $`)
	} else {
		alert('Enter number')
	}
}


// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

function backwards() {
	const number = parseInt(prompt(`Enter a three-digit number`))
	const a = Math.floor(number / 100);
	const b = Math.floor((number % 100) / 10);
	const c = (number % 100) % 10;

	if (number < 100) {
		alert('Enter a three-digit number');
	} else if (number > 999) {
			alert('Enter a three-digit number');
	} else {
				(!isNaN(number) && number !== '') 
				? alert(`${number} inverse of ${c}${b}${a}`) 
				: alert(`Enter number`);
	}
}

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// сумма начисленных процентов => accrued Interest

function accruedInterest() {
	
	const cashDeposit = parseInt(prompt(`Enter deposit sum $`))
	const accruedInterest = ((cashDeposit / 100 * 5)/12 *2).toFixed(2);
	if (!isNaN(cashDeposit) && cashDeposit !=='') {
		alert (`Your interest amount for 2 months ${accruedInterest} $!`);
	} else {
		alert('Enter number')
	}
}


// Що повернуть вирази:

 2 && 0 && 3  //повернеться 0

 2 || 0 || 3 //повернеться 2

2 && 0 || 3 //повернеться  3