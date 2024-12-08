const http = require("http");
const port = 4000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/plain",
//   });
//   res.end("HELLO, NODE SERVER...!");
// });

const server = http.createServer((req, res) => {
  // writeHead는 한 번만 호출돼야 하며,
  // end()가 호출되면 상태 코드와 응답 헤더를 client에 보냄.
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  // 데이터가 load 됐음을 server에 알림
  res.end(
    JSON.stringify({
      a: "a",
      b: "b",
    })
  );
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
