//variables
let acierto1 = document.getElementById("acierto1");
let acierto2 = document.getElementById("acierto2");
let acierto3 = document.getElementById("acierto3");
let acierto4 = document.getElementById("acierto4");
let acierto5 = document.getElementById("acierto5");

const administracion = document.getElementById("administracion");
const almacen = document.getElementById("almacen");
const mantenimiento = document.getElementById("mantenimiento");
const operaciones = document.getElementById("operaciones");
const operacionVia = document.getElementById("operacion-via");

const cajaPistas = document.getElementById("caja-pistas");
const modal = document.getElementById("modal-next");
const next = document.getElementById("next");

//funciones
function iniciarJuego() {
  setTimeout(() => {
    administracion.style.transform = "translateX(0rem)";
  }, 500);
  setTimeout(() => {
    cajaPistas.style.transform = "scale(1)";
  }, 1500);
}

function renovarPista(clue, acierto) {
  setTimeout(() => {
    cajaPistas.style.transform = "scale(0)";
  }, 100);
  setTimeout(() => {
    cajaPistas.innerHTML = `<p>${clue.text}</p>`;
  }, 600);
  setTimeout(() => {
    cajaPistas.style.transform = "scale(1)";
    acierto.style.visibility = "visible";
  }, 1300);
}

function nuevoMapa(mapa, mapa2) {
  mapa.style.transform = "translateX(-200rem)";
  modal.style.transform = "scale(0)";
  mapa2.style.transform = "translateX(0rem)";
  setTimeout(() => {
    cajaPistas.style.transform = "scale(1)";
  }, 1500);
}

//eventos

acierto1.addEventListener("click", () => {
  acierto1.style.opacity = 1;
  renovarPista(pista2, acierto2);
});

acierto2.addEventListener("click", () => {
  acierto2.style.opacity = 1;
  renovarPista(pista3, acierto3);
});

acierto3.addEventListener("click", () => {
  acierto3.style.opacity = 1;
  renovarPista(pista4, acierto4);
});

acierto4.addEventListener("click", () => {
  acierto4.style.opacity = 1;
  renovarPista(pista5, acierto5);
});

acierto5.addEventListener("click", () => {
  acierto5.style.opacity = 1;
  renovarPista();
  setTimeout(() => {
    modal.style.transform = "scale(1)";
  }, 500);
});

next.addEventListener("click", () => {
  nuevoMapa(administracion, mantenimiento);
});

//delay inicial pistas
iniciarJuego();
