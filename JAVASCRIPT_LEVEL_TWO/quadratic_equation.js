var x = prompt("Введите значение А")
var y = prompt("Введите значение B")
var z = prompt("Введите значение C")

function square(x,y,z){
  a = Number(x)
  b = Number(y)
  c = Number(z)

if(isNaN(a) || isNaN(b) || isNaN(c)){
  console.log('Введите число');
}
if(x=='' || y=='' || z==''){
  console.log('Вы ввели пустое значение');
}else{
d = b*b - (4*a*c)
console.log(d);
if((d < 0) || (a == 0)){
  alert('Вещественных корней нет')
}else
{
x1 = ((Math.sqrt(d))-b)/(2*a)
x2 = (-1*((Math.sqrt(d)))-b)/(2*a)
  alert("X1 = "+x1+'\n'+"X2 = "+x2)
}
}
}
square(x,y,z);
