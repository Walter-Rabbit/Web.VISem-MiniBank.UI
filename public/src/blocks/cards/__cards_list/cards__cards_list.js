window.addEventListener('load', async function cards__cards_list() {
  let ul = document.getElementById('main_page_cards');

  if (ul === null) {
    return;
  }

  let storage = window.localStorage.getItem('cards');

  if (storage !== null) {
    ul.innerHTML = storage;
    return;
  }

  let cards_list = document.getElementById('main_page_cards')

  let cards = await fetch('https://639897dc044fa481d6a38d71.mockapi.io/Cards', {
    method: 'GET'
  })
    .then(response => response.text())
    .then(text => JSON.parse(text));

  for (let c of cards) {
    let li = document.createElement('li');
    let card = document.createElement('div');
    card.className = 'card';

    let div_balance = document.createElement('div');
    div_balance.className = 'card__money';
    div_balance.textContent = c['balance'] + 'руб.';
    card.append(div_balance);

    let image = document.createElement('img');
    image.className = "card__img";
    image.src = c['cardImage'];
    card.append(image);

    let div_type = document.createElement('div');
    div_type.className = 'card__type';
    div_type.textContent = c['type'];
    card.append(div_type);

    li.append(card);
    cards_list.append(li);
  }

  window.localStorage.setItem('cards', ul.innerHTML);
});
