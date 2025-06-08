//Questão 1
document.getElementById("q1").addEventListener("submit", function (e) {
  e.preventDefault();
  let n1 = document.getElementById("q1-n1").value;
  let n2 = document.getElementById("q1-n2").value;
  if (n1 > n2) {
    document.getElementById(
      "resultado-q1"
    ).innerHTML = `${n1} é maior que ${n2}`;
  } else if (n2 > n1) {
    document.getElementById(
      "resultado-q1"
    ).innerHTML = `${n2} é maior que ${n1}`;
  } else {
    document.getElementById("resultado-q1").innerHTML = `${n2} é igual a ${n1}`;
  }
});
//Questão 2
document.getElementById("q2").addEventListener("submit", function (e) {
  e.preventDefault();
  let n1 = document.getElementById("q2-n1").value;
  let n2 = document.getElementById("q2-n2").value;
  let resultado = n1 ** n2;

  document.getElementById(
    "resultado-q2"
  ).innerHTML = `${n1}^${n2} é igual a ${resultado}`;
});
//Questão 3
document.getElementById("q3").addEventListener("submit", function (e) {
  e.preventDefault();
  let n1 = document.getElementById("q3-n1").value;
  let resultado = 1;
  for (i = n1; i >= 1; i--) {
    resultado = resultado * i;
  }

  document.getElementById(
    "resultado-q3"
  ).innerHTML = `${n1} fatorial é igual a ${resultado}`;
});
//Questão 4
document.getElementById("q4").addEventListener("submit", function (e) {
  e.preventDefault();
  let n1 = document.getElementById("q4-n1").value;
  let resultado = 3.14 * (n1 * n1);

  document.getElementById(
    "resultado-q4"
  ).innerHTML = `O circulo com raio ${n1} tem como area: ${resultado}`;
});
//Questão 5
document.getElementById("q5").addEventListener("submit", function (e) {
  e.preventDefault();
  let lista = [
    document.getElementById("q5-n1").value,
    document.getElementById("q5-n2").value,
    document.getElementById("q5-n3").value,
    document.getElementById("q5-n4").value,
    document.getElementById("q5-n5").value,
    document.getElementById("q5-n6").value,
  ];
  let pares = "";
  for (i = 0; i <= lista.length; i++) {
    if (lista[i] % 2 === 0)
      // pares.push(lista[i])
      pares += `${lista[i]}, `;
  }

  document.getElementById(
    "resultado-q5"
  ).innerHTML = `Os numeros pares que contem na lista são ${pares}`;
});
//Questão 6
document.getElementById("q6").addEventListener("submit", function (e) {
  e.preventDefault();
  let lista = [
    document.getElementById("q6-n1").value,
    document.getElementById("q6-n2").value,
    document.getElementById("q6-n3").value,
    document.getElementById("q6-n4").value,
    document.getElementById("q6-n5").value,
    document.getElementById("q6-n6").value,
  ];
  let nMaior = Math.max(...lista);

  document.getElementById(
    "resultado-q6"
  ).innerHTML = `O maior numero da lista é ${nMaior}`;
});
//Questão 7
document.getElementById("q7").addEventListener("submit", function (e) {
  e.preventDefault();
  let quantidade = document.getElementById("q7-n1").value;
  let numeros = "0, 1, ";
  let n1 = 0;
  let n2 = 1;
  let fn = 0;
  for (i = 1; i <= quantidade - 2; i++) {
    fn = n1 + n2;
    n1 = n2;
    n2 = fn;

    numeros += `${fn}, `;
  }
  document.getElementById(
    "resultado-q7"
  ).innerHTML = `Os primeiros ${quantidade} numeros da sequencia de Fibonacci são ${numeros}`;
});
//Questão 8
document.getElementById("q8").addEventListener("submit", function (e) {
  e.preventDefault();
  let texto = document.getElementById("q8-n1").value;
  const vogais = texto.match(/[aeiouáéíóúàèìòùâêîôûãõAEIOUÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕ]/g);

  document.getElementById(
    "resultado-q8"
  ).innerHTML = `Foram encontradas ${vogais.length} vogais no texto escrito.`;
});
//Questão 9
document.getElementById("q9").addEventListener("submit", function (e) {
  e.preventDefault();
  let n1 = document.getElementById("q9-n1").value;
  let resultado = "";

  if (n1 % 2 === 0) {
    resultado = "Par";
  } else {
    resultado = "impar";
  }

  document.getElementById(
    "resultado-q9"
  ).innerHTML = `Os numero ${n1} é ${resultado}`;
});
//Questão 10
document.getElementById("q10").addEventListener("submit", function (e) {
  e.preventDefault();
  let texto = document.getElementById("q10-n1").value;
  let txtInverso = texto.split("").reverse().join("");

  document.getElementById(
    "resultado-q10"
  ).innerHTML = `o texto invertido é ${txtInverso}`;
});
//Questão 11
document.getElementById("q11").addEventListener("submit", function (e) {
  e.preventDefault();
  let n1 = parseInt(document.getElementById("q11-n1").value);
  let n2 = parseInt(document.getElementById("q11-n2").value);
  let operador = document.getElementById("q11-n3").value;
  let resultado = 0;
  if (operador == "+") {
    resultado = n1 + n2;
    document.getElementById(
      "resultado-q11"
    ).innerHTML = `O resultado da soma é ${resultado}`;
  } else if (operador == "-") {
    resultado = n1 - n2;
    document.getElementById(
      "resultado-q11"
    ).innerHTML = `O resultado da subtração é ${resultado}`;
  } else if (operador == "*") {
    resultado = n1 * n2;
    document.getElementById(
      "resultado-q11"
    ).innerHTML = `O resultado da multiplicação é ${resultado}`;
  } else if (operador == "/") {
    resultado = n1 / n2;
    document.getElementById(
      "resultado-q11"
    ).innerHTML = `O resultado da divisão é ${resultado}`;
  } else {
    document.getElementById("resultado-q11").innerHTML = `Operador invalido`;
  }
});
//Questão 12
document.getElementById("q12").addEventListener("submit", function (e) {
  e.preventDefault();
  let cpf = document.getElementById("q12-n1").value;
  try {
    cpf = cpf.replace(/[^\d]+/g, "");

    // Verifica se tem 11 dígitos ou se todos são iguais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      throw new Error("CPF inválido: formato incorreto ou dígitos repetidos.");
    }
    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    if (
      digito1 !== parseInt(cpf.charAt(9)) ||
      digito2 !== parseInt(cpf.charAt(10))
    ) {
      throw new Error("CPF inválido: dígitos verificadores não conferem.");
    }

    document.getElementById("resultado-q12").innerHTML = "CPF valido";
  } catch (erro) {
    console.error(erro.message);
    document.getElementById("resultado-q12").innerHTML = erro.message;
    return false;
  }
});
//Questão 13
let segundos = 0;
let intervalo = null;

function atualizarDisplay() {
  let min = Math.floor(segundos / 60);
  let seg = segundos % 60;
  document.getElementById("display").textContent = `${min
    .toString()
    .padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
}

function iniciar() {
  if (intervalo) return; // evita múltiplos intervalos
  intervalo = setInterval(() => {
    segundos++;
    atualizarDisplay();
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetar() {
  pausar();
  segundos = 0;
  atualizarDisplay();
}
