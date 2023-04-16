export default function content__item_list__transactions() {
  window.addEventListener('load', async function () {
    let ul = document.getElementById('transaction_page_history');

    if (ul === null) {
      return;
    }

    let savedLis = window.localStorage.getItem('history');

    if (savedLis !== null) {
      let tempUl = document.createElement('ul');
      tempUl.innerHTML = savedLis;

      for (let elm of tempUl.children) {
        let li = document.createElement('li');
        let div = document.createElement('div');
        div.className = 'item';

        let p1 = document.createElement('p');
        p1.className = 'item__title';
        p1.textContent = elm.children[0].children[0].textContent;

        let p2 = document.createElement('p');
        p2.className = 'item__description';
        p2.textContent = elm.children[0].children[2].textContent;

        let p3 = document.createElement('p');
        p3.className = 'item__date';
        p3.textContent = elm.children[0].children[1].textContent;

        div.append(p1);
        div.append(p2);
        div.append(p3);

        li.append(div);
        ul.append(li);
      }
    } else {
      let transactions = await fetch(
        'https://639897dc044fa481d6a38d71.mockapi.io/Transaction',
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
        p_description.textContent = tr['target'];
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
    }
  });
}
