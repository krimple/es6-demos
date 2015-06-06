(function(global) {
	'use strict';
	function calculate(operator, op1, op2) {
		return operator(op1, op2);
	}

	function add(op1, op2) {
		return op1 + op2;
	}

	function subtract(op1, op2) {
		return op1 - op2;
	}

	function multiply(op1, op2) {
		return op1 * op2;
	}

	function divide(op1, op2) {
		return op1 / op2;
	}


   global.console.log(calculate(add, 1, 4), calculate(subtract, 3, 4),
   	           calculate(multiply, 4, 3), calculate(divide, 32, 4));
}(global));