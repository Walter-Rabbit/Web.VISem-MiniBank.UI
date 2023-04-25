export default function content__button__next_page() {
  let page_number = window.localStorage.getItem('transaction-page-number');
  if (page_number == null) {
    page_number = '0';
  }

  window.localStorage.setItem(
    'transaction-page-number',
    String(Number(page_number) + 1),
  );
}
