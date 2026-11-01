const ART_SELECTOR = '.atik';
const BUTTON_SELECTOR = '[data-break]';
const YOLK_SELECTOR = '.yolk';
const BROKEN_CLASS = 'is-broken';
const LABEL_BREAK = 'Prepichnúť žĺtok';
const LABEL_RESTORE = 'Vrátiť žĺtok';

const art = document.querySelector(ART_SELECTOR);
const button = document.querySelector(BUTTON_SELECTOR);
const yolk = document.querySelector(YOLK_SELECTOR);

function toggleYolk() {
  const broken = art.classList.toggle(BROKEN_CLASS);
  button.setAttribute('aria-pressed', String(broken));
  button.textContent = broken ? LABEL_RESTORE : LABEL_BREAK;
}

button.addEventListener('click', toggleYolk);
yolk.addEventListener('click', toggleYolk);
