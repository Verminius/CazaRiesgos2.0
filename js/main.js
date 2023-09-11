//variables
let acierto1 = document.getElementById("acierto1");

const cajaPistas = document.getElementById("caja-pistas");

//funciones
function renovarPista(clue) {
  setTimeout(() => {
    cajaPistas.style.transform = "scale(0)";
  }, 200);
  setTimeout(() => {
    cajaPistas.innerHTML = `<p>${clue.text}</p>`;
  }, 400);
  setTimeout(() => {
    cajaPistas.style.transform = "scale(1)";
  }, 600);
}

//eventos
acierto1.addEventListener("click", () => {
  acierto1.style.opacity = 1;
  renovarPista(pista2);
});

//delay inicial pistas
setTimeout(() => {
  cajaPistas.style.transform = "scale(1)";
}, 500);
