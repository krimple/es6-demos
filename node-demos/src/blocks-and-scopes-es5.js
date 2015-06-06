(function() {
  'use strict';

  var globalVar = 23;
  function outer() {
    var outervar = 3434;

    function inner() {
      var innervar = 2344;
      return outervar + innervar;
    }

    console.log('in outer() the inner() function returns', inner());
    console.log('outer can see globalVar', globalVar);
    // will fail console.log('outer cannot see innervar', innervar === undefined);
 }

outer();

function blockScopeDoesntExist() {
  for (var i = 0; i < 100; i++) { }
  console.log('hey, I am not local!', i);
}
blockScopeDoesntExist();

}());

