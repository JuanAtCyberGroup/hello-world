const http = require("http");

const port = process.env.PORT || 3000;
const testVar = process.env.MY_VAR || "No var present!";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(testVar);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});
