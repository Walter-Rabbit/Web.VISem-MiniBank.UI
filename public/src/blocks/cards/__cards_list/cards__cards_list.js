export default function cards__cards_list() {
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
      '/accounts/get-all-by-client' + '?client-id=' + client_id,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    applyCards(cards, 'Счёт', cards_list);

    cards = await fetch(
      '/credits/get-all-by-client' + '?client-id=' + client_id,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));

    applyCards(cards, 'Кредит', cards_list);

    cards = await fetch(
      '/deposits/get-all-by-client' + '?client-id=' + client_id,
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
