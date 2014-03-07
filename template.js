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
