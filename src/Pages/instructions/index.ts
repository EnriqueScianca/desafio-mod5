// export function instructionsPage(params) {
export function instructionsPage(param) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  const imagePaper = require("../../images/papel.png");
  const imageRock = require("../../images/piedra.png");
  const imageScissors = require("../../images/tijera.png");

  // <button class= "container-button">Empezar</button>

  div.innerHTML = `
    <div class= "container">
      <h1 class="container-title">Presioná jugar y elegí: piedra papel o tijera antes de que pasen los 3 segundos.</h1>
      <button-comp text="Jugar" class = "btn"></button-comp>
    </div>

    <div class= "welcome-hands">
      <img class="imagePaper" src="${imagePaper}" >
      <img class="imageRock" src="${imageRock}" >
      <img class="imageScissors" src="${imageScissors}" >
    </div>
  `;

  style.textContent = `
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

  @media(min-width: 768px){
    .container-title{
      max-width: 40vh;
      font-size: 45px;
      margin-top: 20vh;
    }
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
    position: fixed;
    left: 13%;
    right: 0%;
    top: 82%;
  } 

  @media(min-width: 768px){
    .welcome-hands{
      position: fixed;
      left: 43%;
      right: 0%;
      top: 85%;
    }
  }

  //TODO: RESPONSIVE


  `;

  const btn = div.querySelector(".btn");

  btn.addEventListener("click", () => {
    const path = location.pathname;

    if (path == "/desafio-mod5/instructions") {
      param.goTo("/desafio-mod5/jugada");
    }

    if (path == "/instructions") {
      param.goTo("/jugada");
    }
  });

  div.appendChild(style);
  return div;
}
