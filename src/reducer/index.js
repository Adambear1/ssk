// const navigator = navigator || window.navigator || ""
const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;

const data = {
  height: HEIGHT,
  width: WIDTH,
  // battery: navigator && navigator.getBattery().then(({
  //   level
  // }) => level),
  isSmall: WIDTH < 845,
  isMed: WIDTH < 1180,
  env: window.location.href.includes("http://localhost") ? "dev" : "prod"
}

export default function reducer(
  state = data, {
    type,
    payload
  }
){
  switch (type) {
    case "SETTINGS_CHANGE":
      return {...state, ...payload}

    default:
      return state;
  }
};