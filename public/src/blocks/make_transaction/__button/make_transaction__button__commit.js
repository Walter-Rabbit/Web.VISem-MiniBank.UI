export default async function make_transaction__button__commit() {
  let sender_product_id = window.prompt(
    'Enter product id which you want to send money from: ',
    '00000000-0000-0000-0000-000000000000',
  );

  let receiver_product_id = window.prompt(
    'Enter product id which you want to send money to: ',
    '00000000-0000-0000-0000-000000000000',
  );

  let amount = Number(window.prompt('Enter RUB transfer amount: ', '100'));

  if (amount === 0) {
    return;
  }

  if (amount < 0) {
    window.alert('Amount must be positive number');
    return;
  }

  let make_transaction_dto = {
    amount: amount,
    receiverProductId: receiver_product_id,
    senderProductId: sender_product_id,
  };

  await fetch('/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(make_transaction_dto),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
