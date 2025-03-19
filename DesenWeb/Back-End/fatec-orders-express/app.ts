import { Request, Response } from "express";

// Importação da biblioteca express
const express = require('express');
// Criação da aplicação
const app = express();

//Configura a aplicação para receber json no body das requisições
app.use(express.json());

const products=  [
    {
        id:1,
        name:"Feijão Carioca",
        brand:"Broto Legal",
        barCode:"1234567891234567891234",
        supplier:'Rede de Distribuição Ltda',
        stockId:98,
        price: 10.90,
        weight: 1,
        meassureUnit:'Kg'
    },
    {
        id:2,
        name:"Arroz",
        brand:"Tio João",
        barCode:"9876543219876543209876",
        supplier:'Rede de Distribuição Ltda',
        stockId:99,
        price: 15.90,
        weight: 5,
        meassureUnit:'Kg'
    }

]
// Define um método get que responde ao path /products/:id
app.get('/products/:id', (req : Request, res : Response) =>{
    const product = products.find((product) =>{
        return product.id === Number(req.params.id);
    })
    if(!product){
        res.status(404).send();
        return;
    }
    res.status(200).json(product)
})
// Define um método get que responde ao path /products/
app.get('/products',(req : Request, res : Response) =>{
    //res.status --> Código de Resposta HTTP 
    res.status(200).json(products);
})
app.post("/products", (req : Request, res : Response)=>{
    const product = req.body;
    products.push(product);
    res.status(201).send();
});
app.delete('/products/:id',(req : Request, res : Response) =>{
    const product = products.find((product) =>{
        return product.id === Number(req.params.id);
    })
    if(!product){
        res.status(404).send();
        return;
    }
    const index = products.indexOf(product);
    products.splice(index);
    res.status(200).send();
})
// Define um método post que responde ao path /
app.post("/", (req : Request, res : Response)=>{
    res.send("Hello Word Again!");
});

// Inicia a aplicação na porta 3000 
app.listen(3000, () => {
    console.log("Servidor esta executando na porta 3000");
});
