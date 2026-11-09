// SIT725 1.1P: a small web server using Node.js built-in modules
const http = require("http");

const port = process.env.PORT || 3001;

function sendResponse(response, statusCode, contentType, body) {
  response.writeHead(statusCode, { "Content-Type": contentType });
  response.end(body);
}

function handleRequest(request, response) {
  if (request.url === "/") {
    const page = "<h1>Hello from SIT725!</h1><p>Sahil Navin - 223288163</p>";
    sendResponse(response, 200, "text/html", page);
    return;
  }

  if (request.url === "/api/add") {
    const result = { a: 5, b: 3, result: 5 + 3 };
    sendResponse(response, 200, "application/json", JSON.stringify(result));
    return;
  }

  sendResponse(response, 404, "text/plain", "404 Not Found");
}

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
