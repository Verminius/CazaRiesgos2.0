function guardarDatos() {
  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;
  const empresa = document.getElementById("empresa").value;
  const patio = document.getElementById("patio").value;
  const proceso = document.getElementById("proceso").value;
  const cargo = document.getElementById("cargo").value;

  const datos = {
    nombre,
    cedula,
    empresa,
    patio,
    proceso,
    cargo,
  };

  const datosJSON = JSON.stringify(datos);
  localStorage.setItem("datosJugador", datosJSON);

  location.assign("/game.html");
}

const formBtn = document.getElementById("form-btn");
formBtn.addEventListener("click", guardarDatos);
