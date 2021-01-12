var commandPromptProperties = {
  cmdMessage: document.querySelector(".cmd"),
  cmdBlinker: document.getElementById("cursor"),
  cmd: "",
};
document.onkeypress = (event) => handleCommandPromptUI(event);

document.onkeydown = (event) => handleUserInput(event);

function handleCommandPromptUI(event) {
  commandPromptProperties.cmdBlinker.style.display = "none";
  event.keyCode === 13
    ? (commandPromptProperties.cmd = commandPromptProperties.cmd)
    : (commandPromptProperties.cmd += event.key);
  commandPromptProperties.cmdMessage.innerHTML = commandPromptProperties.cmd;
}

function handleUserInput(event) {
  if (event.keyCode === 13) {
    switch (commandPromptProperties.cmd) {
      case "coder profile":
        executeCommand(
          "https://https://www.linkedin.com/in/sundar-gautam-1339a8191/"
        );
        break;
      case "open java":
        executeCommand(
          "https://www.youtube.com/watch?v=eTXd89t8ngI&list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0&ab_channel=DurgaSoftwareSolutions"
        );
        break;
      case "open react":
        executeCommand("https://reactjs.org/");
        break;
      case "open meroshare":
        executeCommand("https://meroshare.cdsc.com.np/");
        break;          
      default:
        commandPromptProperties.cmd = "";
        alert("no such command");
        break;
    }
  }
  if (event.key === "Backspace") {
    commandPromptProperties.cmd = commandPromptProperties.cmd.slice(0, -1);
    commandPromptProperties.cmdMessage.innerHTML = commandPromptProperties.cmd;
  }
}

function executeCommand(url) {
  commandPromptProperties.cmd = "";
  window.open(url);
}

