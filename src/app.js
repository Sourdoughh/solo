$(document).ready(function(){

  // What do I want to do?
    // - build a grid layout
    // - be able to position SVGs in a grid

  /////////////////
  // Build Grid! //
  /////////////////

  var grid = d3.select('.imageCollection')
               .append('svg')
               .attr('width', 1748)
               .attr('height', 1240)
               .attr('class', 'images')
               .attr('style', 'outline: 1px solid black');

  grid.append('div')
      .attr('width', 437)
      .attr('height', 620)
      .attr('style', 'outline: 1px solid red')
      .style('fill', 'red');


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
        var img = '<div class"indivImage"><img src=' + data.data[i].images.standard_resolution.url + '></div>'
        // $('.imageCollection').append(img);
        var pic = document.createElementNS('http://www.w3.org/2000/svg','image');
        pic.setAttributeNS(null,'height','437');
        pic.setAttributeNS(null,'width','620');
        pic.setAttributeNS('http://www.w3.org/1999/xlink','href', data.data[i].images.standard_resolution.url);
        pic.setAttributeNS(null,'x','0');
        pic.setAttributeNS(null,'y','0');
        pic.setAttributeNS(null, 'visibility', 'visible');
        $('svg').append(pic);
      };
    }
  };









  //////////////////
  // Fetch Images //
  //////////////////

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "https://api.instagram.com/v1/users/31026727/media/recent/?access_token=" + token,
    success: accessImages
  });

});



  // laythem out in an order in the correct orientation

  // allow the user to change the image location

  // get images from instagram user