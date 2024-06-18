const date = new Date();

const ano = date.getFullYear();
console.log('ano:',ano);
const dia = date.getDay();
console.log('dia numerico:',dia);
const mes = date.getMonth() + 1;
console.log('mes:',mes);
const hora = date.getHours();
console.log('hora:',hora);
const min = date.getMinutes();
console.log('min:',min);

console.log(hora,':',min);

const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
let diaextenso = null;

if (dia >= 0 && dia <= 6) {
    diaextenso = diasDaSemana[dia];
} else {
    console.log('Dia inválido');
}

console.log(diaextenso);

let saud; // Use let em vez de const para permitir a reatribuição

if (hora >= 6 && hora < 12) {
    saud = 'bom dia';
} else if (hora >= 12 && hora < 18) {
    saud = 'boa tarde';
} else {
    saud = 'boa noite';
}

console.log(saud);


