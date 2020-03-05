const http = require("http");

const port = process.env.PORT || 3000;
const testVar = process.env.MY_VAR || "No var present!";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  res.end(`<!DOCTYPE html>
  <html>
    <head>
        <style>
          .header {
            font-size: 100px;
            color: #79589F;
            border-style: solid;
            border-radius: 2px;
            margin: 10%;
          }
        </style>
    </head>
    <body>
      <div>
        <H1 class="header"><center>${testVar}</center></H1>
      </div>
    </body>
  </html>`);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
