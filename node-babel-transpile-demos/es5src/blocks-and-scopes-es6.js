'use strict';

(function () {
  'use strict';

  var globalVar = 23;
  var newVar = 345435;
  function outer() {
    var outervar = 3434;

    function inner() {
      var innervar = 2344;
      return outervar + innervar;
    }

    console.log('in outer() the inner() function returns', inner());
    console.log('outer can see globalVar', globalVar);
    //console.log('outer cannot see innervar', innervar);
    // cannot modify newVar
    //newVar = 234;
  }

  outer();

  function blockScopeDoesExist() {
    for (var i = 0; i < 100; i++) {}
    // won't compile! console.log('hey, I am not local!', i);
  }
  blockScopeDoesntExist();
})();