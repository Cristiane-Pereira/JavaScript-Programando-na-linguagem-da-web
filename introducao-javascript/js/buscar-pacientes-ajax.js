var botaoBuscar = document.querySelector("#buscar-paciente");
console.log(botaoBuscar);

botaoBuscar.addEventListener("click", function () {
  console.log("Buscando paciente...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      //erro 200 significa que não deu nenhum erro na requisição.
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      // console.log(typeof resposta + " ---- " +  "Aqui ele vem em formato de Json tipo texto.");
      // console.log(typeof pacientes + " ---- " +  "Aqui ele foi convertido para um objeto.");

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      var erroAjax = document.querySelector("#erro-ajax");
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
