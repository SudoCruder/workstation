function showMessage(tragetID, message) {
  if(document.getElementById(tragetID)) {
    document.getElementById(tragetID).textContent = message;
  }
}