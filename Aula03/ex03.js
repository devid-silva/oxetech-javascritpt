let peso = Number(prompt("Digite seu peso:"));
let altura = Number(prompt("Digite sua altura:"));

imc = peso / (altura * altura);
imc = imc.toFixed(2);

if (imc  < 18.5) {
    alert(`voce esta abaixo do peso seu imc é ${imc}`);
    }
    else if (imc>=18.5 && imc <=24.9){
        alert(`voce esta com peso normal seu imc é ${imc}`);
       
    } else if (imc >=25 && imc <=29.9){
        alert(`voce esta com sobrepeso seu imc é ${imc}`);
    }
    else if (imc >=30 && imc <=34.9){
        alert(`voce esta com obesidade grau 1 seu imc é ${imc}`);
    } else if (imc >=35 && imc <=39.9){
        alert(`voce esta com obesidade grau 2 seu imc é ${imc}`);
    } else {
        alert(`voce esta com obesidade grau 3 seu imc é ${imc}`);
    }
