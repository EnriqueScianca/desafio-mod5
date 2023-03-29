customElements.define(
  "welcome-page",
  class extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      // *TODO: Aca creo que va la accion de que hace cuando hacemos click en empezar.

      const style = document.createElement("style");
      style.innerHTML = `
      .welcome-title{
        font-family: 'Odibee Sans', cursive;
        color: #009048;
        font-size: 80px;
      }

      .welcome-button{
        font-family: 'Odibee Sans', cursive;
        border: 3px solid #001997;
        background-color: #006CFC;
        color: #D8FCFC;
        font-size: 45px;
        width: 260px;
        height: 60px;
      }

      //*TODO: Agregamos los estilos del div
      `;

      this.shadow.appendChild(style);
      this.render();
    }

    render() {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class= "welcome">
        <h1 class="welcome-title">Piedra Papel ó Tijera</h1>
        <button class="welcome-button">Empezar</button>
      </div>

      <div class= "welcome-hands">
        <img class="hands" src="./" >
        <img class="hands" src="./" >
        <img class="hands" src="./" >
      </div>
      
        `;
      const button = document.querySelector(".welcome-button");
      button?.addEventListener("click", (e) => {
        console.log("Componente Welcome funcionando");
      });

      this.shadow.appendChild(div);
    }
  }
);
