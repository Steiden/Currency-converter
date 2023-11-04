export function getCourse(courseName) {
	if(courseName === "RUB") return Promise.resolve(1);
	return fetch("https://www.cbr-xml-daily.ru/latest.js")
		.then(res => {
			if(res.ok) return res.json();
			throw new Error(res.status);
		})
		.then(data => {
			return data.rates[courseName];
		})
		.catch(err => console.error(err));
}

export function calcCourse(courseFromName, courseToName, amount) {
	return getCourse(courseFromName).then(courseFrom => {
		return getCourse(courseToName).then(courseTo => {
			return (courseTo / courseFrom) * amount;
		});
	});
}