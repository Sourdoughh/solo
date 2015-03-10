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



///////////////////////
// Node Requirements //
///////////////////////
// var express = require('express');
// var ig = require('instagram-node').instagram();
// var passport = require('passport');
// var http = require('http');

// var app = express();

// // var server = app.listen(3000, function () {
// //   var host = server.address().address
// //   var port = server.address().port
// //   console.log('IT WORKS! Listening at LOCAL', port)
// // })

// var ig = require('instagram-node').instagram();

// // Every call to `ig.use()` overrides the `client_id/client_secret`
// // or `access_token` previously entered if they exist.
// ig.use({ access_token: '31026727.41ec349.3442a8c91db24061a90a1c8a623374c4' });
// ig.use({ client_id: 31026727,
//          client_secret: '5134aef190cb414199eec1cef820b9af' });

// var redirect_uri = 'http://localhost';

// exports.authorize_user = function(req, res) {
//   res.redirect(ig.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
// };

// exports.handleauth = function(req, res) {
//   ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
//     if (err) {
//       console.log(err.body);
//       res.send("Didn't work");
//     } else {
//       console.log('Yay! Access token is ' + result.access_token);
//       res.send('You made it!!');
//     }
//   });
// };

// // This is where you would initially send users to authorize
// app.get('/authorize_user', exports.authorize_user);
// // This is your redirect URI
// app.get('/handleauth', exports.handleauth);

// http.createServer(app).listen(3000, function(){
//   console.log("Express server listening on port " + 3000);
// });


// ////////////////////
// // Image populate //
// ////////////////////

// var accessImages = function(data){
//   var total = 8;
//   var max = 16;

//   //need to flip 3 4 5 6 - 11 12 13 14

//   for(var i = 0; i < total; i++){
//     if(data.data[i].type === 'video'){
//       total++;
//       max++;
//     };
//     if(data.data[i].type !== 'video'){
//       var img = '<img src=' + data.data[i].images.standard_resolution.url + '>';
//       $('.imageCollection').append(img);
//     };
//   }

//   for(var i = total; i < max; i++){
//     if(data.data[i].type === 'video'){
//       max++;
//     };
//      if(data.data[i].type !== 'video'){
//       var img = '<img src=' + data.data[i].images.standard_resolution.url + '>';
//       $('.imageCollection2').append(img);
//     };
//   }
// };