let adicionais = 0;
let entrega = 0;

function totalPagar(){
    let total = 0;
    calcularAdicionais();
    total = adicionais + entrega;
}
function calcularAdicionais(){
    let selecionados;
    selecionados = document.querySelectorAll("input[name='adicionais']");
    let qtd = selecionados.length;
    for(var i=0; i<qtd; i++){
        if(selecionados[i].checked){
            adicionais += Number(selecionados[i].value);
        }
    }
    alert(adicionais);
}
function calcularEntrega(){

}