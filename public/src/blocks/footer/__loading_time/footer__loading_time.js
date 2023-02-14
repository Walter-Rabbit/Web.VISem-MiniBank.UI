function check_speed() {
  sessionStorage.now = Date.now();
  setTimeout(check_speed, 25);
}

window.addEventListener("load", function footer__loading_time() {
  let now = Date.now();
  if ( sessionStorage.now ) {
    let loaded_in = now - parseInt(sessionStorage.now);
    document.getElementById("loading_time").innerHTML = loaded_in.toString();
  }
  check_speed();
});
