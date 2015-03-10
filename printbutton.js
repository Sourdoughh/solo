$(document).ready(function(){
  $('.printButton').on('click', function(){
    console.log('poop');
    $('.imageCollection').printElement();
  })
})