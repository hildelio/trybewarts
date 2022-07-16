const login = document.querySelector('.trybewarts-login');
const emailLogin = document.getElementById('login');
const senhaLogin = document.getElementById('senha');
login.addEventListener('submit', (event) => {
  if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
    event.preventDefault();
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function ableDisableButton() {
  const agree = document.querySelector('#agreement');
  const button = document.querySelector('#submit-btn');
  if (agree.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
ableDisableButton();

let count = 500;
const counter = document.getElementById('counter');
const textarea = document.querySelector('#textarea');
textarea.addEventListener('input', (event) => {
  event.preventDefault();
  count = 500 - (textarea.value.length);
  counter.innerText = `${count}  caracteres restantes.`;
});

const button = document.getElementById('submit-btn');
const feedbackArea = document.getElementById('feedback-area');
const formDataArea = document.getElementById('form-data');
const formArea = document.getElementById('formPage');

function createListElement(question, answer) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <strong>${question}</strong>
    <span>${answer}</span>
  `;
  return liElement;
}

function deleteMainPageContent() {
  feedbackArea.classList.remove('hidden');
  formArea.className = 'hidden';
}

function renderFormData(formData) {
  deleteMainPageContent();

  for (let i = 0; i < formData.length; i += 1) {
    const { question, answer } = formData[i];
    const newElement = createListElement(question, answer);
    formDataArea.appendChild(newElement);
  }
}

const name1 = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
button.addEventListener('click', (pegarInfo) => {
  pegarInfo.preventDefault();
  const family = document.querySelector('input[name = "family"]:checked');
  const content = document.querySelectorAll('input[name = "content"]:checked');
  const contentShow = [];
  for (let i = 0; i < content.length; i += 1) {
    const itens = content[i];
    contentShow.push(` ${itens.value}`);
  }
  const rate = document.querySelector('input[name = "rate"]:checked');
  const object = [
    {question: 'Nome:', answer: `${name1.value} ${lastname.value}`},
    {question: 'Email:', answer: email.value},
    {question: 'Casa:', answer: house.value},
    {question: 'Família:', answer: family.value},
    {question: 'Matérias:', answer: contentShow},
    {question: 'Avaliação:', answer: rate.value},
    {question: 'Observações:', answer: textarea.value},
  ];
  renderFormData(object);
});
