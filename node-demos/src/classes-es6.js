// nodejs does not yet have support for classes natively! (transpile time)
// run with iojs --harmony-classes --harmony --use-strict classes-es6.js

class Customer {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	
	getFullName() {
			return `${this.first} ${this.last}`;			
	}
}

var customer = new Customer('Ken', 'Rimple');
console.log(customer.getFullName());
