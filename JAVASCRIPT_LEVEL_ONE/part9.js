name = prompt("What's your name?")
age = prompt("How old are you?")
tall = prompt("What's your height")
pet = prompt("What's your dog's name?")

var x = null
var y = null
for (var i = 0; i < name.length; i++) {
  if (i==0) {x = name[i];
     // console.log("fname = "+x);
   }
  else if(name[i]===" "){y = name[i+1];
  // console.log('lname = '+y);
}
}

if (x===y && age > 20 && age < 30 && tall >= 170 && pet[pet.length-1] === "y") {
console.log("Gotcha!");
}
