// selecionar apenas um elemento.
// const addUserText = document.getElementById("add-user");
// addUserText.innerText = "Adicionar usuário.";
// const myForm = document.querySelector(".container #my-form");

// selecionar multiuplos elementos
// const allItems = document.querySelectorAll('.item');

// esses dois de baixo, não recomendado, pois retorna um HTML colections

// const allItems = document.getElementsByClassName('item');
// // const allItems = document.getElementsByTagName("li");
// console.log(allItems);

// const button = document.querySelector(".btn")
// // const items = document.querySelector(".items");
// // items.remove();

// // items.firstElementChild.remove();
// // // items.lastElementChild.remove();
// // items.children[1].remove();

// // items.lastElementChild.innerHTML = "<p> ola mundo </p>";

// // manipulando coisas com javascript

// button.style.background = "red";
// button.style.color = "blue";

// const submitButton = document.querySelector("#submit-button");
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const myForm = document.querySelector('#my-form');

// const items = document.querySelector('.items');

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
  
//   const nameValue = nameInput.value;
//   const emailValue = emailInput.value;
//   if(nameValue === "" || emailValue === "") {
//     return alert("Erro?!");
//   }else {
//     myForm.style.background = "red";
//     items.firstElementChild.textContent = nameValue;
//     items.children[1].textContent = emailValue;
//   }
//   console.log(nameValue);
// });

// // nameInput.addEventListener("change", function(event) {
// //     console.log(event.target.value);
// // })


const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const erroMessege = document.querySelector('.msg');

const items = document.querySelector('.items');


// adicionando evento de click
submitButton.addEventListener('click', (event) => {
    // retirando evento padrão
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        erroMessege.textContent = "Por favor, preencha os campos!";
        erroMessege.classList = 'error';
        setTimeout(() => {
            erroMessege.textContent = "";
            erroMessege.classList = "";
        }, 3000)
        return;
    }

    const li = document.createElement('li');
    li.classList = 'item';
    li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`
    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
})