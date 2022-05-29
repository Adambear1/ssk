const data = {
  height: window.screen.height,
  width: window.screen.width,
  battery: navigator.getBattery().then(({
    level
  }) => level),
  env: window.location.href.includes("http://localhost") ? "dev" : "prod"
}

const reducer = (
  state = data, {
    type,
    payload
  }
) => {
  switch (type) {
    case "SETTINGS_CHANGE":
      return state

    default:
      return state;
  }
};

export default reducer;