// customElements.define(
//   "instruction-page",
//   class extends HTMLElement {
//     shadow: ShadowRoot;

//     constructor() {
//       super();
//       this.shadow = this.attachShadow({ mode: "open" });
//     }
//     connectedCallback() {
//       const style = document.createElement("style");
//       style.innerHTML = `
//         .container{
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .container-title{
//           font-family: 'Odibee Sans', cursive;
//           color: #000000;
//           font-size: 40px;
//           text-align: center;
//           padding: 40px;
//           // margin: 0px;

//         }

//         .container-button{
//           font-family: 'Odibee Sans', cursive;
//         border: 3px solid #001997;
//         background-color: #006CFC;
//         color: #D8FCFC;
//         font-size: 45px;
//         width: 260px;
//         height: 60px;
//         margin-top: 25px;
//         }

//         .welcome-hands{
//           position: absolute;
//           left: 13%;
//           right: 0%;
//           top: 77%;
//         }
//       `;

//       this.shadow.appendChild(style);
//       this.render();
//     }

//     render() {
//       const div = document.createElement("div");
//       const imagePaper = require("../../images/papel.png");
//       const imageRock = require("../../images/piedra.png");
//       const imageScissors = require("../../images/tijera.png");

//       div.innerHTML = `
//         <div class= "container">
//           <h1 class="container-title">Presioná jugar y elegí: piedra papel o tijera antes de que pasen los 3 segundos.</h1>
//           <button class= "container-button">Empezar</button>
//         </div>

//         <div class= "welcome-hands">
//         <img class="imagePaper" src="${imagePaper}" >
//         <img class="imageRock" src="${imageRock}" >
//         <img class="imageScissors" src="${imageScissors}" >
//       </div>
//       `;

//       const button = div.querySelector(".container-button");
//       button?.addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log("Componente Instruction funcionando");
//       });
//       this.shadow.appendChild(div);
//     }
//   }
// );

customElements.define(
  "instruction-page",
  class extends HTMLElement {
    // shadow: ShadowRoot
    shadow = this.attachShadow({ mode: "open" }) as ShadowRoot;
    constructor() {
      super();
      this.render();
    }

    connectedCallback() {
      //TODO: Funcionamiento del boton en interaccion con el state y el router

      const button = this.shadow.querySelector(".container-button");
      button?.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Componente Instruction funcionando");
      });
    }

    render() {
      const div = document.createElement("div");
      const imagePaper = require("../../images/papel.png");
      const imageRock = require("../../images/piedra.png");
      const imageScissors = require("../../images/tijera.png");

      const style = document.createElement("style");
      style.innerHTML = `
        .container{
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container-title{
          font-family: 'Odibee Sans', cursive;
          color: #000000;
          font-size: 40px;
          text-align: center;
          padding: 40px;
          // margin: 0px;

        }

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

        .welcome-hands{
          position: absolute;
          left: 13%;
          right: 0%;
          top: 77%;
        }
      `;

      this.shadow.appendChild(style);

      div.innerHTML = `
        <div class= "container">
          <h1 class="container-title">Presioná jugar y elegí: piedra papel o tijera antes de que pasen los 3 segundos.</h1>
          <button class= "container-button">Empezar</button>
        </div>

        <div class= "welcome-hands">
        <img class="imagePaper" src="${imagePaper}" >
        <img class="imageRock" src="${imageRock}" >
        <img class="imageScissors" src="${imageScissors}" >
      </div>
      `;

      this.shadow.appendChild(div);
    }
  }
);
