// Router

import { routerDirection } from "./router";

// Componentes
import "./Components/welcome";
import "./Components/button";
import "./Components/countdown"

function main() {
  const contenedor = document.querySelector(".contenedor");
  routerDirection(contenedor);
}

main();
