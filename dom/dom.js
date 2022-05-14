// container
let container = document.getElementById("container"); //ways of selecting element
container.style.cssText = `
  width:80%;
  margin:20px auto;
  background: lightgrey;
  color: #000;
  font-weight: 600;
  font-size: 18px;
  padding: 20px;
  border: 2px solid red;
`;

// header
const header = document.querySelector(".header");  //ways of selecting element.

let headerStyle = {
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    padding: '10px',
    background: 'green'
  };

  for (let style in headerStyle) {
    header.style[style] = headerStyle[style];
  }
  
  const subheading = Array.from(document.getElementsByTagName("h2"));
  subheading.forEach((ele) => {
      ele.style.color="red";
  });

//   main
const main = document.querySelector(".main");
main.style.cssText = "display: flex; justify-content: space-around";
//   sidebar 
const sidebar = document.querySelector(".sidebar");
Object.assign(sidebar.style, {
    border: '1px solid green',
    height: '170px',
    width: '100px',
    padding: '10px'
})

const section = document.querySelector('.section');



const list = document.createElement('ul');

const items = ['list-item 1', 'list-item 2','list-item 3','list-item 4'];



for(let i = 0; i < items.length; i++) {
  const listItem = document.createElement('li');
  // listItem.classList.add('list-item');
  // listItem.className ='list-item';
   listItem.setAttribute('class', 'list-item');
   listItem.innerText =  `${items[i]}`
   list.appendChild(listItem);
}
section.appendChild(list);

const number = ['one', 'two','three','four'];

let listItemAll = document.querySelectorAll('.list-item');
 
listItemAll.forEach((item, id) => {
 item.innerHTML+= ' ' + number[id];
});

// to remove html element
// section.removeChild(list);

// replece html element.
// const divEle = document.createElement('div');
// section.parentNode.replaceChild(divEle, section);

function addBg() {
  main.classList.add('add-class');
}

function removeBg() {
  main.classList.remove('add-class');
}

const btn = document.getElementsByTagName('button')[0];
const btn1 = document.querySelector('.remove-btn');

btn.addEventListener('click', addBg);

btn1.addEventListener('click', removeBg);