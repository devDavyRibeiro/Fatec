
cidade = document.getElementById('cidade');
pais = "";
document.getElementById('btnLogradouro').addEventListener('click', async function PesquisarCep(){
    let cep = document.getElementById('cep').value;
    const Apiviacep = `https://viacep.com.br/ws/${cep}/json`;
    const respApi = await fetch(Apiviacep);
    const dados = await respApi.json();
    if(dados.erro){
        alert("Cep inválido");
    }
    else{
        document.getElementById('rua').value = `${dados.logradouro} ${dados.bairro} ${dados.localidade} ${dados.uf}`;
        cidade.value = `${dados.localidade}`;
    }
});
document.getElementById('btnClima').addEventListener('click',async function pesquisarClima(){
    if(cidade.value != ""){
        dado = document.getElementById('dados');
        const apiClima = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.value}&appid=1a544251aba1ef4ee1d7308fe0825f8c`;
        const respApi = await fetch(apiClima);
        const dados = await respApi.json();

        dado.innerText = `Temperatura: ${dados.main.temp - 273.15} °C Humidade: ${dados.main.humidity} % Vento: ${dados.wind.speed} km/h Tempo: ${dados.weather[0].main}`;
        pais = dados.sys.contry;
        pesquisarBandeira();
    }
    else{
        alert("Campo cidade vazia");
    }
});

async function pesquisarBandeira(){
    
}