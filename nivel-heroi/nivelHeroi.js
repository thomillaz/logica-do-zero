var screenDiv = document.getElementById('screenE');
var inserir = 0;
var nivel = 0;

while(inserir != 'n'){
    var nome = prompt("Nome do Herói: ");
    var xp = prompt("XP do Herói: ");

    if(xp <= 1000){
        nivel = 'Ferro';
    }else if(xp <= 2000){
        nivel = 'Bronze';
    }else if(xp <= 5000){
        nivel = 'Prata';
    }else if(xp <= 7000){
        nivel = 'Ouro';
    }else if(xp <= 8000){
        nivel = 'Platina';
    }else if(xp <= 9000){
        nivel = 'Ascendente';
    }else if(xp <= 10000){
        nivel = 'Imortal';
    }else{
        nivel = 'Radiante';
    }

    screenDiv.innerHTML += `<p>O Herói de nome ${nome} está no nível ${nivel}.</p>`;

    inserir = prompt("Deseja inserir novo herói? (s/n)");
}