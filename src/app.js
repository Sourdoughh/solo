$(document).ready(function(){

  ////////////////////
  // Image populate //
  ////////////////////

  var accessImages = function(data){
    var total = 8;
    var max = 16;

    //need to flip 3 4 5 6 - 11 12 13 14

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
        max++;
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
    url: "https://api.instagram.com/v1/users/self/feed/?access_token=" + token,
    success: accessImages
  });

});

//..users/31026727/media/recent/

  // laythem out in an order in the correct orientation

  // allow the user to change the image location

  // get images from instagram user