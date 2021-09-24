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
x1 = ((Math.sqrt(d))-b)/(2*a)
x2 = (-1*((Math.sqrt(d)))-b)/(2*a)
  alert("X1 = "+x1+'\n'+"X2 = "+x2)
}
}
square(a,b,c);
