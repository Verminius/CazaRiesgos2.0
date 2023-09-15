//funciones
function iniciarJuego() {
  cajaPistas.innerHTML = `<h2>Pista</h2>` + `<p>${pista1.text}</p>`;
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
    cajaPistas.innerHTML = `<h2>Pista</h2>` + `<p>${clue.text}</p>`;
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

function abrirModal(e) {
  setTimeout(() => {
    modal.innerHTML =
      `<p>${e.text}</p>` + `<button id="${e.btn}">siguiente mapa</button>`;
    modal.style.transform = "scale(1)";
  }, 300);
}

function cambiarTablero() {
  modal.style;
}

//eventos

//aciertos
acierto1.addEventListener("click", () => {
  acierto1.classList.add("descubierto");
  renovarPista(pista2, acierto2);
});

acierto2.addEventListener("click", () => {
  acierto2.classList.add("descubierto");
  renovarPista(pista3, acierto3);
});

acierto3.addEventListener("click", () => {
  acierto3.classList.add("descubierto");
  renovarPista(pista4, acierto4);
});

acierto4.addEventListener("click", () => {
  acierto4.classList.add("descubierto");
  renovarPista(pista5, acierto5);
});

acierto5.addEventListener("click", () => {
  acierto5.classList.add("descubierto");
  renovarPista(pista6, acierto6);
});

acierto6.addEventListener("click", () => {
  acierto6.classList.add("descubierto");
  renovarPista(pista7, acierto7);
});

acierto7.addEventListener("click", () => {
  acierto7.classList.add("descubierto");
  renovarPista(pista8, acierto8);
});

acierto8.addEventListener("click", () => {
  acierto8.classList.add("descubierto");
  cajaPistas.style.transform = "scale(0)";
  abrirModal(toAlmacen);
});

//nuevo tablero
nextAlmacen.addEventListener("click", () => {
  console.log("Cambiando mapa");
});

//delay inicial pistas
iniciarJuego();
