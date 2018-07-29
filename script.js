function myFirstApp(name,age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа");

	function showSkills() {
		let skills = [
		"html",
		"css",
		"Java"
		];

		for(let i = 0; i < skills.length; i++) {
				skills[i] = alert(skills[i])
		}
	}
	showSkills();


	function checkAge() {
		if (age > 18) {
			alert("Ты станешь FronEnd Разработчиком!")
		}
		else {
			alert("Рановто еще")
		}
	}

	function calcPow(num) {
		num *= num;
	}
	calcPow(4)
}

myFirstApp("Alex,24")

