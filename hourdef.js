const date = new Date();

const ano = date.getFullYear();
const mes = date.getMonth() + 1;
const diames = date.getDate();
const dia = date.getDay();
const hora = date.getHours();
const min = date.getMinutes().toString().padStart(2, '0');
const sec = date.getSeconds().toString().padStart(2, '0');

let horamin = `${hora}${min}`;
let horaminformat = `${hora}:${min}`;

const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
let diaextenso = null;

if (dia >= 0 && dia <= 6) {
    diaextenso = diasDaSemana[dia];
} else {
    diaextenso = 'Dia da semana inválido.';
}

let saud;

if (hora >= 6 && hora < 12) {
    saud = 'Bom Dia';
} else if (hora >= 12 && hora < 18) {
    saud = 'Boa Tarde';
} else {
    saud = 'Boa Noite';
}

export {
    ano,
    mes,
    diames,
    diaextenso,
    horamin,
    horaminformat,
    hora,
    min,
    sec,
    saud
};
