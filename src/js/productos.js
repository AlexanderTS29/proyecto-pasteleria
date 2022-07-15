let productos = [
  {
    ID_Producto: 1,
    NombreProducto: "MEMBRILLO",
    DescripcionProducto: "Dulce de membrillo",
    PrecioProducto: 18,
    sctokProducto: 6,
    imagenProducto: "./src/img/50x503.jpg",
    descuentoProducto: 1.5,
    ID_Categoria: 2,
    estado: false,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
  },
  {
    ID_Producto: 2,
    NombreProducto: "KING-KONG DULCE",
    DescripcionProducto: "Entero",
    PrecioProducto: 22,
    sctokProducto: 20,
    imagenProducto: "./src/img/kingkong.jpg",
    descuentoProducto: 2.5,
    ID_Categoria: 1,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
  },
  {
    ID_Producto: 3,
    NombreProducto: "ACUÑAS",
    DescripcionProducto: "POR UNIDAD",
    PrecioProducto: 1.5,
    sctokProducto: 5,
    imagenProducto: "./src/img/2.jpg",
    descuentoProducto: 0.5,
    ID_Categoria: 2,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
  },
  {
    ID_Producto: 4,
    NombreProducto: "ALFAJORES",
    DescripcionProducto: "POR UNIDAD",
    PrecioProducto: 1.5,
    sctokProducto: 10,
    imagenProducto: "./src/img/images2.jpg",
    descuentoProducto: 0.10,
    ID_Categoria: 1,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
  },
];

let productosCart = [];

let categorias = [
  { ID_Categoria: 1, NombreCategoria: "DULCERIA" },
  { ID_Categoria: 2, NombreCategoria: "DULCERIA" },
  { ID_Categoria: 3, NombreCategoria: "DULCERIA" },
  { ID_Categoria: 4, NombreCategoria: "DULCERIA" },
];

let cupones = [
  { ID_Cupon: 1, CodigoCupon: "CompuGamer", Dscto: null, Tipo: "Por Producto" },
  { ID_Cupon: 2, CodigoCupon: "ArribaPeru", Dscto: 15, Tipo: "Por Producto" },
  {
    ID_Cupon: 3,
    CodigoCupon: "DiaPadreUno",
    Dscto: null,
    Tipo: "Por Producto",
  },
  { ID_Cupon: 4, CodigoCupon: "DiaPadreDos", Dscto: 25, Tipo: "Total" },
];

let calificacion = [
  {
    ID_Calificacion: 1,
    Comentario: "Ese teclado es genial",
    ID_Producto: 1,
    Puntaje: 5
  },
  {
    ID_Calificacion: 2,
    Comentario: "Ese teclado es bueno",
    ID_Producto: 1,
    Puntaje: 4
  },
  {
    ID_Calificacion: 3,
    Comentario: "Ese teclado es genial",
    ID_Producto: 2,
    Puntaje: 3
  },
  {
    ID_Calificacion: 4,
    Comentario: "Ese teclado es bueno",
    ID_Producto: 2,
    Puntaje: 5
  },
  {
    ID_Calificacion: 5,
    Comentario: "Ese teclado es genial",
    ID_Producto: 3,
    Puntaje: 3
  },
  {
    ID_Calificacion: 6,
    Comentario: "",
    ID_Producto: 2,
    Puntaje: 5
  },
  {
    ID_Calificacion: 7,
    Comentario: "",
    ID_Producto:4,
    Puntaje: 1
  }
];

let tipoEnvio = [];
