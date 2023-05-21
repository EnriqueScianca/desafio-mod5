import { state } from "../../state"

export function resultsPage(param){
    console.log("Soy la pagina results")
    console.log(state.getState())

    const div = document.createElement('div')
    const style = document.createElement('style')

    const imageResultWin = require("../../images/resultado-ganaste.png")
    const imageResultLoose = require("../../images/resultado-perdiste.png")




//TODO: En la etiqueta P colocar con signo pesos y corchetes o como se llame que esta mi jugada en history y lo mismo con la jugada de la compu



    div.innerHTML = `
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
    <button-comp text="Volver a jugar"></button-comp>
    <button-comp text="Resetear Score"></button-comp>
  </div>   
    `


    style.textContent = `

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
    
    `

    div.appendChild(style)


    return div
    

}
