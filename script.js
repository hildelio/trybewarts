const login = document.querySelector('.trybewarts-login');
const emailLogin = document.getElementById('login');
const senhaLogin = document.getElementById('senha');
login.addEventListener('submit', (event) => {
  if (emailLogin.value === 'tryber@test.com' && senhaLogin.value === '123456') {
    event.preventDefault();
    alert('Olá Tryber!');
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

// let count = 500;
// let counter = document.getElementById('counter');
// const textarea = document.querySelector('#textarea');
// textarea.addEventListener('keypress', function(event) {
// count = 500 - (textarea.value.length + 1);
// counter.innerText = count + ' caracteres restantes.';
// });

// const form = document.querySelector('#evaluation-form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const name = document.getElementById('input-name');
//   const lastname = document.getElementById('input-lastname');
//   const email = document.getElementById('email');
//   const house = document.getElementById('house'); //confirmar se é só isso mesmo
//   const family = document.querySelector('input[name = "family"]:checked');
//   const content = document.querySelectorAll('input[name = "content"]:checked');
//   const rate = document.querySelector('input[name = "rate":checked');
//   const textarea = document.getElementById('textarea');

//   const object = [
//     {
//       question: '-Nome- -Sobrenome-',
//       answer: `${name.value} ${lastname.value}`
//     },
//     {
//       question: 'Email',
//       answer: email.value,
//     },
//     {
//       question: '-Casa-',
//       answer: house.value,
//     },
//     {
//       question: '-Família-',
//       answer: `${family.value}`,
//     },
//     {
//       question: '-Matérias Selecionadas-',
//       answer: `${content.value}`,
//     },
//     {
//       question: '-Avaliação-',
//       answer: `${rate.value}`,
//     },
//     {
//       question: '-Observações-',
//       answer: textarea.value,
//     }
//   ]
// });
