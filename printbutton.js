$(document).ready(function(){
  $('.printButton').on('click', function(){
    console.log('poop');
    $('.imageCollection').printElement();
  })

  $('.printButton2').on('click', function(){
    console.log('poop');
    $('.imageCollection2').printElement();
  })
})