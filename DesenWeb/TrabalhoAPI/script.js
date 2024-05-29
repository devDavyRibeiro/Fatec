
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
        document.getElementById('rua').value += `${dados.logradouro} ${dados.bairro} ${dados.localidade} ${dados.uf}`;
        cidade.value = `${dados.localidade}`;
    }
});
document.getElementById('btnClima').addEventListener('click',async function pesquisarClima(){
    if(cidade.value != ""){
        dado = document.getElementById('dados');
        const apiClima = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.value}&units=metric&appid=1a544251aba1ef4ee1d7308fe0825f8c`;
        const respApi = await fetch(apiClima);
        const dados = await respApi.json();

        dado.innerText = `Temperatura: ${dados.main.temp} °C Humidade: ${dados.main.humidity} % Vento: ${dados.wind.speed} km/h Tempo: ${dados.weather[0].main}`;
        pais = dados.sys.country;
        document.getElementById('lbCidade').innerText += " " + cidade.value;
        pesquisarBandeira();
    }
    else{
        alert("Campo cidade vazia");
    }
});

async function pesquisarBandeira(){
    document.getElementById('bandeira').setAttribute('src', `https://flagsapi.com/${pais}/flat/32.png`);
}