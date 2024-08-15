// Arquivo de criacao do servidor http
import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("API - Desafio")
});

server.listen(PORT, ()=>{
    console.log("servidor online");
});