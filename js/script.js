import { validateInputFloat, validateInputInt } from './modules/validation.mjs';
import { getCourse, calcCourse } from './modules/getCourse.mjs';

// Переменные HTML
const form = document.getElementById('form');
const amount = document.getElementById('amount');
const amountLabel = document.getElementById('amountLabel');
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
const currencyCourse = document.getElementById('course');
const result = document.getElementById('result');

// TODO Найти информцаию по получение переменных с CSS/SCSS
// Переменные SCSS
// ...

// Обработчики событий

// Расчет
form.addEventListener('submit', (e) => {
	e.preventDefault();

	calcCourse(currencyFrom.value, currencyTo.value, amount.value)
	.then(res => result.value = res.toFixed(5));
});

// Очистка формы
form.addEventListener('reset', () => {
	updateCurrencyCourse();
});

// Загрузка первой выбранной валюты при загрузке страницы
window.addEventListener('load', () => {
	updateCurrencyCourse();
});

// Загрузка курса выбранной валюты
currencyFrom.addEventListener('change', updateCurrencyCourse);
currencyTo.addEventListener('change', updateCurrencyCourse);

// Валидация поля ввода
amount.addEventListener('input', validateInputFloat);


// Стилизация
amount.addEventListener('focus', () => {
	amountLabel.style.top = `-8px`;
	amountLabel.style.fontSize = '0.8em';
	amount.style.borderColor = '#00cc00';
	amount.style.boxShadow = '0 0 2px #00cc00';
});
amount.addEventListener('blur', () => {
	if(!amount.value) {
		amountLabel.style.top = `14px`;
		amountLabel.style.fontSize = '1em';
		amount.style.borderColor = '#00ccff';
		amount.style.boxShadow = '0 0 2px #00ccff';
	}
});


// Функции
function updateCurrencyCourse() {
	calcCourse(currencyFrom.value, currencyTo.value, 1)
	.then(course => currencyCourse.value = course.toFixed(5));
}