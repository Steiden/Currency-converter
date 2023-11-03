import { validateInputFloat, validateInputInt } from './modules/validation.mjs';

// Переменные HTML
const amount = document.getElementById('amount');
const amountLabel = document.getElementById('amountLabel');

// Переменные SCSS
// ...

// Обработчики событий

amount.addEventListener('input', validateInputFloat);
amount.addEventListener('focus', () => {
	amountLabel.style.top = `-8px`;
	amountLabel.style.fontSize = '0.8em';
	amount.style.color = '#00cc00';
});
amount.addEventListener('blur', () => {
	if(!amount.value) {
		amountLabel.style.top = `14px`;
		amountLabel.style.fontSize = '1em';
		amount.style.color = '#00ccff';
	}
});