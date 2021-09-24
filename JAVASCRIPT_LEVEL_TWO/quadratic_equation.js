var a = prompt("Введите значение А")
var b = prompt("Введите значение B")
var c = prompt("Введите значение C")

function square(a,b,c){

  if(parseInt(a)==NaN || parseInt(b)==NaN || parseInt(c)==NaN){
  // console.log(typeof(a));
  // console.log(typeof(b));
  // console.log(typeof(c));
  console.log('Введите число');
  }

a = Number(a)
b = Number(b)
c = Number(c)


d = b*b - (4*a*c)

if((d < 0) || (a == 0)){
  alert('Вещественных корней нет')
}else
{
x1 = ((Math.sqrt(d))-b)/(2*a)
x2 = (-1*((Math.sqrt(d)))-b)/(2*a)
  alert("X1 = "+x1+'\n'+"X2 = "+x2)
}
}
square(a,b,c);
