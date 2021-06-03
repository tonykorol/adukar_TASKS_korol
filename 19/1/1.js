var a = 2;
var b = 3;
console.log(a + " - a", b + " - b")
c = a;
a = b;
b = c;
console.log(a + " - a", b + " - b");

a = 2;
b = 3;
console.log(a + " - a", b + " - b");
b = b + a;
a = b - a;
b = b - a;
console.log(a + " - a", b + " - b");

a = 7;
b = 5;
console.log(a + " - a", b + " - b");
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a + " - a", b + " - b");
