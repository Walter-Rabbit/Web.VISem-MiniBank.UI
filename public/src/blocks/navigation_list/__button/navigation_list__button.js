export default function navigation_list__button() {
  window.addEventListener('load', function () {
    let address = document.URL.split('/');
    let page = address[address.length - 1];

    let element = document.getElementById(page.split('.')[0]);

    if (element != null) {
      element.style.background = '#ffb300';
    }
  });
}
