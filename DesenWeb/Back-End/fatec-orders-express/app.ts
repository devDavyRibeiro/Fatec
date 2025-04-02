import { Request, Response } from "express";
import productRoutes from "./src/routes/product.routes";

// Importação da biblioteca express
import express from "express";

// Criação da aplicação
const app = express();


//Configura a aplicação para receber json no body das requisições
app.use(express.json());
app.use("/products", productRoutes);


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

app.get('/clients',(req : Request, res : Response) =>{

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
    clients.splice(index, 1);
    res.status(200).send();
})

// Inicia a aplicação na porta 3000 
app.listen(3000, () => {
    console.log("Servidor esta executando na porta 3000");
});
