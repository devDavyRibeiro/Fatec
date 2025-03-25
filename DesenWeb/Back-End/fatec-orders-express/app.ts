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
const clients = [
    {
        id:1,
        name: "João Silva",
        document: '47251787806',
        zipCode: '18050600',
        phone: '15991984343',
        email: 'joão@gmail.com'
    },
    
    {
        id:2,
        name: "Maria Silva",
        document: '47251785402',
        zipCode: '18050600',
        phone: '15991983434',
        email: '@gmail.com'
    }
]

// Define um método post que responde ao path /
app.get("/", (req : Request, res : Response)=>{
    res.send("Hello Word Again!");
});
// Define um método get que responde ao path /products/
app.get('/products',(req : Request, res : Response) =>{
    //res.status --> Código de Resposta HTTP 
    res.status(200).json(products);
})
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
//cadastro
app.post("/products", (req : Request, res : Response)=>{
    const product = req.body;
    products.push(product);
    res.status(201).send();
});
//atualização Produto
app.put('/products/:id',(req : Request, res:Response) =>{
    const productUpdate = req.body;

    const product = products.find((product) =>{
        return product.id === Number(req.params.id);
    })
    if(!product){
        res.status(404).send();
        return;
    }

    products.splice(products.indexOf(product), 1, productUpdate);
    res.status(200).json(productUpdate);
})
//Exclusão Produto
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

//CLIENT

app.get('/clients',(req : Request, res : Response) =>{
    //res.status --> Código de Resposta HTTP 
    res.status(200).json(clients);
})
// Define um método get que responde ao path /products/:id
app.get('/clients/:id', (req : Request, res : Response) =>{
    const client = clients.find((client) =>{
        return client.id === Number(req.params.id);
    })
    if(!client){
        res.status(404).send();
        return;
    }
    res.status(200).json(client)
})
//cadastro
app.post("/clients", (req : Request, res : Response)=>{
    const client = req.body;
    clients.push(client);
    res.status(201).json(client);
});
//atualização Produto
app.put('/clients/:id',(req : Request, res:Response) =>{
    const clientUpdate = req.body;

    const client = clients.find((client) =>{
        return client.id === Number(req.params.id);
    })
    if(!client){
        res.status(404).send();
        return;
    }

    clients.splice(clients.indexOf(client), 1, clientUpdate);
    res.status(200).json(clientUpdate);
})
//Exclusão Produto
app.delete('/clients/:id',(req : Request, res : Response) =>{
    const client = clients.find((client) =>{
        return client.id === Number(req.params.id);
    })
    if(!client){
        res.status(404).send();
        return;
    }
    const index = clients.indexOf(client);
    clients.splice(index);
    res.status(200).send();
})

// Inicia a aplicação na porta 3000 
app.listen(3000, () => {
    console.log("Servidor esta executando na porta 3000");
});
