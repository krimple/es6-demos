(function(global) {
	'use strict';
	const calcTable = {
		'+' : (a, b) => a + b,
		'-' : (a, b) => a - b,
		'*' : (a, b) => a * b,
		'/' : (a, b) => a / b
	};

	function calculate(operator, op1, op2) {
		if (calcTable[operator]) {
			return calcTable[operator](op1, op2);
		} else {
			throw ('No calculation found for operator ' + operator);
		}
	}

   global.console.log(calculate('+', 1, 4), calculate('-', 3, 4),
   	           calculate('*', 4, 3), calculate('/', 32, 4));
}(global));