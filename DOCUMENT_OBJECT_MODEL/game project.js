var cell = document.querySelectorAll('td')

function changeMarker(){
  if(this.textContent === ''){
  this.textContent = 'X';
}else if (this.textContent === 'X') {
  this.textContent = 'O';
}else {
  this.textContent = '';
}
}

i = 0
while (i < 9){
cell[i].addEventListener('click', changeMarker)
i = i+1;
}


function clear(){
  for (var i = 0; i < cell.length; i++) {
    cell[i].textContent = ''
  }
}
btn = document.querySelector('button')
btn.addEventListener('click', clear)
