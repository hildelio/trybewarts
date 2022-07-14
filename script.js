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
  event.preventDefault()
  count = 500 - (textarea.value.length);
  counter.innerText = `${count}  caracteres restantes.`;
});

/*
// const button = document.getElementById('submit-btn');
// const feedbackArea = document.getElementById('feedback-area');
// const formDataArea = document.getElementById('form-data');
// const formArea = document.getElementById('evaluation-form');

// function createListElement(question, answer) {
//   const liElement = document.createElement('li');
//   liElement.innerHTML = `
//     <strong>${question}</strong>
//     <span>${answer}</span>
//   `;
//   return liElement;
// }

// function deleteMainPageContent() {
//   feedbackArea.classList.remove('hidden');
//   formArea.remove();
// }

// function renderFormData(formData) {
//   deleteMainPageContent();

//   for (let i = 0; i < formData.length; i += 1) {
//     const { question, answer } = formData[i];
//     // const question = formData[i].question;
//     // const answer = formData[i].answer;
//     const newElement = createListElement(question, answer);
//     formDataArea.appendChild(newElement);
//   }
// }

// function pegarInfo(event) {
//   event.preventDefault();
//   const name = document.getElementById('input-name');
//   const lastname = document.getElementById('input-lastname');
//   const email = document.getElementById('input-email');
//   const house = document.getElementById('house');
//   const family = document.querySelector('input[name = "family"]:checked');
//   const content = document.querySelector('input[name = "content"]:checked');//confirmar se é só isso mesmo
//   const rate = document.querySelector('input[name = "rate":checked');
//   const textarea = document.getElementById('textarea');

//   const object = [
//     {
//       question: '-Nome- -Sobrenome-',
//       answer: `${name.value} ${lastname.value}`
//     },
//     {
//       question: '-Email-',
//       answer: email.value,
//     },
//     {
//       question: '-Casa-',
//       answer: house.value,
//     },
//     {
//       question: '-Família-',
//       answer: family.value.parentElement.innerText,
//     },
//     {
//       question: '-Matérias Selecionadas-',
//       answer: content.value.parentElement.innerText,
//     },
//     {
//       question: '-Avaliação-',
//       answer: rate.value.parentElement.innerText,
//     },
//     {
//       question: '-Observações-',
//       answer: textarea.value,
//     },
//   ];
//   renderFormData(object);
// }

// button.addEventListener('click', pegarInfo);
*/
