type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  myPlay: Jugada;
  computerPlay: Jugada;
};

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: [{}],
  },

  listeners: [],

  getState() {
    const currentState = localStorage.getItem("currentState");
    return JSON.parse(currentState!);
  },

  setState(newState) {
    localStorage.setItem("currentState", JSON.stringify(newState));
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    // console.log("Soy el current state desde el state", currentState);
    currentState.currentGame.myPlay = move;
    currentState.currentGame.computerPlay = this.computerPlayOption();

    currentState.history.push(currentState.currentGame);

    //Seteo los datos en el localStorage
    localStorage.setItem("currentState", JSON.stringify(currentState));

    for (let cb of this.listeners) {
      cb(currentState);
    }
  },

  computerPlayOption() {
    const options = ["piedra", "papel", "tijera"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
  },

  setPlayComputer() {
    const computerPlay = this.computerPlayOption();

    const dataState = {
      data: {
        currentGame: { myPlay: "undefined", computerPlay: computerPlay },
      },
      history: [],
      points: {
        computer: 0,
        player: 0,
      },
    };

    this.setState(dataState);
  },

  // pushToHistory(play: Game) {
  //   const currentState = this.getState();
  //   currentState.history(play);
  // },

  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    const ganoConPiedra = myPlay == "tijera" && computerPlay == "papel";
    const ganoConPapel = myPlay == "papel" && computerPlay == "piedra";
    const ganoConTijera = myPlay == "tijera" && computerPlay == "papel";

    const playerWin = [ganoConPiedra, ganoConPapel, ganoConTijera].includes(
      true
    );

    const ganaConPidra = computerPlay == "tijera" && myPlay == "papel";
    const ganaConPapel = computerPlay == "papel" && myPlay == "piedra";
    const ganaConTijera = computerPlay == "tijera" && myPlay == "papel";

    const computerWin = [ganaConPidra, ganaConPapel, ganaConTijera].includes(
      true
    );

    if (playerWin) {
      return true;
    }

    if (computerWin) {
      return false;
    }
  },

  restartScore() {
    const currentState = state.getState();
    const historyReset = (currentState.history = []);
    state.setState(historyReset);
  },
};

export { state };
