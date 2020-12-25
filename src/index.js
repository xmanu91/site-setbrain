/**
 * Static HTTP Server
 *
 * Create a static file server instance to serve files
 * and folder in the './public' folder
 */

var s = require("node-static"),
  port = 8080,
  http = require("http");

// config
var file = new s.Server("./public", {
  cache: 0,
  gzip: true
});

http
  .createServer(function(request, response) {
    request
      .addListener("end", function() {
        file.serve(request, response);
      })
      .resume();
  })
  .listen(port);
