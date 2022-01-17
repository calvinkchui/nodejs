
module.exports = {
  test: function() {
    var functionName = "es6";
    console.log("test " + functionName + "() begin")

    // 
    defaultValue();
    destructuring();
    func();

    defaultConfig1();

    console.log("test " + functionName + "() end")
  }

}


function defaultValue() {
  console.log("defaultValue()");

  function defFx1(x = 1) { return x + 10; }
  console.log(defFx1());  // 11
  console.log(defFx1(5)); // 15

}

// ES6 introduces a new ... operator
//   ...array  -"spread" it out into its individual values.
function spreadRest() {
   // XXX:
}

function foo() { return [2, 3, 4] }
function bar() { return { x: 4, y: 5, z: 6 } }

function destructuring() {
  console.log("construct()");

  let [a, b, c] = foo();
  console.log("construct Array: " + a + "," + b + "," + c);  // 2,3,4
  {
    let { x, y, z } = bar();
    console.log("construct Object: " + x + "," + y + "," + z); // 4,5,6
  }
  {
    let { x2, x } = bar();
    console.log("construct Object: " + x + "," + x2); // 4, undefined
  }
  {
    let { x:x2, y:z } = bar();
    console.log("construct Object: " + x2 + "," + z); // 4, 5
  }
  
  let [, b2] = foo();
  console.log("construct Array[,b2]: " + b2); // 3

  let [a3, ...others] = foo();
  console.log("rest (...) array a3, ...others: " + a3 + " - " + others); // 2 - 3,4
  
  // destruture to Object
  var o = {};
  [o.a, o.b, o.c] = foo();
  ( { x: o.x, y: o.y, z: o.z } = bar() );
  console.log( o.a, o.b, o.c );		// 1 2 3
  console.log( o.x, o.y, o.z );		// 4 5 6  
}





function func() {
  console.log("func() - function");

  // Rest Parameters ...  
  function fun1(...params) {
    console.log("Rest Parmaeter ... " + params.length);
  }
  console.log(fun1());     // 0 
  console.log(fun1(5, 6)); // 2

  // Anonymous Function
  var f = function() { return "Anonymous Function" }
  console.log(f())

  // The Function Constructor
  var func = new Function("x", "y", "return x*y;");
  console.log("Function Constructor - new Function() " + func(2, 4)); // 8


  // Anonymous Recursive Function
  (function() {
    var msg = "Anonymous Recursive Function - The function calls itself using a pair of parentheses ()"
    console.log(msg)
  })()

  // Lambda Functions / Arrow Functions
  var foo = (x) => 10 + x
  console.log("Arrow Functions " + foo(10))  // 20
}



// https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#nested-defaults-destructured-and-restructured
function defaultConfig1() {

  var defaults = {
    options: {
      remove: true,
      enable: false,
      instance: {}
    },
    log: {
      warn: true,
      error: true
    }
  };

  var config = {
    options: {
      remove: false,
      instance: null
    }
  };

  console.log("defaultConfig #1 config:" + JSON.stringify(config));

  // merge `defaults` into `config`
  {
    // destructure (with default value assignments)
    let {
      options: {
        remove = defaults.options.remove,
        enable = defaults.options.enable,
        instance = defaults.options.instance
      } = {},
      log: {
        warn = defaults.log.warn,
        error = defaults.log.error
      } = {}
    } = config;

    // restructure
    config = {
      options: { remove, enable, instance },
      log: { warn, error }
    };
  }
  console.log("defaultConfig #2 config - merged with default:" + JSON.stringify(config));
}