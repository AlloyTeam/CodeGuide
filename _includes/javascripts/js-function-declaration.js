function doSomething(item) {
    // do something
}

var doSomething = function (item) {
    // do something
}


// Good
doSomething(item);

// Bad: Looks like a block statement
doSomething (item);


// Good
var value = (function() {

    // function body
    return {
        message: "Hi"
    }
}());


// Good
(function() {
    "use strict";

    function doSomething() {
        // code
    }

    function doSomethingElse() {
        // code
    }

})();

