// Router

import { routerDirection } from "./router";

// Componentes
import "./Components/welcome";
import "./Components/button";

function main() {
  // console.log("Hola mundo");
  const contenedor = document.querySelector(".contenedor");
  routerDirection(contenedor);
}

main();
