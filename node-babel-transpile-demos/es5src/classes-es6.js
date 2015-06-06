// nodejs does not yet have support for classes natively! (transpile time)
// run with iojs --harmony-classes --harmony --use-strict classes-es6.js

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Customer = (function () {
	function Customer(first, last) {
		_classCallCheck(this, Customer);

		this.first = first;
		this.last = last;
	}

	_createClass(Customer, [{
		key: 'getFullName',
		value: function getFullName() {
			return '' + this.first + ' ' + this.last;
		}
	}]);

	return Customer;
})();

var customer = new Customer('Ken', 'Rimple');
console.log(customer.getFullName());