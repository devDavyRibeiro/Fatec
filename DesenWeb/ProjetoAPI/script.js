let cep = document.querySelector("input[name='cep']");
let api = "https://viacep.com.br/ws/";
let botao = document.getElementById('buscar');
imagem = document.getElementById('imagem');
botao.addEventListener("click",async function buscarCep(){
    api = `https://viacep.com.br/ws/${cep.value}/json/`;
    let dados = await fetch(api);
    let dadosFormatados = await dados.json();
    local = dadosFormatados.localidade;
    imagem.setAttribute("src",`https://source.unsplash.com/1600x900/?${local}`);

}); //botao.addEventListener("click", buscarCep());

