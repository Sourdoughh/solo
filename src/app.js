$(document).ready(function(){

  var accessImages = function(data){
    for(var i = 0; i < 14; i++){
      $('.images').append("<li><img src=" + data.data[i].images.standard_resolution.url + "></li>");
    }
    console.log('hey')
  }

  // display images only up to 14 spaces

  // laythem out in an order in the correct orientation

  // allow the user to change the image location

  // get images from instagram user
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "https://api.instagram.com/v1/users/31026727/media/recent/?access_token=" + token,
    success: accessImages
  });

});