const Todos=[];

document.querySelector('#app').innerHTML = `
  <input typr="text">
  <button>ADD</button>
  <ul></ul>
`;

const input = document.querySelector('input');
const addBtn = document.querySelector('button');
const list = document.querySelector('ul');

addBtn.addEventListener('click',()=>{
  todos.push(input.value);
  list.innerHTML = `${todos.map(item => {
    return`<li>${item}</li>`;
  }).join('')}`;
});