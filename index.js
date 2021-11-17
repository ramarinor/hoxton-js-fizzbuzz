let message;
for (let i = 1; i <= 840; i++) {
	message = "";
	if (i % 3 === 0) {
		message = message + "Fizz";
	}
	if (i % 5 === 0) {
		message = message + "Buzz";
	}
	if (i % 7 === 0) {
		message = message + "Fish";
	}
	if (i % 8 === 0) {
		message = message + "Bus";
	}
	if (message === "") {
		console.log(i);
	} else {
		console.log(message);
	}
}
console.log("The first number that results in FizzBuzzFishBus is", 3 * 5 * 7 * 8);
