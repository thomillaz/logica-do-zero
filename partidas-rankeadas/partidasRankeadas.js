const nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário'];
let nivelHeroi;
let saldo = calcularSaldo(50, 20);

function calcularSaldo(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

if(saldo <= 10){
    nivelHeroi = nivel[0];
}else if(saldo <= 20){
    nivelHeroi = nivel[1];
}else if(saldo <= 50){
    nivelHeroi = nivel[2];
}else if(saldo <= 80){
    nivelHeroi = nivel[3];
}else if(saldo <= 90){
    nivelHeroi = nivel[4];
}else if(saldo <= 100){
    nivelHeroi = nivel[5];
}else{
    nivelHeroi = nivel[6];
}

console.log(`O Herói tem saldo de vitórias de ${saldo} e está no nível ${nivelHeroi}`);
