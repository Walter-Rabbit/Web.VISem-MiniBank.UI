export default function content__item_list__profile() {
  window.addEventListener('load', async function () {
    let div = document.getElementById('profile_page');

    if (div == null) {
      return;
    }

    let user = await fetch('/users', {
      method: 'GET',
    })
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    div.className = 'item';

    let p_name = document.createElement('p');
    p_name.className = 'item__title';
    p_name.textContent = user['name'];
    div.append(p_name);

    let p_email = document.createElement('p');
    p_email.className = 'item__description';
    p_email.textContent = user['email'];
    div.append(p_email);

    let p_date = document.createElement('p');
    p_date.className = 'item__date';
    p_date.textContent = user['birthDate'];
    div.append(p_date);
  });
}
