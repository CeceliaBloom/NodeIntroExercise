const http = require("http");

const server = http.createServer((request,response)=>{
  response.end("response sent =)");
})

server.listen(5500,()=>{
  console.log("server is now listening on port 5500...");
});