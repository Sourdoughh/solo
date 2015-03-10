$(document).ready(function(){

  ////////////////////
  // Image populate //
  ////////////////////

  var accessImages = function(data){
    var total = 8;
    var max = 16;

    for(var i = 0; i < total; i++){
      if(data.data[i].type === 'video'){
        total++;
        max++;
      };
      if(data.data[i].type !== 'video'){
        var img = '<img src=' + data.data[i].images.standard_resolution.url + '>';
        $('.imageCollection').append(img);
      };
    }

    for(var i = total; i < max; i++){
      if(data.data[i].type === 'video'){
        total++;
      };
       if(data.data[i].type !== 'video'){
        var img = '<img src=' + data.data[i].images.standard_resolution.url + '>';
        $('.imageCollection2').append(img);
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