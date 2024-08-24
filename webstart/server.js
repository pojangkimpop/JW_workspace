const http = require('http');
const { URL } = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    const host = request.headers.host || 'localhost';
    const urlObject = new URL(request.url || '/', `http://${host}`);
    const pathname = urlObject.pathname;

    route(pathname, handle, response);
  }

  http.createServer(onRequest).listen(8888, () => {
    console.log('Server is listening on port 8888');
  });
}

exports.start = start;
