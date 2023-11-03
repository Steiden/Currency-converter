// Валидация input с плавающей точкой
export function validateInputFloat(e) {
	try {
		inputOnlyFloats(e);
		// withoutEmpty(e);
		replaceDoubleZeros(e);
		deleteStartingZero(e);
		constraintBeforeDot(e);
		constraintAfterDot(e);
		onlyOneDot(e);
	} catch (err) {}
}
// Валидация input с целыми числами
export function validateInputInt(e) {
	try {
		inputOnlyInts(e);
		withoutEmpty(e);
		replaceDoubleZeros(e);
		deleteStartingZero(e);
	} catch (err) {}
}


// Ввод только чисел с плавающей точкой
function inputOnlyFloats(e) {
	e.target.value = e.target.value.replace(/[^0-9.]/g, '');
}
// Ввод только целых чисел
function inputOnlyInts(e) {
	e.target.value = e.target.value.replace(/[^0-9]/g, '');
}
// Пустые значения заменяются на ноль
function withoutEmpty(e) {
	if (e.target.value === '') e.target.value = 0;
}
// Удаляются лишние нули в начале значения
function replaceDoubleZeros(e) {
	e.target.value = e.target.value.replace(/^0+/g, '0');
}
// Удаление нуля при вводе
function deleteStartingZero(e) {
	if (/^0\w+/g.exec(e.target.value)) e.target.value = e.target.value.slice(1);
}
// Ограничение количества цифр перед точкой
function constraintBeforeDot(e) {
	if(e.target.value.match(/\./g)){
		let text = e.target.value.split('.');
		if(e.target.value.split('.')[0].length > 3)
			e.target.value = text[0].substring(0, 3) + '.' + text[1];
	}
	else
		if(e.target.value.length > 3) e.target.value = e.target.value.slice(0, -1);
}
// Ограничение количества цифир после точки
function constraintAfterDot(e) {
	if (e.target.value.split('.')[1].length > 3)
		e.target.value = e.target.value.slice(0, -1);
}

// Нельзя вводить больше двух точек подряд
function onlyOneDot(e) {
	e.target.value = e.target.value.replace(/(\.{2})/g, '.');
	if (e.target.value.match(/\./g).length > 1)
		e.target.value = e.target.value.slice(0, -1);
}