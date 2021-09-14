var stringName = 'Hello World!';
console.log(stringName[0]);
stringName[0]='Y'
console.log(stringName[0]);

var matrix = [[1,2,3], [4,5,6],[7,8,9]]

var arr = ['A', 'B', 'C']
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (letter of arr){
  console.log(letter);
}

function addAwesome(name){
  console.log(name+' is awesome!');
}
var topics = ['python', 'django', 'science']
topics.forEach(addAwesome)
