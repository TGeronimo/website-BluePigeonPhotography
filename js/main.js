// FUNCTIONALITY THAT MAKES THE BUTTON DISAPPEARS WHEN AT THE TOP OF THE PAGE
window.addEventListener("DOMContentLoaded", event => {
  let topButton = document.getElementById("topButton");

  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
});