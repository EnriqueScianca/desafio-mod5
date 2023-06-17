import { state } from "../../state";

export function playPage(param) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  const imagePaper = require("../../images/papel.png");
  const imageRock = require("../../images/piedra.png");
  const imageScissors = require("../../images/tijera.png");

  const initLocalState = state.getState();

  if (
    initLocalState == undefined ||
    initLocalState == null ||
    initLocalState == ""
  ) {
    const initialState = {
      currentGame: { myPlay: "undefined", computerPlay: "undefined" },
      history: [],
      points: {
        computer: 0,
        player: 0,
      },
    };

    state.setState(initialState);
  }

  div.innerHTML = `
        <div class= "player-hands">
            <img class="imagePaper"  id= "paperComputer" src="${imagePaper}" >
            <img class="imageRock" id= "rockComputer" src="${imageRock}" >
            <img class="imageScissors" id= "scissorsComputer" src="${imageScissors}" >
        </div>

        <count-down id= "countdown"></count-down>


        <div class= "hands">
            <img class="imageScissors desactive"  id="scissors" src="${imageScissors}" >
            <img class="imageRock desactive"  id="rock" src="${imageRock}" >
            <img class="imagePaper desactive"  id="paper" src="${imagePaper}" >
        </div>
    

  `;

  style.textContent = `
        .hands{
            position: fixed;
            // top: 79%;
            top: 82%;
            left:13%;
            right:0%;
            cursor: pointer;
        }

        @media(min-width: 768px){
          .hands{
            position: fixed;
            left: 43%;
            right: 0%;
            top: 85%;
          }
        }

        // .hands{
        //     position: absolute;
        //     left: 13%;
        //     right:0%;
        //     top 79%;
        //     background: red;
        //     width: 100%;
        // }

        .player-hands{
            transform: rotate(180deg);
            // text-align: center;
            position: fixed;
            // top: -8px;
            top: -35px;
            left: 13%;

        }

        @media(min-width: 768px){
          .player-hands{
            position: fixed;
            left: 43%;
          }
        }

        .end{
            display: none;
        }

        .desactive{
            opacity: 50%;
        }

        .active{
            transition:  0.5s;
            position: relative;
            bottom: 25px;
            padding: 10px;
        }



        `;
  const rock = div.querySelector("#rock");
  const paper = div.querySelector("#paper");
  const scissors = div.querySelector("#scissors");

  rock.addEventListener("click", () => {
    // console.log("Soy la piedra")
    rock.classList.replace("desactive", "active");
    paper.classList.replace("active", "desactive");
    scissors.classList.replace("active", "desactive");
  });

  paper.addEventListener("click", () => {
    // console.log("Soy el papel")
    paper.classList.replace("desactive", "active");
    rock.classList.replace("active", "desactive");
    scissors.classList.replace("active", "desactive");
  });

  scissors.addEventListener("click", () => {
    // console.log("Soy la tijera")
    scissors.classList.replace("desactive", "active");
    rock.classList.replace("active", "desactive");
    paper.classList.replace("active", "desactive");
  });

  const setMyPlay = setInterval(() => {
    switch (rock.classList.contains("active")) {
      case true:
        state.setMove("piedra");
        // console.log("La piedra es true")
        break;
      default:
      // console.log("La piedra es false")
    }

    switch (paper.classList.contains("active")) {
      case true:
        state.setMove("papel");
        // console.log("El papel es true")
        break;
      default:
      // console.log("El papel es false")
    }

    switch (scissors.classList.contains("active")) {
      case true:
        state.setMove("tijera");
        // console.log("La tijera es true")
        break;
      default:
      // console.log("La tijera es false")
    }

    // Tiempo 4000
    clearInterval(setMyPlay);
  }, 4000);

  const computerPlay = setInterval(() => {
    const currentState = state.getState();

    const computerRock = div.querySelector("#rockComputer");
    const computerPaper = div.querySelector("#paperComputer");
    const computerScissors = div.querySelector("#scissorsComputer");

    if (currentState.currentGame.computerPlay == "piedra") {
      computerRock.classList.add("active");
    } else {
      computerRock.classList.add("desactive");
    }

    if (currentState.currentGame.computerPlay == "papel") {
      computerPaper.classList.add("active");
    } else {
      computerPaper.classList.add("desactive");
    }

    if (currentState.currentGame.computerPlay == "tijera") {
      computerScissors.classList.add("active");
    } else {
      computerScissors.classList.add("desactive");
    }

    //Tiempo 4050
    clearInterval(computerPlay);
  }, 4050);

  //TODO: Redrieccionar a la pantalla de score y crear 1 boton que vaya resetee la jugada y 1 que vuelva a la pagina jugada.

  const redirectScore = setInterval(() => {
    console.log("Redireccionando a la pantalla score");

    const path = location.pathname;

    if (path == "/jugada") {
      param.goTo("/results");
    }
    // Tiempo 5550
    clearInterval(redirectScore);
  }, 5550);

  div.appendChild(style);
  return div;
}
