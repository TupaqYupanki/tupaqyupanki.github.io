$('h1').click(function(){
  console.log('Ther was a click on H1!');
})

$('li').click(function(){
  console.log('any li was clicked!');
})

$('h2').click(function(){
  $(this).text("I was changed")
})

$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue')
})

$('input').eq(0).keypress(function(event){
  console.log(event);
})

$('input').eq(0).keypress(function(event){
  if (event.which === 13) {
    $('h3').toggleClass('turnRed')
  }
})

$('h1').on('dblclick',function(){
  $(this).toggleClass('turnBlue');
})

$('li').on('mouseenter',function(){
  $(this).toggleClass('turnRed');
})

$('input').eq(1).on('click',function(){
  $('.container').fadeOut(3000)
})
