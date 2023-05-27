import { state } from "../../state";

export function resultsPage(param) {
  console.log("Soy la pagina results");

  const div = document.createElement("div");
  const style = document.createElement("style");

  const imageResultWin = require("../../images/resultado-ganaste.png");
  const imageResultLoose = require("../../images/resultado-perdiste.png");

  //TODO: En la etiqueta P colocar con signo pesos y corchetes o como se llame que esta mi jugada en history y lo mismo con la jugada de la compu

  div.innerHTML = `


    <div class="general">
      <div class="logo-result">
        <img src="${imageResultWin}" class="win" alt="">
        <img src="${imageResultLoose}" class="loose" alt="">
      </div>


      <div class="score">
        <h1 class="scoreTitle">Score</h1>
        <h2 class= "scoreVos">Vos:  1</h2>
        <h2 class= "scoreMaquina">Máquina: 2</h2>
      </div>

      <div class="buttons">
        <button-comp class="boton-volver" text="Volver a jugar"></button-comp>
        <button-comp class="boton-reset" text="Resetear Score"></button-comp>
      </div> 
    </div>

    <div class="off poster-restart-score">
    <div class="poster-quit">
      <h2 class="quit">X</h2>
    </div>
    <h1 class="poster-message">¡Score Reseteado!</h1>
  </div>


        `;

  style.textContent = `

        .contenedor{
            height: 100vh;
        }

        div{
            background-color: rgba(136, 137, 73, 0.9);;
        }

        .logo-result{
            text-align: center;
            padding: 20px;
        }

        // .win{
        //     display: none;
        //     width: 250px;
        //     heigth: 250px;
        // }

        .loose{
            display: none;
            width: 250px;
            heigth: 250px;
        }


        .score{
            font-family: 'Odibee Sans', cursive;
            display: flex;
            flex-direction: column;
            align-items: end;
            padding-right: 30px;
            border: solid black 5px;
            border-radius: 25px;
            width: 300px;
            height: 170px;
            margin-left: 40px;
            background: white;
        }

        h2{
            font-family: 'Odibee Sans', cursive;
            padding: 5px;
            margin: 0px;
        }

        .buttons{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .poster-restart-score{
          font-family: 'Odibee Sans', cursive;
          border: solid black 4px;
          border-radius: 20px;
          padding: 10px;
          text-align: center;
          position: absolute;
          top: 20vh;
          left: 14vh;
          background: white;
          color: black;
        }

        .on{
          transition: 1.5s;
          display: inherit;
        }
        
        .off{
          transition: 1.5s;
          display: none;
        }

        .poster-quit{
          text-align: end;
          margin-right: 15px;
          background: white;
        }

        .opacityDiv{
          opacity: 50%;
        }

    
    `;

  const botonVolver = div.querySelector(".boton-volver");
  const botonReset = div.querySelector(".boton-reset");
  const posterRestart = div.querySelector(".poster-restart-score");
  const quitBottom = div.querySelector(".quit");
  const general = div.querySelector(".general");

  botonVolver.addEventListener("click", () => {
    const path = location.pathname;
    if (path == "/results") {
      param.goTo("/jugada");
    }
  });

  botonReset.addEventListener("click", () => {
    //TODO: Aca deberia resetear el history. ¿Como?, solo dios y chatGPT lo saben.
    state.restartScore();
    console.log("Score reseteado");
    posterRestart.classList.replace("off", "on");

    if (posterRestart.classList.contains("on")) {
      general.classList.add("opacityDiv");
    }
  });

  quitBottom.addEventListener("click", () => {
    posterRestart.classList.replace("on", "off");
    if (general.classList.contains("opacityDiv")) {
      //Clase "f" no existe es solo para que no tenga efectos
      general.classList.replace("opacityDiv", "f");
    }
  });

  const myPlayScore = 0;
  const computerPlayScore = 0;

  const currentState = state.getState();

  const myPlayState = currentState.currentGame.myPlay;
  const computerPlayState = currentState.currentGame.computerPlay;

  //TODO: La linea 179 devuelve true o false segun quien gana o pierda. Habria que hacer un if que cuando retorne true sume un punto a mi variable myPlayScore++ o algo asi
  console.log(state.whoWins(myPlayState, computerPlayState));

  div.appendChild(style);

  return div;
}

//TODO: 1) Ver por que no funciona el transition, 2) Ver como se suma el score. Calculo que usando el Whowins y corchetes de eso, 3) Como hacer que cuando perdes pase a un color con el logo de perdiste
