let adicionais=0;
let entrega = 0;
let combos = 0;
function totalPagar(){
    let total = 0;
    let inputTotal = document.getElementById("total");
    let nomeCliente = document.getElementById("nome");
    let telefoneCliente = document.getElementById("telefone");
    let descricao = document.getElementById("descricao");

    calcularAdicionais()
    calcularEntrega();
    calcularCombos();
    total= adicionais + entrega + combos;
    inputTotal.value = `O total a pagar é R$${total}`;
    descricao.innerHTML = `Valores: <br>Adicionais: R$ ${adicionais} <br>Combo: R$ ${combos} <br>Entrega: R$ ${entrega}`; 

}

function calcularAdicionais(){
    adicionais =0;
    let selecionados;
    selecionados=document.querySelectorAll("input[name='adicionais']");
    let qtd = selecionados.length;
    for (i=0; i< qtd; i++)
    {
        if (selecionados[i].checked)
        {
            adicionais += Number(selecionados[i].value);
            //adicionais = adicionais + Number([selecionados])
        }
    }

}
function calcularCombos(){
    combos = 0;
    combos = Number(document.getElementById("combos").value);
}
function calcularEntrega(){
    entrega = 0;
    var selecionados = document.querySelectorAll("input[name='escolha_entrega']");
    let quantidade = selecionados.length;

    for(i=0; i<quantidade;i++){
        if(selecionados[i].checked){
            entrega = Number(selecionados[i].value);
            break;
        }
    }
}
function imprimir(){
    print();
}
function relogio(){
    let horario = new Date();
    let mensagem = horario.getHours() + ":" + horario.getMinutes() + ":" + horario.getSeconds();
    document.getElementById('relogio').innerHTML = mensagem;
} 
setInterval(relogio, 1000)