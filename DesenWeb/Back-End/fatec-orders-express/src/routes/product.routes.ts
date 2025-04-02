import express from 'express';
import { Request, Response } from "express";
import { IProduct, IProductListFilters } from '../../IProducts';

const router = express.Router();

const products =  [
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



router.get('/',(req : Request, res : Response) =>{
    const productFilters = req.query as unknown as IProductListFilters;
    const {name:nameFilter, brand:brandFilter, supplier:supplierFilter, stockId:stockIdFilter} = productFilters;

    const foundProducts = products.filter(({name, brand, supplier, stockId}) =>{
        let found = true;
        if(!(nameFilter || brandFilter || supplierFilter || stockIdFilter))
            return true;
        if(nameFilter &&
             !(name.toUpperCase().includes(nameFilter?.toUpperCase())))
            found = false;
        if(brandFilter &&
             !(brand.toUpperCase().includes(brandFilter?.toUpperCase())))
            found = false;
        if(supplierFilter &&
             !(supplier.toUpperCase().includes(supplierFilter?.toUpperCase())))
            found = false;
        if(stockId !== stockIdFilter)
            found = false;

        return found;

    })

    res.status(200).json(foundProducts);

})
// Define um método get que responde ao path /:id
router.get('/:id', (req : Request, res : Response) =>{
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
router.post("/", (req : Request, res : Response)=>{
    const product = req.body;
    products.push(product);
    res.status(201).send();
});
//atualização Produto
router.put('/:id',(req : Request, res:Response) =>{
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
router.delete('/:id',(req : Request, res : Response) =>{
    const product = products.find((product) =>{
        return product.id === Number(req.params.id);
    })
    if(!product){
        res.status(404).send();
        return;
    }
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.status(200).send();
})
export default router;