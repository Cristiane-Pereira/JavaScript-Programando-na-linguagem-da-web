var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); //previne o comportamentto padrao do botao do formulário.

  let form = document.querySelector("#form-adiciona");

  let paciente = obtemPacienteDoFormulario(form);
  //   let nome = form.nome.value; //pega valores do form;
  //   let peso = form.peso.value;
  //   let altura = form.altura.value;
  //   let gordura = form.gordura.value;

  let pacienteTr = montaTr(paciente);

  let erros = validaPaciente(paciente);
  console.log(erros);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
  }

  let tabela = document.querySelector("#tabela-pacientes"); //adiciona paciente na tabela
  tabela.appendChild(pacienteTr);

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagemDeErro = document.querySelector("#mensagem-erro");
  mensagemDeErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
  let pacienteTr = montaTr(paciente);
  let tabela = document.querySelector("#tabela-pacientes"); //adiciona paciente na tabela
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

// Adiciona o paciente na tabela
function montaTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //Irá criar uma nova tr na tabela html.
  let nomeTd = document.createElement("td");
  nomeTd.classList.add("info-nome");
  nomeTd.textContent = paciente.nome; // joga valores captados dentro das linhas de cada coluna

  let pesoTd = document.createElement("td");
  pesoTd.classList.add("info-peso");
  pesoTd.textContent = paciente.peso;

  let alturaTd = document.createElement("td");
  alturaTd.classList.add("info-altura");
  alturaTd.textContent = paciente.altura;

  let gorduraTd = document.createElement("td");
  gorduraTd.classList.add("info-gordura");
  gorduraTd.textContent = paciente.gordura;

  let imcTd = document.createElement("td");
  imcTd.classList.add("info-imc");
  imcTd.textContent = calculaIMC(paciente.peso, paciente.altura);

  pacienteTr.appendChild(nomeTd); // joga elementos filhos para dentro do pai na tabela em si.
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function validaPaciente(paciente) {
  var error = [];
  if (paciente.nome.length == 0) error.push("Nome obrigatório!");
  if (!validaPeso(paciente.peso)) error.push("Peso inválido!");
  if (paciente.peso.length == 0) error.push("Peso obrigatório!");
  if (!validaAltura(paciente.altura)) error.push("Altura inválida!");
  if (paciente.altura.length == 0) error.push("Altura obrigatório!");
  if (paciente.gordura.length == 0) error.push("Gordura obrigatório!");
  return error;
}
