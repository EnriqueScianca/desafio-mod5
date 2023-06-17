customElements.define(
  "count-down",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" }) as ShadowRoot;
    constructor() {
      super();
      this.render();
    }

    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");

      let time = 3;

      var timer = setInterval(() => {
        console.log("Soy el time", time);
        div.innerHTML = `
                    <h1 class= "counter">${time}</h1>
                    `;
        time--;

        if (time < 1) {
          clearInterval(timer);
          setTimeout(() => {
            this.classList.add("end");
          }, 1000);
        }
      }, 1000);

      style.textContent = `
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
            `;
      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
);
