const express = require("express");
const app = express();
const port = 4000;

function isNumber(variable) {
  return !isNaN(parseFloat(variable)) && isFinite(variable);
}

function removerMascara(variable) {
  if (variable != null) {
    variable = variable.replace(/[-.]/g, ""); 
  }
  return { variable };
}

function adicionarMascaraCpfCnpj(variable) {
  if (isNumber(variable)) {
    if (variable.length === 11) {
      variable = variable.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    } else if (variable.length === 14) {
      variable = variable.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    }
  } else {
    variable = "Insira apenas números, por favor.";
  }
  return { variable };
}

function letraMaiuscula(variable) {
  if (variable != null) {
    variable = variable.toUpperCase(); 
  }
  return { variable };
}

function letraMinuscula(variable) {
  if (variable != null) {
    variable = variable.toLowerCase(); 
  }
  return { variable };
}

app.get("/limparmascara/:variable", (req, res) => {
  const { variable } = req.params;
  const result = removerMascara(variable);
  res.send(result);
});

app.get("/mascaracpfcnpj/:variable", (req, res) => {
  const { variable } = req.params;
  const result = adicionarMascaraCpfCnpj(variable);
  res.send(result);
});

app.get("/letramaiuscula/:variable", (req, res) => {
  const { variable } = req.params;
  const result = letraMaiuscula(variable);
  res.send(result);
});

app.get("/letraminuscula/:variable", (req, res) => {
  const { variable } = req.params;
  const result = letraMinuscula(variable);
  res.send(result);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
