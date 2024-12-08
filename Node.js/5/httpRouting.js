const http = require("http");
const port = 4000;
const dataObject = { a: "a", b: "b" };

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/home") {
    req.on("data", (data) => {
      console.log("data", data);

      const stringfiedData = data.toString();
      console.log("stringfiedData", stringfiedData);

      Object.assign(dataObject, JSON.parse(stringfiedData));
    });
    res.end("POSTING IS SUCCESSFUL...!");
  } else {
    if (req.url === "/home") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      // =>
      // res.writeHead(200, {
      //   "Content-Type" : "application/json"
      // });

      res.end(JSON.stringify(dataObject));
    } else if (req.url === "/about") {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.write("<html>");
      res.write("<body>");
      res.write("<h1>About Page</h1>");
      res.write("</body>");
      res.write("</html>");

      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
