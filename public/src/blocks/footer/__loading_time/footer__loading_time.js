function check_speed() {
  sessionStorage.now = Date.now();
  setTimeout(check_speed, 25);
}

export default function footer__loading_time() {
  window.addEventListener('load', function () {
    let now = Date.now();
    if (sessionStorage.now) {
      let loaded_in = now - parseInt(sessionStorage.now);
      document.getElementById('loading_time').innerHTML = loaded_in.toString();
    }
    check_speed();
  });
}
