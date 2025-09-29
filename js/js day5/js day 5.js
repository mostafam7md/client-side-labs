//---------------------1-------------
console.log(a());
var b = function(){ return 'B'; };
function a(){ return 'A'; }
console.log(b());

//---------------------2-------------
function sum(a, b) { return a + b; }
var add = function(a, b) { return a + b; };
console.log(sum(3, 4)); // 7
console.log(add(3, 4)); // 7

//---------------------3-------------
var factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // use internal name
};
console.log(factorial(5)); // 120
// console.log(fact); // ReferenceError, not global

//---------------------4-------------
function showInfo() {
  console.log("args length:", arguments.length);
  for (var i = 0; i < arguments.length; i++) {
    console.log("arg[" + i + "] =", arguments[i]);
  }
}
showInfo();
showInfo(1, 2);
showInfo("a", "b", "c", "d", "e");

//---------------------5-------------
function mutate(x, y) {
  console.log("Before:", arguments[0], arguments[1]);
  x = x * 2;
  y = y * 2;
  console.log("After:", arguments[0], arguments[1]);
}
mutate(3, 4);

//---------------------6-------------
function sumAll() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumAll(2,5,3)); // 10
console.log(sumAll()); // 0

//---------------------7-------------
function sumAllReduce() {
  return Array.prototype.reduce.call(arguments, function(acc, val){ return acc + val; }, 0);
}
console.log(sumAllReduce(2,5,3)); // 10
console.log(sumAllReduce()); // 0

//---------------------8-------------
function describeValue() {
  if (arguments.length === 0) return 'none';
  if (arguments.length === 1) return 'one:' + arguments[0];
  if (arguments.length === 2) return 'two:' + arguments[0] + ',' + arguments[1];
  return 'too many';
}
console.log(describeValue());
console.log(describeValue(5));
console.log(describeValue(1,2));
console.log(describeValue(1,2,3));

//---------------------9-------------
var funcs = [
  function(x){ return x + 1; },
  function(x){ return x * 2; },
  function(x){ return x - 3; }
];
var start = 10;
for (var i = 0; i < funcs.length; i++) {
  start = funcs[i](start);
}
console.log(start); // ((10+1)*2)-3 = 19

//---------------------10-------------
function makeMultiplier(factor) {
  return function(n) {
    return n * factor;
  };
}
var double = makeMultiplier(2);
var triple = makeMultiplier(3);
console.log(double(7)); // 14
console.log(triple(7)); // 21

//---------------------11-------------
function once(fn) {
  var called = false, result;
  return function() {
    if (!called) {
      called = true;
      result = fn();
    }
    return result;
  };
}
var testFn = once(function(){ console.log("Running"); return "Done"; });
console.log(testFn());
console.log(testFn());

//---------------------12-------------
function onceMemo(fn) {
  var called = false, result;
  return function() {
    if (!called) {
      called = true;
      result = fn();
    }
    return result;
  };
}
var testFn2 = onceMemo(function(){ console.log("Exec only once"); return "Memo"; });
console.log(testFn2());
console.log(testFn2());

//---------------------13-------------
function makeCounter(start) {
  var n = start;
  return {
    inc: function(){ n++; },
    dec: function(){ n--; },
    value: function(){ return n; }
  };
}
var c1 = makeCounter(5);
var c2 = makeCounter(10);
c1.inc(); console.log(c1.value()); // 6
c2.dec(); console.log(c2.value()); // 9

//---------------------14-------------
function makeAdder(start) {
  var total = start;
  return function(x){ total += x; return total; };
}
var adder1 = makeAdder(0);
console.log(adder1(5)); // 5
console.log(adder1(2)); // 7
var adder2 = makeAdder(10);
console.log(adder2(1)); // 11

//---------------------15-------------
function memoize1(fn) {
  var cache = {};
  return function(x) {
    if (cache[x] !== undefined) return cache[x];
    cache[x] = fn(x);
    return cache[x];
  };
}
function slowSquare(n) { return n * n; }
var mSquare = memoize1(slowSquare);
console.log(mSquare(9));
console.log(mSquare(9)); 

//---------------------16-------------
function memoizeN(fn) {
  var cache = {};
  return function() {
    var key = Array.prototype.join.call(arguments, '|');
    if (cache[key] !== undefined) return cache[key];
    cache[key] = fn.apply(null, arguments);
    return cache[key];
  };
}
function add3(a,b,c){ return a+b+c; }
var mAdd3 = memoizeN(add3);
console.log(mAdd3(1,2,3));
console.log(mAdd3(1,2,3));

