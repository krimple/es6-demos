(function() {
	'use strict';

	function Customer(first, last) {
		this.first = first;
		this.last = last;
		this.__proto__ = {
			getFullName : function() {
				return this.first + ' ' + this.last;
			}
		};
	}

	var c = new Customer('Ken', 'Rimple');
	console.log(c.getFullName());

}());