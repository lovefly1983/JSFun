//http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#constructor
//http://javascript.crockford.com/

var b = function(a) {
    console.log('test : ' + a);
}

Object.prototype.createChild = function() {
      function F() {}
      F.prototype = this;
      return new F();
    };

var parent = {name : 'abc'};
var child = parent.createChild();
console.log(child.name);



function Test() {
    var bbb = 111;
    this.name = 'abc';
    this.setName = function(_name) {
      this.name = _name;
    }
    this.getName = function() {
      return bbb;
    }
}

function obj(val) {
  this.name = 'abc';
  this.x = val;
}

Test.prototype = new obj(333);

var t = new Test();
console.log(t.x);

Array.prototype.testfun = function(x) {
  console.log('ddddddddddd');
}
Array.prototype.b = 'ddd';
var a = new Array();
a[0] = 3;
a.testfun(3);
console.log(a.b);

Function.prototype.output = function() {
  console.log('output method');
}

function foo() {
  console.log('foo');
}

foo.output();
