import { instructionsPage } from "./Pages/instructions";
import { welcomePage } from "./Pages/welcome";

const routes = [
  {
    path: /\/instructions/,
    handler: instructionsPage,
  },
  {
    path: /\/welcome/,
    handler: welcomePage,
  },
  {
    path: /\/jugada/,
    handler: instructionsPage,
  },
];

// export function handleRoute(route) {
//   for (const r of routes) {
//     if (r.path.test(route)) {
//       // const el = r.handler({ goTo: goTo });
//       const container = document.querySelector(".contnet");
//       // Se puede usar la variable contaienr o crear otra function y pasarle el container por parametro
//       const el = r.handler();
//       if (container?.firstChild) {
//         container.firstChild.remove();
//       }
//       container?.appendChild(el);
//     }
//   }
// }

export function routerDirection(container) {
  if (location.pathname == "/desafio-final/") {
    goTo("/desafio-final/welcome");
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  }

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler();

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  handleRoute(location.pathname);
}
