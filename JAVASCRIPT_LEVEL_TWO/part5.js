var carInfo = {make:'Toyota', year:1990, model:'Camry', carAlert: function(){alert("We've got a car here!")}}
var myNewO = {a:'hello', b:[1,2,3], c:{inside:['a','b']}};
for (i in carInfo){
  console.log(i);
  console.log(carInfo[i]);
}
var myObj = {
  prop: 37,
  reportProt: function() {
    return this.prop;
  }
}

var simple = {
  prop: "Hello",
  myMethod: function(){
    console.log("The myMethod was called");
  }
}

var myNeyObj = {
  name: "Jose",
  greet: function(){
    console.log("Hello " + this.name);
  }
}
