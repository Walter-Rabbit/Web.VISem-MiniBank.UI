export default function content__button__prev_page() {
  let page_number = window.localStorage.getItem('transaction-page-number');
  if (page_number == null) {
    page_number = '0';
  }

  page_number = page_number - 1;
  if (page_number < 0) {
    page_number = 0;
  }
  window.localStorage.setItem('transaction-page-number', String(page_number));
}
