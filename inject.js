safari.self.addEventListener("message", blockPage, false);

function blockPage(msgEvent) {
  console.log(msgEvent);
  if (msgEvent.name === "block") {
    document.location = safari.extension.baseURI + 'blocked.html';
  }
}