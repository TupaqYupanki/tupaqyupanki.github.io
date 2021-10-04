var xxx = 0;
var element = document.getElementsByClassName('code1')[0]
var text = element.innerHTML
var red = ''
function changeColor(){
var cipher = '0123456789'
var newelement = ''
if (xxx == 0){
for (i in element.innerHTML){
  if (i == 0){
    for (x in cipher)
      if (element.innerHTML[i] == cipher[x]){
        newelement = '<font color="red">'+element.innerHTML[i]+'</font>'
      } else if (x == cipher.length-1){
        newelement = element.innerHTML[i]
      }
  } else if (i == element.innerHTML.length-1) {
    for (x in cipher)
      if (element.innerHTML[i] == cipher[x]){
        newelement = newelement+'<font color="red">'+element.innerHTML[i]+'</font>'
      } else if (x == cipher.length-1){
        newelement = newelement+element.innerHTML[i]
        red = newelement
        element.innerHTML = red
      }
  }
  else{
    for (x in cipher)
      if (element.innerHTML[i] == cipher[x]){
        newelement = newelement+'<font color="red">'+element.innerHTML[i]+'</font>'
        break
      } else if (x == cipher.length-1){
        newelement = newelement+element.innerHTML[i]
      }
  }
}
}else if (xxx == 1){ element.innerHTML = text}
else if (xxx%2 == 0){ element.innerHTML = red}
else if (xxx%2 == 1){ element.innerHTML = text}
xxx = xxx+1;
console.log(xxx);
}
