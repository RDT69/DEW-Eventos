let button = document.querySelector('button');

function mark(){
  this.classList.toggle('marked');
}

button.addEventListener('click', ()=>{
  let lis = document.querySelectorAll('li');
  lis.forEach(li => li.addEventListener('click', mark));
});