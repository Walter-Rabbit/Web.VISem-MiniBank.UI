export default async function item__create_account() {
  let account_dto = {
    id: '',
    descriptionId: '81be05af-183e-4fc8-bdcc-0d2cf7946e6a',
    ownerId: '',
    amount: 1000,
    serviceEndDate: new Date(),
  };

  await fetch('/accounts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(account_dto),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  alert('Счёт создан');
  window.location.href();
}
