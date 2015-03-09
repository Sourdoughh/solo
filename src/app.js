$(document).ready(function(){

  // What do I want to do?
    // - build a grid layout
    // - be able to position SVGs in a grid

  /////////////////
  // Build Grid! //
  /////////////////

  var grid = d3.select('.imageCollection').append('svg')
                  .attr('width', 1240)
                  .attr('height', 1748)
                  .attr('class', 'images')
                  .attr('style', 'outline: thin solid black');

  ////////////////////
  // Image populate //
  ////////////////////

  var accessImages = function(data){
    var total = 14;
    for(var i = 0; i < total; i++){

      if(data.data[i].type === 'video'){
        total++;
      };

      if(data.data[i].type !== 'video'){
        var img = '<li><img src=' + data.data[i].images.standard_resolution.url + '></li>'
        $('.images').append(img);
      };
    }
  };
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