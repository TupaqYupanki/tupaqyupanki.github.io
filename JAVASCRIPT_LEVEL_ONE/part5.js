//  var hot = false
//  var temp = 60
// if (temp>80) {
//   console.log("Temp is greater than 80");
// }else {
//   console.log("Temp is less than 80");
// }


temp = prompt("Set the temperature")

if (temp>80){
  alert("temp = "+temp+"\nHot!")
}else if(temp <= 80 && temp >= 50){
  alert("temp = "+temp+"\nAverage")
}else if (temp < 50 && temp >= 32){
  alert("temp = "+temp+"\nCold")
}else {
  alert("temp ="+temp+"\nVery cold")
}
