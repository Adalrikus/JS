function makeHelloFunction() {
	const message = 'hello'

	function sayHello() {
		console.log(message)
	}

	return sayHello
}

const sayHello = makeHelloFunction()

console.log('type of message: ', typeof message)
console.log(sayHello.toString())

sayHello()
