let titulo = document.querySelector("h1");
console.log(titulo.textContent);
titulo.textContent = "Cristiane Nutricionista"; // manipulando dados através do DOM
titulo.style.mouseHover = "pointer";
titulo.onclick = () => handleAddPaciente();