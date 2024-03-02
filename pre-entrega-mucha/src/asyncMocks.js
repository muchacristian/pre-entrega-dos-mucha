const products = [
  {
    id: "1",
    name: "Stratocaster",
    brand: "Fender",
    img: "../src/assets/stratocaster.jpg",
    price: "358.000",
    category: "guitarras",
    description: "Standar Mexico SSS black pau",
    stock: 9,
  },
  {
    id: "2",
    name: "Telecaster",
    brand: "Fender",
    img: "../src/assets/telecaster.jpg",
    price: "323.000",
    category: "guitarras",
    description: "American Vintage II 1975 deluxe",
    stock: 11,
  },
  {
    id: "3",
    name: "Les Paul",
    brand: "Gibson",
    img: "../src/assets/gibson.jpg",
    price: "442.000",
    category: "guitarras",
    description: "Standard '50s Heritage Cherry Sunburst",
    stock: 7,
  },
  {
    id: "4",
    name: "Bajo electrico",
    brand: "Yamaha",
    img: "../src/assets/yamaha.jpg",
    price: "253.000",
    category: "bajos",
    description: "Series BB pasive",
    stock: 7,
  },
  {
    id: "5",
    name: "Jazz Bass",
    brand: "Fender",
    img: "../src/assets/jazz.jpg",
    price: "356.000",
    category: "bajos",
    description: "American Professional II Jazz Bass",
    stock: 15,
  },
  {
    id: "6",
    name: "Piano digital",
    brand: "Kurzweil",
    img: "../src/assets/digital.jpg",
    price: "550.000",
    category: "pianos",
    description:
      "88 notas-600 sonidos 230 ritmos 128 voces polifonia - USB/MIDI",
    stock: 9,
  },
  {
    id: "7",
    name: "Sintetizador",
    brand: "Korg",
    img: "../src/assets/korg.jpg",
    price: "362.000",
    category: "pianos",
    description: "Modelo Kross2-88 teclas NH",
    stock: 9,
  },
  {
    id: "8",
    name: "Bateria Acustica",
    brand: "Yamaha",
    img: "../src/assets/acustica.jpg",
    price: "623.000",
    category: "baterias",
    description: "RDPOF5HTR Hot red 20 in 5 piezas ",
    stock: 5,
  },
  {
    id: "9",
    name: "Bateria Electronica",
    brand: "Roland",
    img: "../src/assets/roland.jpg",
    price: "389.000",
    category: "baterias",
    description: "SPD20 X Octapad ultra sensible 700 sonidos Tarjeta SD",
    stock: 4,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No quedan productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const product = products.find((prod) => prod.id == id);
      setTimeout(() => {
        if (!product) {
          reject(`No se encuentra el producto ${id}`);
        } else {
          resolve(product);
        }
      }, 2000);
    } else {
      reject("No quedan productos");
    }
  });
};
