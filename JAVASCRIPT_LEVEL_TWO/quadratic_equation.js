var a = prompt("Введите значение А")
var b = prompt("Введите значение B")
var c = prompt("Введите значение C")

function square(a,b,c){

a = Number(a)
b = Number(b)
c = Number(c)
d = b*b - (4*a*c)

if(d < 0){
  alert('Вещественных корней нет')
}else{
console.log('d = '+d);
x1 = ((Math.sqrt(d))-b)/(2*a)

console.log(typeof(x1));
x2 = (-1*(Math.sqrt(d))-b)/(2*a)
console.log(x2);

  alert("X1 = "+x1+'\n'+"X2 = "+x2)
}
}
square(a,b,c);
