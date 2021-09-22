var element = document.getElementsByClassName('code1')[0]
var cipher = '0123456789'
var newelement = ''

for (i in element.innerHTML){
  if (i == 0){
    console.log(i);
    for (x in cipher)
      if (element.innerHTML[i] == cipher[x]){
        console.log(element.innerText[i]);
        newelement = '<font color="red">'+element.innerHTML[i]+'</font>'
      } else if (x == cipher.length-1){
        newelement = element.innerHTML[i]
      }

  } else if (i == element.innerHTML.length-1) {
    console.log(i);
    console.log(element.innerHTML.length);
    for (x in cipher)
      if (element.innerHTML[i] == cipher[x]){
        newelement = newelement+'<font color="red">'+element.innerHTML[i]+'</font>'
      } else if (x == cipher.length-1){
        newelement = newelement+element.innerHTML[i]
        element.innerHTML = newelement
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
