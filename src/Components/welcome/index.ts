// customElements.define(
//   "welcome-page",
//   class extends HTMLElement {
//     shadow: ShadowRoot;

//     constructor() {
//       super();
//       this.shadow = this.attachShadow({ mode: "open" });
//     }

//     connectedCallback() {
//       // *TODO: Aca creo que va la accion de que hace cuando hacemos click en empezar.

//       const style = document.createElement("style");
//       style.innerHTML = `

//       .welcome{
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//       }

//       .welcome-title{
//         font-family: 'Odibee Sans', cursive;
//         color: #009048;
//         font-size: 80px;
//         text-align: center;
//         padding: 40px;
//         margin: 0px;
//       }

//       .welcome-button{
//         font-family: 'Odibee Sans', cursive;
//         border: 3px solid #001997;
//         background-color: #006CFC;
//         color: #D8FCFC;
//         font-size: 45px;
//         width: 260px;
//         height: 60px;
//       }

//       // .welcome-hands{
//       //   position: fixed;
//       //   bottom: -26px;
//       //   margin-left: 12%
//       // }

//       .welcome-hands{
//         position: absolute;
//         left: 13%;
//         right: 0%;
//         // top: 82%;
//         top: 77%;
//       }
//       `;

//       this.shadow.appendChild(style);
//       this.render();
//     }

//     render() {
//       const div = document.createElement("div");
//       const imagePaper = require("../../images/papel.png");
//       const imageRock = require("../../images/piedra.png");
//       const imageScissors = require("../../images/tijera.png");
//       // const imageBackground = require("../../images/fondo.png");

//       div.innerHTML = `
//       <div class= "welcome">
//         <h1 class="welcome-title">Piedra Papel ó Tijera</h1>
//         <button class="welcome-button">Empezar</button>
//       </div>

//       <div class= "welcome-hands">
//         <img class="imagePaper" src="${imagePaper}" >
//         <img class="imageRock" src="${imageRock}" >
//         <img class="imageScissors" src="${imageScissors}" >
//       </div>

//         `;
//       const button = div.querySelector(".welcome-button");
//       button?.addEventListener("click", (e) => {
//         //*TODO: Cargar los datos del router para cambiar a la page de Inicio

//         e.preventDefault();
//         console.log("Componente Welcome funcionando");
//       });

//       this.shadow.appendChild(div);
//     }
//   }
// );

customElements.define(
  "welcome-page",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" }) as ShadowRoot;
    constructor() {
      super();
      this.render();
    }

    connectedCallback() {
      //TODO: Funcionamiento del boton en interaccion con el state y el router

      const button = this.shadow.querySelector(".welcome-button");
      button?.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Componente Welcome funcionando");
      });
    }

    render() {
      const div = document.createElement("div");
      const imagePaper = require("../../images/papel.png");
      const imageRock = require("../../images/piedra.png");
      const imageScissors = require("../../images/tijera.png");
      // const imageBackground = require("../../images/fondo.png");

      div.innerHTML = `
      <div class= "welcome">
        <h1 class="welcome-title">Piedra Papel ó Tijera</h1>
        <button class="welcome-button">Empezar</button>
      </div>

      <div class= "welcome-hands">
        <img class="imagePaper" src="${imagePaper}" >
        <img class="imageRock" src="${imageRock}" >
        <img class="imageScissors" src="${imageScissors}" >
      </div>
      
        `;

      this.shadow.appendChild(div);

      const style = document.createElement("style");
      style.innerHTML = `

      .welcome{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .welcome-title{
        font-family: 'Odibee Sans', cursive;
        color: #009048;
        font-size: 80px;
        text-align: center;
        padding: 40px;
        margin: 0px;
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

      // .welcome-hands{
      //   position: fixed;
      //   bottom: -26px;
      //   margin-left: 12%
      // }

      .welcome-hands{
        position: absolute;
        left: 13%;
        right: 0%;
        // top: 82%;
        top: 77%;
      }
      `;

      this.shadow.appendChild(style);
    }
  }
);
