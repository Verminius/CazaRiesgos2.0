const logoBox = document.querySelector(".container-top");
const logo = document.querySelector(".logo-juego");
const iniciar = document.querySelector(".inicio");
const instBox = document.querySelector(".cont-instrucciones");
const imgInst = document.querySelector(".img-inst");
const textInst = document.querySelector(".text-inst");
const leftArrow = document.querySelector(".left");
const rigthArrow = document.querySelector(".rigth");

let conteo = 1;

//funciones
function abrirInstrucciones() {
  instBox.style.transform = "translateX(0rem)";
  imgInst.innerHTML = inst1.img;
  textInst.innerHTML = `<p>${inst1.text}</p>`;
}

function pasarSiguiente(inst) {
  instBox.style.transform = "translateX(-200rem)";
  instBox.style.visibility = "hidden";
  setTimeout(() => {
    instBox.style.trasition = "all 0.1s ease";
    instBox.style.transform = "translateX(400rem)";
  }, 500);
  setTimeout(() => {
    instBox.style.visibility = "visible";
    imgInst.innerHTML = inst.img;
    textInst.innerHTML = `<p>${inst.text}</p>`;
  }, 750);
  setTimeout(() => {
    instBox.style.transform = "translateX(0rem)";
  }, 900);
}

function pasarAnterior(inst) {
  instBox.style.transform = "translateX(200rem)";
  instBox.style.visibility = "hidden";
  setTimeout(() => {
    instBox.style.trasition = "all 0.1s ease";
    instBox.style.transform = "translateX(-400rem)";
  }, 500);
  setTimeout(() => {
    instBox.style.visibility = "visible";
    imgInst.innerHTML = inst.img;
    textInst.innerHTML = `<p>${inst.text}</p>`;
  }, 750);
  setTimeout(() => {
    instBox.style.transform = "translateX(0rem)";
  }, 900);
}

// delay inicio
function iniciarJuego() {
  logoBox.style.transform = "translateY(0rem)";
  setTimeout(() => {
    logo.style.transform = "translateY(-3rem)";
    iniciar.style.transform = "scale(1) translateY(15rem)";
  }, 1300);
}

//inicio
iniciarJuego();

iniciar.addEventListener("click", () => {
  setTimeout(() => {
    iniciar.style.transform = "translateY(200rem)";
  }, 200);
  setTimeout(() => {
    logo.style.transform = "translateY(-200rem)";
  }, 400);
  setTimeout(() => {
    logoBox.style.height = "10%";
    logoBox.style.top = "0";
  }, 600);
  setTimeout(() => {
    logoBox.style.justifyContent = "flex-start";
    logo.style.transform = "translateY(0rem)";
    logo.classList.add("logo-juego-small");
    abrirInstrucciones();
  }, 800);
});

//navegar en el menú

rigthArrow.addEventListener("click", () => {
  conteo++;
  if (conteo == 2) {
    pasarSiguiente(inst2);
    leftArrow.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
  } else if (conteo == 3) {
    pasarSiguiente(inst3);
  } else if (conteo >= 4) {
    location.assign("/form.html");
  }

  console.log(conteo);
});

leftArrow.addEventListener("click", () => {
  conteo--;
  if (conteo == 2) {
    pasarAnterior(inst2);
  } else if (conteo == 1) {
    pasarAnterior(inst1);
    leftArrow.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else if (conteo == 0) {
    instBox.style.transform = "translateX(200rem)";
    setTimeout(() => {
      logo.style.transform = "translateY(-200rem)";
    }, 200);
    setTimeout(() => {
      logoBox.style.height = "100%";
    }, 400);
    setTimeout(() => {
      logoBox.style.justifyContent = "center";
      logo.style.transform = "translateY(0rem)";
      logo.classList.remove("logo-juego-small");
    }, 600);
    setTimeout(() => {
      logo.style.transform = "translateY(-3rem)";
      iniciar.style.transform = "scale(1) translateY(15rem)";
    }, 800);
  }
  console.log(conteo);
  return (conteo = 1);
});
