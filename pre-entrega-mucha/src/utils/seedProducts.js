import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  {
    name: "Stratocaster",
    brand: "Fender",
    img: "https://i.imgur.com/vFos8an.jpeg",
    price: "200",
    category: "guitarras",
    description: "Standar Mexico SSS black pau",
    stock: 9,
  },
  {
    name: "Telecaster",
    brand: "Fender",
    img: "https://i.imgur.com/kO8KA58.jpeg",
    price: "300",
    category: "guitarras",
    description: "American Vintage II 1975 deluxe",
    stock: 11,
  },
  {
    name: "Les Paul",
    brand: "Gibson",
    img: "https://i.imgur.com/J5mQlLL.jpg",
    price: "400",
    category: "guitarras",
    description: "Standard '50s Heritage Cherry Sunburst",
    stock: 7,
  },
  {
    name: "Bajo electrico",
    brand: "Yamaha",
    img: "https://i.imgur.com/BjQDpTB.jpeg",
    price: "600",
    category: "bajos",
    description: "Series BB pasive",
    stock: 7,
  },
  {
    name: "Jazz Bass",
    brand: "Fender",
    img: "https://i.imgur.com/uhE3nOT.jpg",
    price: "500",
    category: "bajos",
    description: "American Professional II Jazz Bass",
    stock: 15,
  },
  {
    name: "Piano digital",
    brand: "Kurzweil",
    img: "https://i.imgur.com/5wyjVPD.jpg",
    price: "100",
    category: "pianos",
    description:
      "88 notas-600 sonidos 230 ritmos 128 voces polifonia - USB/MIDI",
  },
  {
    name: "Sintetizador",
    brand: "Korg",
    img: "https://i.imgur.com/YGEiPjZ.jpg",
    price: "300",
    category: "pianos",
    description: "Modelo Kross2-88 teclas NH",
    stock: 9,
  },
  {
    name: "Bateria Acustica",
    brand: "Yamaha",
    img: "https://i.imgur.com/IYOHJir.jpg",
    price: "200",
    category: "baterias",
    description: "RDPOF5HTR Hot red 20 in 5 piezas ",
    stock: 5,
  },
  {
    name: "Bateria Electronica",
    brand: "Roland",
    img: "https://i.imgur.com/HwK5TbA.jpg",
    price: "500",
    category: "baterias",
    description: "SPD20 X Octapad ultra sensible 700 sonidos Tarjeta SD",
    stock: 4,
  },
];

export const seedProducts = () => {
  products.forEach((product) => {
    // Agregamos el producto a la base de datos
    addDoc(collection(db, "products"), product);
  });
};
