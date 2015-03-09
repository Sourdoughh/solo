$(document).ready(function(){



  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "https://api.instagram.com/v1/users/31026727/media/recent/?access_token=" + token,
    success: function(data) {
      console.log(data)
      }
  });

});