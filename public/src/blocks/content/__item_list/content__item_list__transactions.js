export default function content__item_list__transactions() {
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
      '/transactions/all-by-client' + '?client-id=' + client_id,
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
