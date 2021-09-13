function hello(){
  console.log("hello world!");
}
// function helloYou(name){
//   console.log("hello "+name);
// }
function addNum(num1, num2){
  console.log(num1+num2);
}
function helloYou(name='Frankie'){
  console.log("hello "+name);
}
function formal(name="Sam", title='Sir'){
  return(title+' '+name);
}

function timesFive(numInput) {
  return result = numInput * 5;
}
var x = "global x"
 function fun(x){
   x = "reassigned x"
   console.log('this is reassigned x inside function: '+x);
 }

 console.log('this is global: '+x);
 fun();
 console.log('global x is uncnhanged: '+x);
