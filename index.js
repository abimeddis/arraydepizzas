const FORM = document.getElementsByClassName("form");
const INPUT = document.getElementsByClassName("input-serch");
const BUTTON = document.getElementsByClassName("button");
const SECTIONCARDS = document.getElementById("section-cards");

const pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    precio: 1000,
    ingredientes: ["Salsa de Tomate", "Muzzarella", "aceitunas verdes"],
  },
  {
    id: 2,
    nombre: "Jamón y Morrones",
    precio: 1500,
    ingredientes: [
      "Salsa de Tomate",
      "Muzzarella",
      "Jamón",
      "Morrones",
      "Aceitunas Averdes",
    ],
  },
  {
    id: 3,
    nombre: "Fugazzeta",
    precio: 1600,
    ingredientes: ["Muzzarella", "Cebolla", "Aceitunas Negras"],
  },
  {
    id: 4,
    nombre: "Calabreza",
    precio: 1750,
    ingredientes: [
      "Salsa de Tomate",
      "Muzzarella",
      "Longaniza",
      "Aceitunas Verdes",
    ],
  },
  {
    id: 5,
    nombre: "Masa de Pizza",
    precio: 500,
    ingredientes: ["Salsa de Tomate"],
  },
  {
    id: 6,
    nombre: "Muzza y Huevo",
    precio: 1000,
    ingredientes: [
      "Salsa de Tomate",
      "Muzzarella",
      "Huevo duro picado",
      "Aceitunas Verdes",
    ],
  },
];

const findPizza = (value) => pizzas.find((pizza) => pizza.id === value);

const buscarPizza = (e) => {
  e.preventDefault();
  const valorIngresado = INPUT.value;
  if (!valorIngresado.length) {
    SECTIONCARDS.innerHTML = `<div class="error-sin-numero"><h2>Por favor Ingrese un N° menor o = a 6 para buscar su pizza.</h2></div>`;
  } else if (findPizza(valorIngresado) <= 6) {
    SECTIONCARDS.innerHTML = `<div class="pizza.encontrada"><h2>Usted ha elegido la pizza de ${pizza.nombre} </h2>
        <h3>Valor: $${pizza.precio} </h3></div>`;
  } else
    (findPizza(valorIngresado) >
      6)`<div class="error-num-inexistente"><h2>El N° ingresado no existe. Por favor Ingrese un N° menor o = a 6 para buscar su pizza.</h2></div>`;

  return;
};

const init = () => {
  FORM.addEventListener("submit", buscarPizza);
};

init();
