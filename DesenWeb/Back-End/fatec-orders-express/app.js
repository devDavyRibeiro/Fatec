// Importação da biblioteca express
const express = require('express');
// Criação da aplicação
const app = express();

// Define um método get que responde ao path /
app.get("/",(req, res)=> {
    // Responde a requisição com 'Hello World'
    res.send("Hello World!");
});
// Define um método post que responde ao path /
app.post("/", (req,res)=>{
    res.send("Hello Word Again!");
});

// Inicia a aplicação na porta 3000 
app.listen(3000, () => {
    console.log("Servidor esta executando na porta 3000");
});
