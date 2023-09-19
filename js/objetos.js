//Pistas
class Pista {
  constructor(text) {
    this.text = text;
  }
}

//Administración
const pista1 = new Pista(
  "Si no quieres forzar los ojos, será mejor que tus bombillos estén en buen estado."
);
const pista2 = new Pista(
  "Correr por las escaleras solo te llevará más rápido... <br>directo al suelo."
);
const pista3 = new Pista(
  "¡No dejes cajones abiertos! Alguien podría tropezar con ellos."
);
const pista4 = new Pista(
  "La mejor manera de evitar accidentes, es tener organizado tu puesto de trabajo. <br>¡Recoge ese desorden!"
);
const pista5 = new Pista(
  "Las herramientas y cables pertenecen al almacen, todo debe ir en su lugar."
);
const pista6 = new Pista(
  "¡Enciende las luces! <br>No eres un vampiro y tus ojos te lo agradecerán."
);
const pista7 = new Pista(
  "¿Cómo podrías usar el extintor, si está detrás de otros objetos? <br>Manténlo despejado."
);
const pista8 = new Pista(
  "Si tu espalda no deja de doler, una mejor postura al sentarte deberías escoger."
);

//Almacen
const pista9 = new Pista(
  "Si no quieres accidentes, asegura todos los estantes."
);
const pista10 = new Pista("Asegura tu carga y evita recoger todo de nuevo.");

const pista11 = new Pista("¿Como sabrás qué utilizar, si no está etiquetado?");

const pista12 = new Pista(
  "Utilíza las canastillas para que los productos químicos no hagan daño."
);
const pista13 = new Pista(
  "Utilíza botas de seguridad para evitar los dolores en los pies."
);
const pista14 = new Pista(
  "Un pasillo en desorden puede ocasionar graves accidentes."
);
const pista15 = new Pista(
  "Usa las piernas. Agáchate y recoge correctamente los objetos pesados."
);

//Mantenimiento
const pista16 = new Pista(
  "Utilizando las herramientas adecuadas, puedes evitar que tu espalda duela y traquee."
);

const pista17 = new Pista(
  "Cuida de tu rostro y tus manos, no te quemes en vano."
);

const pista18 = new Pista(
  "¡Luis esta por caerse! <br>Alguien olvidó recoger los cables del pasillo."
);

const pista19 = new Pista(
  "¡Que peligro! <br>Si no eres visible en la noche, los conductores no podrán reaccionar a tiempo..."
);

const pista20 = new Pista(
  "No pongas tu cuerpo bajo ningun vehículo sin antes bloquear su movimiento."
);

const pista21 = new Pista(
  "Con herramientas dañadas nunca terminarás ese trabajo a tiempo."
);

const pista22 = new Pista(
  "A no ser que seas spiderman, evita subir alturas sin tu arnés."
);

const pista23 = new Pista(
  "Tus herramientas se dañarán si no las cuidas y las mantienes limpias."
);

const pista24 = new Pista(
  "Tus pulmones estarán agradecidos si usas máscara al pintar."
);

const pista25 = new Pista(
  "¡Cuidado! <br>Alguien podría resbalar con ese derrame."
);

const pista26 = new Pista(
  "Si no quieres chispas que te quemen el rostro, usa la guarda de seguridad."
);

//operaciones
const pista27 = new Pista(
  "Solo sentado en la cabina podrás tener control del vehículo."
);

const pista28 = new Pista("Pitar no te hace más rápido, solo más escandaloso.");

const pista29 = new Pista(
  "Aunque sea un modelo antiguo, el ATEGO sigue teniendo manijas para que subas y bajes."
);

const pista30 = new Pista(
  "Estás caminando por el patio, evita las distracciones."
);

const pista31 = new Pista(
  "¡La comida para después!<br>Que los usuarios no se suben para verte comer."
);

const pista32 = new Pista(
  "Usa la acera para estar seguro, habrá consecuencias si vas por la calzada."
);

const pista33 = new Pista(
  "Si no aseguras el freno de mano, el bus hará la ruta...<br>directo a un accidente."
);

const pista34 = new Pista(
  "Si bajas por el lado incorrecto de la cabina, podrías lastimarte."
);

const pista35 = new Pista(
  "No estás en una película de acción, ve en la dirección correcta y evita accidentes."
);

const pista36 = new Pista(
  "Siempre que subas al bus, utilíza las barandillas y evita caidas."
);

//operiaciones via
const pista37 = new Pista(
  "Mantén la distancia, podrías provocar un accidente con el que coche de enfrente."
);

const pista38 = new Pista(
  "Acelerar solo hará que vayas más rápido a un accidente."
);

const pista39 = new Pista(
  "¡Deja el celular para después!<br>Concéntrate en la vía."
);

const pista40 = new Pista(
  "Siempre evita la agresión, ni tu ni los pasajeros tienen la culpa del trancón."
);

const pista41 = new Pista(
  "La señal de Pare es importante para todos, respétala y no te la pases."
);

const pista42 = new Pista(
  "!Uy! Por ir demasiado rápido, no viste el hueco en el camino."
);

const pista43 = new Pista(
  "El casco puede salvar vidas en un accidente, pero solo si lo llevas bien puesto."
);

//Modales

class Modal {
  constructor(text) {
    this.text = text;
  }
}

const toAlmacen = new Modal("Lo lograste");
const toMantenimiento = new Modal("¡lo hiciste de nuevo!");
const toOperaciones = new Modal("¡Eres increible!, continuemos");
const toVia = new Modal("¡Vamos!, una última vez");
