let lampada = document.getElementById('lampada');

function ligar(){
    lampada.hidden = false;
    lampada.setAttribute("src","imgs/luzLigada.gif");
}

function desligar(){
   lampada.setAttribute("src","imgs/luzDesligada.gif");
}

function sumir(){
    lampada.hidden = true;
}

function aparecer(){
    lampada.hidden = false;
}

function piscar(){
    if(lampada.getAttribute('src') === "imgs/luzLigada.gif"){
        desligar();
    }
    else{
        ligar();
    }
}

function magica(){
    setInterval(piscar,500);
}
