function e(e,t,s,o){Object.defineProperty(e,t,{get:s,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},i=t.parcelRequire93c5;function a(e){let t=document.createElement("div"),s=document.createElement("style"),o=i("74hXr"),a=i("jgk0D"),r=i("dwqVN");t.innerHTML=`
    <div class= "welcome">
      <h1 class="welcome-title">Piedra Papel \xf3 Tijera</h1>
      <button-comp text="Empezar" class= "btn"></button-comp>
    </div>

    <div class= "welcome-hands">
      <img class="imagePaper" src="${o}" >
      <img class="imageRock" src="${a}" >
      <img class="imageScissors" src="${r}" >
    </div>
  `,s.textContent=`
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

    @media(min-width: 768px){
      .welcome-title{
        font-size: 80px;
        margin-top: 15%;
      }
    }

    // .welcome-button{
    //   font-family: 'Odibee Sans', cursive;
    //   border: 3px solid #001997;
    //   background-color: #006CFC;
    //   color: #D8FCFC;
    //   font-size: 45px;
    //   width: 260px;
    //   height: 60px;
    // }

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

    @media(min-width: 768px){
      .welcome-hands{
        position: fixed;
        left: 43%;
        right: 0%;
        top: 85%;
      }
    }
  `;let n=t.querySelector(".btn");return n.addEventListener("click",()=>{let t=location.pathname;"/welcome"==t&&e.goTo("/instructions")}),t.appendChild(s),t}null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire93c5=i),i.register("27Lyk",function(t,s){"use strict";e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>i,e=>i=e);var o,i,a={};o=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)a[t[s]]=e[t[s]]},i=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("74hXr",function(e,t){e.exports=new URL(i("27Lyk").resolve("eKOYG"),import.meta.url).toString()}),i.register("jgk0D",function(e,t){e.exports=new URL(i("27Lyk").resolve("g0sFE"),import.meta.url).toString()}),i.register("dwqVN",function(e,t){e.exports=new URL(i("27Lyk").resolve("223Fd"),import.meta.url).toString()}),i.register("iY6hz",function(e,t){e.exports=new URL(i("27Lyk").resolve("f01ZR"),import.meta.url).toString()}),i.register("4sGPP",function(e,t){e.exports=new URL(i("27Lyk").resolve("dnYTh"),import.meta.url).toString()}),i("27Lyk").register(JSON.parse('{"dZpbI":"index.0317685b.js","eKOYG":"papel.ab65c5a6.png","g0sFE":"piedra.6f0bf827.png","223Fd":"tijera.9337ed93.png","f01ZR":"resultado-ganaste.b7b00fbf.png","dnYTh":"resultado-perdiste.ef45a8e0.png"}'));const r={data:{currentGame:{myPlay:"",computerPlay:""},history:[{}]},listeners:[],getState(){let e=localStorage.getItem("currentState");return JSON.parse(e)},setState(e){localStorage.setItem("currentState",JSON.stringify(e))},subscribe(e){this.listeners.push(e)},setMove(e){let t=this.getState();for(let s of(t.currentGame.myPlay=e,t.currentGame.computerPlay=this.computerPlayOption(),t.history.push(t.currentGame),localStorage.setItem("currentState",JSON.stringify(t)),this.listeners))s(t)},computerPlayOption:()=>["piedra","papel","tijera"][Math.floor(3*Math.random())],setPlayComputer(){let e=this.computerPlayOption();this.setState({data:{currentGame:{myPlay:"undefined",computerPlay:e}},history:[],points:{computer:0,player:0}})},whoWins(e,t){let s=["piedra"==e&&"tijera"==t,"papel"==e&&"piedra"==t,"tijera"==e&&"papel"==t].includes(!0),o=["piedra"==t&&"tijera"==e,"papel"==t&&"piedra"==e,"tijera"==t&&"papel"==e].includes(!0);return!!s||!o&&void 0},restartScore(){let e=r.getState(),t=e.history=[];r.setState(t)}},n=[{path:/\/instructions/,handler:function(e){let t=document.createElement("div"),s=document.createElement("style"),o=i("74hXr"),a=i("jgk0D"),r=i("dwqVN");t.innerHTML=`
    <div class= "container">
      <h1 class="container-title">Presion\xe1 jugar y eleg\xed: piedra papel o tijera antes de que pasen los 3 segundos.</h1>
      <button-comp text="Jugar" class = "btn"></button-comp>
    </div>

    <div class= "welcome-hands">
      <img class="imagePaper" src="${o}" >
      <img class="imageRock" src="${a}" >
      <img class="imageScissors" src="${r}" >
    </div>
  `,s.textContent=`
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


  `;let n=t.querySelector(".btn");return n.addEventListener("click",()=>{let t=location.pathname;"/instructions"==t&&e.goTo("/jugada")}),t.appendChild(s),t}},{path:/\/welcome/,handler:a},{path:/\/desafio-mod5\/welcome/,handler:a},{path:/\/jugada/,handler:function(e){let t=document.createElement("div"),s=document.createElement("style"),o=i("74hXr"),a=i("jgk0D"),n=i("dwqVN"),c=r.getState();(void 0==c||null==c||""==c)&&r.setState({currentGame:{myPlay:"undefined",computerPlay:"undefined"},history:[],points:{computer:0,player:0}}),t.innerHTML=`
        <div class= "player-hands">
            <img class="imagePaper"  id= "paperComputer" src="${o}" >
            <img class="imageRock" id= "rockComputer" src="${a}" >
            <img class="imageScissors" id= "scissorsComputer" src="${n}" >
        </div>

        <count-down id= "countdown"></count-down>


        <div class= "hands">
            <img class="imageScissors desactive"  id="scissors" src="${n}" >
            <img class="imageRock desactive"  id="rock" src="${a}" >
            <img class="imagePaper desactive"  id="paper" src="${o}" >
        </div>
    

  `,s.textContent=`
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



        `;let l=t.querySelector("#rock"),d=t.querySelector("#paper"),p=t.querySelector("#scissors");l.addEventListener("click",()=>{l.classList.replace("desactive","active"),d.classList.replace("active","desactive"),p.classList.replace("active","desactive")}),d.addEventListener("click",()=>{d.classList.replace("desactive","active"),l.classList.replace("active","desactive"),p.classList.replace("active","desactive")}),p.addEventListener("click",()=>{p.classList.replace("desactive","active"),l.classList.replace("active","desactive"),d.classList.replace("active","desactive")});let u=setInterval(()=>{!0===l.classList.contains("active")&&r.setMove("piedra"),!0===d.classList.contains("active")&&r.setMove("papel"),!0===p.classList.contains("active")&&r.setMove("tijera"),clearInterval(u)},4e3),m=setInterval(()=>{let e=r.getState(),s=t.querySelector("#rockComputer"),o=t.querySelector("#paperComputer"),i=t.querySelector("#scissorsComputer");"piedra"==e.currentGame.computerPlay?s.classList.add("active"):s.classList.add("desactive"),"papel"==e.currentGame.computerPlay?o.classList.add("active"):o.classList.add("desactive"),"tijera"==e.currentGame.computerPlay?i.classList.add("active"):i.classList.add("desactive"),clearInterval(m)},4050),h=setInterval(()=>{console.log("Redireccionando a la pantalla score");let t=location.pathname;"/jugada"==t&&e.goTo("/results"),clearInterval(h)},5550);return t.appendChild(s),t}},{path:/\/results/,handler:function(e){console.log("Soy la pagina results");let t=document.createElement("div"),s=document.createElement("style"),o=document.querySelector(".contenedor"),a=i("iY6hz"),n=i("4sGPP");var c=0,l=0;let d=r.getState(),p=d.history;for(let e of p){var u=r.whoWins(e.myPlay,e.computerPlay);console.log(u,"soy el win"),u&&(console.log("GANASTE"),c++,o.classList.add("colorWin"),o.classList.replace("colorLoose","colorWin"),t.innerHTML=`

    <div class="general">
      <div class="logo-result">
        <img src="${a}" class="win" alt="">
        <img src="${n}" class="loose" alt="">
      </div>


      <div class="score">
        <h1 class="scoreTitle">Score</h1>
        <h2 class= "scoreVos">Vos: ${c}</h2>
        <h2 class= "scoreMaquina">M\xe1quina: ${l}</h2>
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
    <h1 class="poster-message">\xa1Score Reseteado!</h1>
  </div>


        `),"colorWin"==o.className&&o.classList.remove("colorLoose"),!1==u&&(console.log("PERDISTE"),l++,o.classList.replace("colorWin","colorLoose"),t.innerHTML=`

      <div class="general">
        <div class="logo-result">
          <img src="${n}" class="win" alt="">
        </div>


      <div class="score">
        <h1 class="scoreTitle">Score</h1>
        <h2 class= "scoreVos">Vos: ${c}</h2>
        <h2 class= "scoreMaquina">M\xe1quina: ${l}</h2>
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
    <h1 class="poster-message">\xa1Score Reseteado!</h1>
  </div>


        `),void 0==u&&(console.log("PERDISTE"),o.classList.add("colorLoose"),o.classList.replace("colorWin","colorLoose"),t.innerHTML=`

      <div class="general">
        <div class="logo-result">
          <h1 class="empateTitle">EMPATE</h1>
        </div>


      <div class="score">
        <h1 class="scoreTitle">Score</h1>
        <h2 class= "scoreVos">Vos: ${c}</h2>
        <h2 class= "scoreMaquina">M\xe1quina: ${l}</h2>
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
    <h1 class="poster-message">\xa1Score Reseteado!</h1>
  </div>


        `)}s.textContent=`

        .contenedor{
            height: 100vh;
        }

        .empateTitle{
          font-family: 'Odibee Sans', cursive;
          font-size: 45px;
        }

        .colorWin{
          background-color: rgba(136, 137, 73, 0.9);
        }

        .colorLoose{
          background-color: rgba(137, 73, 73, 0.9);
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

        @media(min-width: 768px){
          .score{
            margin: 60px;
          }
        }

        @media(min-width: 768px){
          .general{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
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


        @media(min-width: 768px){
          .poster-restart-score{
            margin-left: 70vh;

          }
        }

        .on{
          display: inherit;
        }
        
        .off{
          display: none;
        }

        .poster-quit{
          text-align: end;
          margin-right: 15px;
          background: white;
          cursor: pointer
        }

        .opacityDiv{
          opacity: 50%;
        }

    
    `;let m=t.querySelector(".boton-volver"),h=t.querySelector(".boton-reset"),g=t.querySelector(".poster-restart-score"),v=t.querySelector(".quit"),f=t.querySelector(".general");return m.addEventListener("click",()=>{let t=location.pathname;"/results"==t&&e.goTo("/jugada")}),h.addEventListener("click",()=>{r.restartScore(),g.classList.replace("off","on"),g.classList.contains("on")&&f.classList.add("opacityDiv")}),v.addEventListener("click",()=>{g.classList.replace("on","off"),f.classList.contains("opacityDiv")&&f.classList.replace("opacityDiv","f")}),t.appendChild(s),t}}];customElements.define("button-comp",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=document.createElement("div"),t=document.createElement("style");t.innerHTML=`
        .container-button{
          font-family: 'Odibee Sans', cursive;
        border: 3px solid #001997;
        background-color: #006CFC;
        color: #D8FCFC;
        font-size: 45px;
        width: 260px;
        height: 60px;
        margin-top: 25px;
        cursor: pointer;
        }

        @media(min-width: 768px){
          .container-button{
            width: 336px;
            height: 87px;
            border-radius: 10px;
          }
        }
      `,this.shadow.appendChild(t);let s=this.getAttribute("text");e.innerHTML=`
        <div class= "container">
          <button class= "container-button">${s}</button>
        </div>

      `,this.shadow.appendChild(e)}}),customElements.define("count-down",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=document.createElement("div"),t=document.createElement("style"),s=3;var o=setInterval(()=>{console.log("Soy el time",s),e.innerHTML=`
                    <h1 class= "counter">${s}</h1>
                    `,--s<1&&(clearInterval(o),setTimeout(()=>{this.classList.add("end")},1e3))},1e3);t.textContent=`
                .counter{
                    font-family: 'Odibee Sans', cursive;
                    font-size: 65px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 70%;
                }

                @media(min-width: 768px){
                  .counter{
                    font-family: 'Odibee Sans', cursive;
                    font-size: 65px;
                    display: flex;
                    margin-top: 40vh;


                  }
                }
            `,this.shadow.appendChild(e),this.shadow.appendChild(t)}}),function(){let e=document.querySelector(".contenedor");!function(e){function t(e){history.pushState({},"",e),s(e)}function s(s){for(let o of n)if(o.path.test(s)){let s=o.handler({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(s)}}"/desafio-mod5/"==location.pathname&&t("/desafio-mod5/welcome"),"/"==location.pathname&&t("/welcome"),s(location.pathname)}(e)}();
//# sourceMappingURL=index.0317685b.js.map
