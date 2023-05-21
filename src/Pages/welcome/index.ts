export function welcomePage(param) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  const imagePaper = require("../../images/papel.png");
  const imageRock = require("../../images/piedra.png");
  const imageScissors = require("../../images/tijera.png");

  div.innerHTML = `
    <div class= "welcome">
      <h1 class="welcome-title">Piedra Papel ó Tijera</h1>
      <button-comp text="Empezar" class= "btn"></button-comp>
    </div>

    <div class= "welcome-hands">
      <img class="imagePaper" src="${imagePaper}" >
      <img class="imageRock" src="${imageRock}" >
      <img class="imageScissors" src="${imageScissors}" >
    </div>
  `;

  style.textContent = `
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
      position: fixed;
      left: 13%;
      right: 0%;
      top: 82%;
      // top: 77%;
    }   
  `;

  const btn = div.querySelector(".btn");
  // btn?.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   console.log("Boton Empezar funcionando correctamente");
  // });

  btn.addEventListener('click', () => {
    const path = location.pathname
    if(path == "/welcome"){
      param.goTo("/instructions")
    }
  })


  div.appendChild(style);
  return div;
}
