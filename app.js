import express from 'express';
import { cirrusTimeApi, removerMascara, adicionarMascaraCpfCnpj, letraMaiuscula, letraMinuscula  } from './functions.js';

const app = express();
const port = 4000;

app.get('/limparmascara/:variable', (req, res) => {
    const { variable } = req.params;
    const result = removerMascara(variable);
    res.send(result);
});

app.get('/mascaracpfcnpj/:variable', (req, res) => {
    const { variable } = req.params;
    const result = adicionarMascaraCpfCnpj(variable);
    res.send(result);
});

app.get('/letramaiuscula/:variable', (req, res) => {
    const { variable } = req.params;
    const result = letraMaiuscula(variable);
    res.send(result);
});

app.get('/letraminuscula/:variable', (req, res) => {
    const { variable } = req.params;
    const result = letraMinuscula(variable);
    res.send(result);
});


app.get('/cirrusTime', (_, res) => {
    const timeData = cirrusTimeApi();
    res.json(timeData);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
