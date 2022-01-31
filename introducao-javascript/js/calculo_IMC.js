var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");
  let pesoValido = validaPeso(peso); //true
  let alturaValido = validaAltura(altura); //true

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido!!!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValido) {
    alturaValido = false;
    tdImc.textContent = "Altura inválida!!!";
    paciente.classList.add("paciente-invalido");
    //   paciente.style.backgroundColor = "#E74C3C";
    //   paciente.style.color = "#ffff";
  }

  if (alturaValido || pesoValido) {
    let imc = calculaIMC(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaIMC(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2); //coloca 2 digitos pos a virgula na casa decimal.
}
