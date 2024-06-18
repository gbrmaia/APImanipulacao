import {
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
} from './hourdef.js';

export function isNumber(variable) {
    return !isNaN(parseFloat(variable)) && isFinite(variable);
}

export function removerMascara(variable) {
    if (variable != null) {
        variable = variable.replace(/[-.]/g, "");
    }
    return { variable };
}

export function adicionarMascaraCpfCnpj(variable) {
    if (isNumber(variable)) {
        if (variable.length === 11) {
            variable = variable.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } else if (variable.length === 14) {
            variable = variable.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }
    } else {
        variable = "Insira apenas números, por favor.";
    }
    return { variable };
}

export function letraMaiuscula(variable) {
    if (variable != null) {
        variable = variable.toUpperCase();
    }
    return { variable };
}

export function letraMinuscula(variable) {
    if (variable != null) {
        variable = variable.toLowerCase();
    }
    return { variable };
}


export function cirrusTimeApi() {
    return {
        diames: diames,
        mes: mes,
        ano: ano,
        diasemana: diaextenso,
        horamin: horamin,
        horaminformat: horaminformat,
        hora: hora,
        min: min,
        sec: sec,
        saudacao: saud
    };
}