//---------------------17-------------
var user = {
  name: "John",
  sayHi: function(){ console.log("Hi " + this.name); }
};
user.sayHi();
var f = user.sayHi;
f(); 

//---------------------18-------------
user.sayHi.call({ name: 'Sara' }); 
user.sayHi.apply({ name: 'Sara' });

//---------------------19-------------
var greeter = {
  greet: function(greeting, sign) {
    console.log(greeting + " " + this.name + sign);
  }
};
greeter.greet.apply({ name: 'Ali' }, ['Hello', '!']);

//---------------------20-------------
var greetLara = greeter.greet.bind({ name: 'Lara' });
greetLara('Hi', '!');
greetLara('Hello', '!!');

//---------------------21-------------
function sayHello(obj) {
  return greeter.greet.bind(obj, 'Hello');
}
var bound = sayHello({ name: 'Omar' });
bound('!');
bound('!!');

//---------------------22-------------
function demoArgs() {
  var args = Array.prototype.slice.call(arguments);
  console.log("Reversed copy:", args.slice().reverse());
  console.log("Original:", args);
}
demoArgs(1,2,3,4);

//---------------------23-------------
var arr = [5,2,11,7];
console.log(Math.max.apply(null, arr)); // 11
var max = arr[0];
for (var i=1;i<arr.length;i++) if(arr[i]>max) max=arr[i];
console.log(max);

//---------------------24-------------
console.log(Math.max.call(null, 1,2,3)); 
console.log(Math.max.apply(null, [1,2,3]));

//---------------------25-------------
var name = "Ali", age = 20;
console.log(`User: ${name} Age: ${age+1}`);

//---------------------26-------------
var title = "Hello", body = "This is body";
console.log(`Title: ${title}
Body: ${body}`);
console.log("Title: " + title + "\nBody: " + body);

//---------------------27-------------
if(true){
  var i = 1;
  let j = 2;
  console.log(i, j); // 1 2
}
console.log(i); // 1

//---------------------28-------------
// console.log(x); // ReferenceError (TDZ)
let x = 5;

//---------------------29-------------
const nums = [1,2];
nums.push(3);
console.log(nums);

//---------------------30-------------
function square(n){ return n*n; }
const sq1 = (n) => { return n*n; };
const sq2 = n => n*n;
console.log([1,2,3].map(n => n*n));

//---------------------31-------------
var timer = {
  count:0,
  startClassic: function(){
    var self = this;
    this.id = setInterval(function(){
      self.count++;
      console.log("classic:", self.count);
      if(self.count>3) clearInterval(self.id);
    }, 500);
  },
  startArrow: function(){
    this.count=0;
    this.id = setInterval(()=>{
      this.count++;
      console.log("arrow:", this.count);
      if(this.count>3) clearInterval(this.id);
    }, 500);
  }
};
timer.startClassic();
setTimeout(function(){ timer.startArrow(); }, 3000);

//---------------------32-------------
const objArrow = () => ({ v:10 });
console.log(objArrow());

//---------------------33-------------
// Bad choice: method needing dynamic this
var badObj = {
  val: 5,
  getVal: () => this.val
};
console.log(badObj.getVal()); 

//---------------------34-------------
const greet = (name) => 'Hi ' + name + '!';
console.log(greet("Ali"));

//---------------------35-------------
const add2 = n => n+2;
const times3 = n => n*3;
const minus1 = n => n-1;
function runPipeline(n, fns){
  for(var i=0;i<fns.length;i++) n = fns[i](n);
  return n;
}
console.log(runPipeline(5,[add2,times3,minus1]));

//---------------------36-------------
var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
var inc = obj.inc;
console.log(obj.inc()); 
console.log(inc()); 

//---------------------37-------------
var counters = [];
for (var i=0; i<1000; i++) {
  counters.push(makeCounter(i));
}


//---------------------38-------------
function safeFirst() {
  if(arguments.length===0) return undefined;
  return arguments[0];
}
console.log(safeFirst());
console.log(safeFirst(1,2,3));

//---------------------39-------------
function factory(names) {
  var obj = {};
  for(var i=0;i<names.length;i++) {
    (function(name){
      var count = 0;
      obj[name] = function(){ count++; return count; };
    })(names[i]);
  }
  return obj;
}
var counters = factory(['a','b']);
console.log(counters.a());
console.log(counters.b());

//---------------------40-------------

// 1. Function expressions vs declarations behavior with hoisting .
// 2. Understanding arguments object mutations vs parameter values was new.
