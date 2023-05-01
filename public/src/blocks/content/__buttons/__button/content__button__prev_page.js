export default async function content__button__prev_page() {
  let page_number = window.localStorage.getItem('transaction-page-number');
  if (page_number == null) {
    page_number = '0';
  }

  page_number = Number(page_number) - 1;
  if (page_number < 0) {
    page_number = 0;
  }
  window.localStorage.setItem('transaction-page-number', String(page_number));

  let ul = document.getElementById('transaction_page_history');

  if (ul == null) {
    return;
  }
  ul.innerHTML = '';

  let client_id = window.localStorage.getItem('client-id');
  if (client_id == null) {
    client_id = window.prompt(
      'Enter client id: ',
      '00000000-0000-0000-0000-000000000000',
    );

    window.localStorage.setItem('client-id', client_id);
  }

  const take = 10;

  let transactions = await fetch(
    '/transactions/all-by-client' +
      `?client-id=${client_id}` +
      `&skip-transactions=${Number(page_number) * take}` +
      `&take-transactions=${take}`,
    {
      method: 'GET',
    },
  )
    .then((response) => response.text())
    .then((text) => JSON.parse(text));

  if (transactions.length === 0) {
    page_number--;

    transactions = await fetch(
      '/transactions/all-by-client' +
        `?client-id=${client_id}` +
        `&skip-transactions=${Number(page_number) * take}` +
        `&take-transactions=${take}`,
      {
        method: 'GET',
      },
    )
      .then((response) => response.text())
      .then((text) => JSON.parse(text));
  }

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
}
