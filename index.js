const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  //request
  let path = './pages/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact-me':
      path += 'contact-me.html';
      break;
    default:
      path += '404.html';
      break;
  }
  //response
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
