let input = document.querySelector('input');

function changeMark() {
   this.classList.toggle('marked');
}

input.addEventListener('change', ()=>{
  let lis = document.querySelectorAll('li');
  if (input.checked) {
    lis.forEach(li => li.addEventListener('click', changeMark));
  } else {
    lis.forEach(li => li.removeEventListener('click', changeMark));
  }
});