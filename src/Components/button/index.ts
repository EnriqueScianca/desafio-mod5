//TODO: ELIMINAR TODO Y HACER COMPONENTE SOLO EL BOTON PARA INYECTAR EN LAS PAGE CORRESPONDIENTES (POR AHORA EN INSTRUCTIONS)

customElements.define(
  "button-comp",
  class extends HTMLElement {
    // shadow: ShadowRoot
    shadow = this.attachShadow({ mode: "open" }) as ShadowRoot;
    constructor() {
      super();
      this.render();
    }

    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
        .container-button{
          font-family: 'Odibee Sans', cursive;
        border: 3px solid #001997;
        background-color: #006CFC;
        color: #D8FCFC;
        font-size: 45px;
        width: 260px;
        height: 60px;
        margin-top: 25px;
        }
      `;

      this.shadow.appendChild(style);

      const text = this.getAttribute("text");

      div.innerHTML = `
        <div class= "container">
          <button class= "container-button">${text}</button>
        </div>

      `;

      this.shadow.appendChild(div);
    }
  }
);
