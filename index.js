for (let i = 1; i <= 840; i++) {
	if (i % (3 * 5 * 7 * 8) === 0) {
		console.log("FizzBuzzFishBus");
	} else if (i % (5 * 7 * 8) === 0) {
		console.log("BuzzFishBus");
	} else if (i % (3 * 7 * 8) === 0) {
		console.log("FizzFishBus");
	} else if (i % (3 * 5 * 8) === 0) {
		console.log("FizzBuzzBus" === 0);
	} else if (i % (3 * 5 * 7) === 0) {
		console.log("FizzBuzzFish");
	} else if (i % (7 * 8) === 0) {
		console.log("FishBus");
	} else if (i % (5 * 8) === 0) {
		console.log("BuzzBus");
	} else if (i % (3 * 8) === 0) {
		console.log("FizzBus");
	} else if (i % (5 * 7) === 0) {
		console.log("BuzzFish");
	} else if (i % (3 * 7) === 0) {
		console.log("FizzFish");
	} else if (i % (3 * 5) === 0) {
		console.log("FizzBuzz");
	} else if (i % 8 === 0) {
		console.log("Bus");
	} else if (i % 7 === 0) {
		console.log("Fish");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}
console.log("The first number that results in FizzBuzzFishBus is", 3 * 5 * 7 * 8);
