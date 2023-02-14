window.addEventListener('load', async function history__history_list() {
  let ul = document.getElementById('main_page_history');

  if (ul === null) {
    return;
  }

  let section = document.getElementById('main_page_section_history')
  let storage = window.localStorage.getItem('history');

  if (storage !== null) {
    section.style.visibility = 'visible';
    ul.innerHTML = storage;
    return;
  }

  let history_list = document.getElementById('main_page_history')

  let transactions = await fetch('https://639897dc044fa481d6a38d71.mockapi.io/Transaction', {
    method: 'GET'
  })
    .then(response => response.text())
    .then(text => JSON.parse(text));

  for (let tr of transactions) {
    let li = document.createElement('li');
    let transaction = document.createElement('div');
    transaction.className = 'transaction';

    let p_amount = document.createElement('p');
    let amount = tr['amount'];
    if (amount >= 0) {
      p_amount.className = 'transaction__positive_balance';
    }
    else {
      p_amount.className = 'transaction__negative_balance';
    }
    p_amount.textContent = amount + 'руб.';
    transaction.append(p_amount);

    let p_date = document.createElement('p');
    p_date.className = 'transaction__date';
    let date = new Date(tr['date'] * 1000);
    p_date.textContent = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`
    transaction.append(p_date);

    let p_description = document.createElement('p');
    p_description.textContent = tr['target'];
    p_description.style.visibility = 'hidden';
    p_description.style.height = "0";
    p_description.style.width = "0";
    transaction.append(p_description);

    li.append(transaction);
    history_list.append(li);
  }

  window.localStorage.setItem('history', ul.innerHTML);

  if (section !== null) {
    if (history_list !== null) {
      section.style.visibility = 'visible';
    } else {
      section.style.visibility = 'hidden';
    }
  }
});
