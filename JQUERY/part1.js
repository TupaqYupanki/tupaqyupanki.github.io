var x = $('h1')
x.css('color','red')
x.css('background','blue')

var newCSS = {
  'color':'white',
  'background':'green',
  'border':'2px solid red'
}

var y = $('li')
y.css(newCSS)
y.eq(0).css('color','orange')
y.eq(-1).css('background','yellow')
y.eq(-1).css('color', 'black')
