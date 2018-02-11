var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
  console.log(request.url);
  if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/cats') {
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/cars/new') {
    fs.readFile('./views/new_car.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents),
      response.end();
    })

  } 
  else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
 else if (request.url ==='/images/DT.jpg') {
    fs.readFile('./images/DT.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } 
  else if (request.url ==='/images/azure.jpg') {
    fs.readFile('./images/azure.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } 
  else if (request.url ==='/images/500.jpg') {
    fs.readFile('./images/500.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } 
  else if (request.url ==='/images/1.jpg') {
    fs.readFile('./images/1.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } 
  else if (request.url ==='/images/2.png') {
    fs.readFile('./images/2.png', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
    })
  } 
  else if (request.url ==='/images/3.jpg') {
    fs.readFile('./images/3.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } 
  else if (request.url ==='/images/5.jpg') {
    fs.readFile('./images/5.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } 
  else if (request.url ==='/images/6.jpg') {
    fs.readFile('./images/6.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } 
  else {
       fs.readFile('./views/index.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
});

// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");