import { instructionsPage } from "./Pages/instructions";
import { welcomePage } from "./Pages/welcome";
import { playPage } from "./Pages/play";
import { resultsPage } from "./Pages/resuts";

const routes = [
  {
    path: /\/instructions/,
    handler: instructionsPage,
  },

  {
    path: /\/desafio-mod5\/instructions/,
    handler: instructionsPage,
  },

  {
    path: /\/welcome/,
    handler: welcomePage,
  },

  {
    path: /\/desafio-mod5\/welcome/,
    handler: welcomePage,
  },

  {
    path: /\/jugada/,
    handler: playPage,
  },

  {
    path: /\/desafio-mod5\/jugada/,
    handler: playPage,
  },

  {
    path: /\/results/,
    handler: resultsPage,
  },

  {
    path: /\/desafio-mod5\/results/,
    handler: resultsPage,
  },
];

export function routerDirection(container) {
  if (location.pathname == "/desafio-mod5/") {
    goTo("/desafio-mod5/welcome");
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
        const el = r.handler({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  handleRoute(location.pathname);
}
