/******/ "use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./public/src/blocks/cards/__cards_list/cards__cards_list.js
function cards__cards_list() {
  window.addEventListener('load', async function () {
    let ul = document.getElementById('main_page_cards');

    if (ul === null) {
      return;
    }

    let client_id = window.localStorage.getItem('clientId');
    if (client_id == null) {
      client_id = window.prompt(
        'Enter client id: ',
        '00000000-0000-0000-0000-000000000000',
      );

      window.localStorage.setItem('clientId', client_id);
    }

    let cards_list = document.getElementById('main_page_cards');

    let cards = await fetch(
      'http://localhost:3000/accounts/get-all-by-client' +
        '?client-id=' +
        client_id,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    applyCards(cards, 'Счёт', cards_list);

    cards = await fetch(
      'http://localhost:3000/credits/get-all-by-client' +
        '?client-id=' +
        client_id,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    applyCards(cards, 'Кредит', cards_list);

    cards = await fetch(
      'http://localhost:3000/deposits/get-all-by-client' +
        '?client-id=' +
        client_id,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    applyCards(cards, 'Депозит', cards_list);
  });

  function applyCards(cards, type, cards_list) {
    for (let c of cards) {
      let li = document.createElement('li');
      let card = document.createElement('div');
      card.className = 'card';

      let div_balance = document.createElement('div');
      div_balance.className = 'card__money';
      div_balance.textContent = c['amount'] + 'руб.';
      card.append(div_balance);

      // TODO: Mock some image
      /*let image = document.createElement('img');
                                    image.className = 'card__img';
                                    image.src = c['cardImage'];
                                    card.append(image);*/

      let image = document.createElement('img');
      image.className = 'card__img';
      image.src = '../../img/place_holder_card.png';
      card.append(image);

      let div_type = document.createElement('div');
      div_type.className = 'card__type';
      div_type.textContent = type;
      card.append(div_type);

      li.append(card);
      cards_list.append(li);
    }
  }
}

;// CONCATENATED MODULE: ./public/src/blocks/content/__item_list/content__item_list__transactions.js
function content__item_list__transactions() {
  window.addEventListener('load', async function () {
    let ul = document.getElementById('transaction_page_history');

    if (ul === null) {
      return;
    }

    let client_id = window.localStorage.getItem('clientId');
    if (client_id == null) {
      client_id = window.prompt(
        'Enter client id: ',
        '00000000-0000-0000-0000-000000000000',
      );

      window.localStorage.setItem('clientId', client_id);
    }

    let transactions = await fetch(
      'http://localhost:3000/transaction/all-by-client' +
        '?client-id=' +
        client_id,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    for (let tr of transactions) {
      let li = document.createElement('li');
      let div = document.createElement('div');
      div.className = 'item';
      let transaction = document.createElement('div');
      transaction.className = 'item';

      let p_amount = document.createElement('p');
      let amount = tr['amount'];
      if (amount >= 0) {
        p_amount.className = 'transaction__positive_balance';
      } else {
        p_amount.className = 'transaction__negative_balance';
      }
      p_amount.textContent = amount + 'руб.';
      transaction.append(p_amount);

      let p_description = document.createElement('p');
      p_description.className = 'item__description';
      p_description.textContent = tr['receiverProductId'];
      transaction.append(p_description);

      let p_date = document.createElement('p');
      p_date.className = 'transaction__date';
      let date = new Date(tr['date']);
      p_date.textContent = `${date.getDate() + 1}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`;
      transaction.append(p_date);

      li.append(transaction);
      ul.append(li);
    }
  });
}

;// CONCATENATED MODULE: ./public/src/blocks/footer/__loading_time/footer__loading_time.js
function check_speed() {
  sessionStorage.now = Date.now();
  setTimeout(check_speed, 25);
}

function footer__loading_time() {
  window.addEventListener('load', function () {
    let now = Date.now();
    if (sessionStorage.now) {
      let loaded_in = now - parseInt(sessionStorage.now);
      document.getElementById('loading_time').innerHTML = loaded_in.toString();
    }
    check_speed();
  });
}

;// CONCATENATED MODULE: ./public/src/blocks/history/__history_list/history__history_list.js
function history__history_list() {
  window.addEventListener('load', async function () {
    let ul = document.getElementById('main_page_history');

    if (ul === null) {
      return;
    }

    let section = document.getElementById('main_page_section_history');

    let history_list = document.getElementById('main_page_history');

    let client_id = window.localStorage.getItem('clientId');
    if (client_id == null) {
      client_id = window.prompt(
        'Enter client id: ',
        '00000000-0000-0000-0000-000000000000',
      );

      window.localStorage.setItem('clientId', client_id);
    }

    let transactions = await fetch(
      'http://localhost:3000/transaction/all-by-client' +
        '?client-id=' +
        client_id,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    if (transactions.length > 0) {
      section.style.visibility = 'visible';
    }

    for (let tr of transactions) {
      let li = document.createElement('li');
      let transaction = document.createElement('div');
      transaction.className = 'transaction';

      let p_amount = document.createElement('p');
      let amount = tr['amount'];
      if (amount >= 0) {
        p_amount.className = 'transaction__positive_balance';
      } else {
        p_amount.className = 'transaction__negative_balance';
      }
      p_amount.textContent = amount + 'руб.';
      transaction.append(p_amount);

      let p_date = document.createElement('p');
      p_date.className = 'transaction__date';
      let date = new Date(tr['date']);
      p_date.textContent = `${date.getDate() + 1}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`;
      transaction.append(p_date);

      let p_description = document.createElement('p');
      p_description.textContent = tr['receiverProductId'];
      p_description.style.visibility = 'hidden';
      p_description.style.height = '0';
      p_description.style.width = '0';
      transaction.append(p_description);

      li.append(transaction);
      history_list.append(li);
    }

    if (section !== null) {
      if (history_list !== null) {
        section.style.visibility = 'visible';
      } else {
        section.style.visibility = 'hidden';
      }
    }
  });
}

;// CONCATENATED MODULE: ./public/src/blocks/navigation_list/__button/navigation_list__button.js
function navigation_list__button() {
  window.addEventListener('load', function () {
    let address = document.URL.split('/');
    let page = address[address.length - 1];

    let element = document.getElementById(page.split('.')[0]);

    if (element != null) {
      element.style.background = '#ffb300';
    }
  });
}

;// CONCATENATED MODULE: ./public/src/blocks/function_list/__button/function_list__button__make_transaction.js
function function_list__button__make_transaction() {
  let ul = document.getElementById('main_page_history');

  let li = document.createElement('li');

  let div = document.createElement('div');
  div.className = 'transaction';

  let p1 = document.createElement('p');

  let number = Number(window.prompt('Enter RUB transfer amount: ', '100'));

  if (number === 0) {
    return;
  }

  if (number < 0) {
    window.alert('Amount must be positive number');
    return;
  }

  p1.className = 'transaction__negative_balance';
  p1.textContent = '-' + number.toString() + 'руб.';

  let p2 = document.createElement('p');
  p2.className = 'transaction__date';
  let date = new Date();
  p2.textContent = `${date.getDate() + 1}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  let p3 = document.createElement('p');
  p3.textContent = 'Valery Shevchenko';
  p3.style.visibility = 'hidden';
  p3.style.height = '0';
  p3.style.width = '0';

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  li.appendChild(div);
  ul.insertBefore(li, ul.firstChild);

  window.localStorage.setItem('history', ul.innerHTML);

  let section = document.getElementsByClassName('history');
  section[0].style.visibility = 'visible';
}

;// CONCATENATED MODULE: ./public/src/imports/imports.js







cards__cards_list();
content__item_list__transactions();
footer__loading_time();
history__history_list();
navigation_list__button();

