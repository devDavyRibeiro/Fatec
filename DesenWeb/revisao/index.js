//let //Varia dentro do escopo (escopo)
//const //Não varia
//var //Varia no geral (global)
 
// function nome_da_funcao(parametro1, parametro2){
// }
 
// nome_da_funcao(1,2);
 
// const nome_da_funcao = (parametro1, parametro2) => {
 
// }
 
const departamento = {
    id: 1,
    name: "Vendas"
};
 
const pessoa_a = {
    id:1, //number
    nome:'Matheus', //string
    idade:18,
    salario:1200,
    departamento: departamento
    //Date
};
 
const pessoa_b = {
    id:2, //number
    nome:'Pedro', //string
    idade:19,
    salario:1800,
    departamento: departamento
};
 
console.log("A pessoa " + pessoa_a.nome + " tem " + pessoa_a.idade + " anos");

const pPerson = [pessoa_a, pessoa_b];
//console.log(pessoas);

const pPeople = ['José','Maria','Bella','Mafe','Guilherme','Larissa'];

//Date

// const printPerson = (pPerson) => console.log(pPerson);
const printPerson = ({name,idade,departamento}) => {
    //destruturação de objeto
    //forma
    // const{name, idade, departamento} = pPerson;

    console.log(`Nome: ${name}, Idade: ${idade}, Departamento:
        ${departamento.name}`);
        
   // console.log(`Nome: ${pPerson.name}, Idade: ${pPerson.idade}, Departamento: ${pPerson.departamento.name}`);
}


// const printPeople = (pPeople = []) =>{

//     pPeople.forEach((p) =>{
//         printPerson(p);
//     });
//     // for(i in pPeople){
//     //     printPerson(pPeople[i]);
//     // }
// }

function callPrintPerson(p){
    printPerson(p);
}
const printPeople = (pPeople = []) =>{
    pPeople.forEach(callPrintPerson);
}

const FindOlder = (pPeople=[], age=0) => pPeople.filter((p) => p.age > age);
const FindById = (pPeople=[], id=0) => pPeople.find((p) => p.id === id);

// result = FindOlder(pessoa_a,17);
//let result = FindById(pPeople,2);

const getSalario = (pPeople=[]) => {
    return pPeople.map((p) =>{
        return (p.salario);
    })
}
result = getSalario(pPerson);
console.log(result);

const reajusteSalario = (pPeople=[],fator=1) => {
    return pPeople.map((p)=>{
        return{
            // id,
            // nome,
            // ano,
            salario: p.salario * fator,
            ...p,
        };
    })
}
console.log(reajusteSalario(pPerson,4))