function addf(x) {
  return function (y) {
    return x + y;
  };
}

function applyf(operator) {
  return function (x) {
    return function (y) {
      return operator(x)(y);
    };
  };
}

function curry(func, x) {
  return function (y) {
    return func(x, y);
  };
}

function inc() {
  return addf(x)(1);
}

function methodize(func) {
  return function (y) {
    return func(this)(y);
  };
}

function demethodize(func) {
  return function (x, y) {
    return func(x, y);
  };
}

function twice(func) {
  return function (x) {
    return func(x, x);
  };
}

function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

function composeu(func1, func2) {
  return function (x) {
    return func2(func1(x));
  };
}

function composeb(func1, func2) {
  return function (x, y, z) {
    return func2(func1(x, y), z);
  };
}

function once(func) {
    static var check = 0;
    if(check++ === 0)
       return function(x,y) {
           func(x,y);
       }
    else
       return -1;
}


var double = twice(add);
var square = twice(mul);

var add_once = once(add);


console.log(add_once(3,2));
