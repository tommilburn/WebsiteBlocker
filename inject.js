safari.self.addEventListener("message", blockPage, false);

function blockPage(msgEvent) {
  console.log(msgEvent);
  if (msgEvent.name === "block") {
    document.getElementsByTagName('body')[0].innerHTML = "<h1>You should be working!</h1>";
  }
}