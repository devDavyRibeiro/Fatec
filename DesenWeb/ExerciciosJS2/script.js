function ex01(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    var resultado = document.getElementById("resultado");
    media = (num1 + num2) / 2;
    resultado.innerText = "O resultado é " + media;
}

function ex02(){
    var x = prompt("Digite o número da base",1);
    var y = prompt("Digite o número do expoente",2);

    var resultado = Math.pow(x,y);
    console.log(resultado);
}

function ex03(){
    var num = [20,30,40];
    let menor = Math.min(num[0],num[1],num[2]);
    alert(`O mneor número é ${menor}`);
}

function ex04(){
    var x = [15,25];
    var y = [12,15,23,43];

    for(i=0;i<x.length;i++){
        multi = 5 * x[i];
        console.log(`${x[i]} * 5 = ${multi}`);
    }
}

function ex05(){
    var mediaPonderada = document.getElementById("mediaPonderada");
    var nota1 = prompt("Digite um valor para nota 1",1);
    var nota2 = prompt("Digite um valor para nota 2",2);
    var peso1 = 0.3;
    var peso2 = 0.7;

    media = (nota1 * peso1 + nota2 * peso2)/peso1 + peso2;

    mediaPonderada.innerText = "A média ponderada das duas notas é " + media;
}

function ex06(){
    var pHora = prompt("Qual é o valor pago por hora?",0);
    var reifeicao = prompt("Quantas refeições o funcionário comeu",0);
    var horas = 62;
    reifeicao *= 1.5;
    primeirasHoras = 40 * pHora;
    segundasHoras = (horas - 62) *3*pHora;

    salarioBruto = primeirasHoras + segundasHoras;
    desconto = reifeicao;
    salarioLiquido = salarioBruto - reifeicao;
    
    alert(`O salário bruto será de R$${salarioBruto}, sendo descontado R$${desconto}, ficando assim com o salário líquido de R$${salarioLiquido}`);

}
function ex07(){
    var num = Math.floor(Math.random()*100);
    var par
    if(num % 2 == 0){
        par = "Número " + num + " é um número par";
    }
    else{
        par = "Número " + num + " é um número impar";
    }
    console.log(par);
}
function ex08(){
   let valor = Number(document.getElementById("valorProduto").value);
   let qtd = Number(document.getElementById("qtd").value);
   let formapag = document.querySelectorAll("input[name='formapag']");
   var escolhido = "";
   let p = document.getElementById('res');
   var desconto = 0;
   var aPagar = valor * qtd;

    if(aPagar >= 1000){
        desconto += aPagar * 0.1 ;
    }

    for (i=0; i< formapag.length; i++)
    {
        if(formapag[i].checked){
            if(formapag[i].value == "Pix"){
                desconto += aPagar * 0.1;
                escolhido = formapag[i].value;
            }
            else if(formapag[i].value == "Débito"){
                desconto += aPagar * 0.05;
                escolhido = formapag[i].value;
            }
            else{
                escolhido = formapag[i].value;
            }
        }
    }

    console.log(formapag.value);
    aPagar -= desconto;

    p.innerText = `Total a pagar: R$${aPagar}. Desconto: R$${desconto}. Forma de Pagamento escolhido: ${escolhido}`;
    
}