let paciente = document.querySelectorAll(".paciente");
let tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function (event) {
    let alvoEvento = event.target; // th
    let alvoPai = alvoEvento.parentNode; //Pega o Pai do th no caso o TR = paciente = remove.

    alvoPai.classList.add("fadeOut");

    setTimeout(function () {
        alvoPai.remove();
    }, 500)
    
})

// paciente.forEach(function (pacientes) {
//     pacientes.addEventListener("dblclick", function () {
//         this.remove();
//     })
// })