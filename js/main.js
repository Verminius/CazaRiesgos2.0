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
  }, 400);
  setTimeout(() => {
    cajaPistas.style.transform = "scale(1)";
    acierto.style.visibility = "visible";
  }, 600);
}

function nuevoMapa(mapa, mapa2) {
  mapa.style.transform = "translateX(-200rem)";
  modal.style.transform = "scale(0)";
  mapa2.style.transform = "translateX(0rem)";
  setTimeout(() => {
    cajaPistas.style.transform = "scale(1)";
  }, 1500);
}

function abrirModalAdmin(e) {
  setTimeout(() => {
    modal.innerHTML =
      `<p>${e.text}</p>` +
      `<button class="next" onclick="cambiarTablero(administracion, almacen, pista9)">siguiente mapa</button>`;
    modal.style.transform = "scale(1)";
  }, 300);
}

function abrirModalMante(e) {
  setTimeout(() => {
    modal.innerHTML =
      `<p>${e.text}</p>` +
      `<button class="next" onclick="cambiarTablero(almacen, mantenimiento, pista16)">siguiente mapa</button>`;
    modal.style.transform = "scale(1)";
  }, 300);
}

function abrirModalOpe(e) {
  setTimeout(() => {
    modal.innerHTML =
      `<p>${e.text}</p>` +
      `<button class="next" onclick="cambiarTablero(mantenimiento, operaciones, pista27)">siguiente mapa</button>`;
    modal.style.transform = "scale(1)";
  }, 300);
}

function abrirModalVia(e) {
  setTimeout(() => {
    modal.innerHTML =
      `<p>${e.text}</p>` +
      `<button class="next" onclick="cambiarTablero(operaciones, operacionVia, pista37)">siguiente mapa</button>`;
    modal.style.transform = "scale(1)";
  }, 300);
}

function abrirModalFinal() {
  setTimeout(() => {
    modal.innerHTML =
      '<img class="imgFin" src="/img/festIcon.png">' +
      "<p>Lo lograste, eres un experto en seguridad víal y SST</p>" +
      '<button class="next" onclick="finalizarJuego()">siguiente mapa</button>';
    modal.style.transform = "scale(1)";
  }, 300);
}

function cambiarTablero(mapa1, mapa2, pista) {
  modal.style.transform = "scale(0)";
  setTimeout(() => {
    mapa1.style.transform = "translateX(-200rem)";
  }, 500);
  setTimeout(() => {
    mapa2.style.transform = "translateX(0rem)";
  }, 700);
  setTimeout(() => {
    cajaPistas.innerHTML = `<h2>Pista</h2>` + `<p>${pista.text}</p>`;
    cajaPistas.style.transform = "scale(1)";
  }, 2000);
  return;
}

function finalizarJuego() {
  setTimeout(() => {
    modal.style.transform = "scale(0)";
  }, 300);
  setTimeout(() => {
    operacionVia.style.transform = "TranslateX(-200rem)";
  }, 600);
}

//delay inicial pistas
iniciarJuego();
