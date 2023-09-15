//Pistas
class Pista {
  constructor(text) {
    this.text = text;
  }
}

const pista1 = new Pista(
  "Si no quieres forzar los ojos, será mejor que tus focos estén en buen estado."
);
const pista2 = new Pista(
  "Correr por las escaleras solo te llevará más rápido... directo al suelo."
);
const pista3 = new Pista(
  "¡No dejes cajones abiertos! Alguien podría tropezar con ellos."
);
const pista4 = new Pista(
  "La mejor manera de evitar accidentes, es terner organizado tu puesto de trabajo. ¡Recoge ese desorden!"
);
const pista5 = new Pista(
  "Las herramientas y cables pertenecen al almacen, todo debe ir en su lugar."
);
const pista6 = new Pista(
  "¡Enciende las luces! No eres un vampiro y tus ojos te lo agradecerán."
);
const pista7 = new Pista(
  "¿Cómo podrías usar el extintor, si está detrás de más objetos? Mantenlo despejado."
);
const pista8 = new Pista(
  "Si tu espalda no deja de doler, una mejor postura al sentarte deberias escoger."
);

//Modales

class Modal {
  constructor(text, btn) {
    this.text = text;
    this.btn = btn;
  }
}

const toAlmacen = new Modal("Lo lograste", nextAlmacen);
