var x =["English","Tamil","Telugu","Malayalam"]
var y =["India","England","America","Germany"]
console.log(x.toString());
console.log(x.join('-'));
console.log(x.length);
console.log(x.indexOf('English'));
x.push('Sanskrit')
console.log(x);
x.pop();
console.log(x);
x.shift();
console.log(x);
x.unshift('Chinese');
console.log(x);
x[x.length]='Hindi'
console.log(x);
x.splice(0,1,'Kannadam');
console.log(x);
console.log(x.slice(3));
console.log(x.sort());
console.log(x.reverse());
var z = x.concat(y);
console.log(z);

