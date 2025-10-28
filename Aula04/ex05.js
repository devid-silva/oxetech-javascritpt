function executaComAtraso( mensagem, callback){
    setTimeout(() => {
        alert(mensagem);
        callback();
    }, 2000); 
}


function saudacao(){
    alert("obrigado por esperar");
}

executaComAtraso("essa mensagem demorou 2 segundos para ser exibida", saudacao);


