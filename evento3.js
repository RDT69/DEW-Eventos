
function changeMark() {
   this.classList.toggle('marked');
}
function changeBold() {
  this.classList.toggle('bold');
}
function changeUnderline() {
  this.classList.toggle('underline');
}

function showConsole() {
  this.classList.toggle(this.textContent);
}

const options = ['mark', 'bold', 'underliner', 'logger'];
const functions = [changeMark, changeBold, changeUnderline, showConsole];

function toggle(optionName) {
  let option = document.getElementById(optionName);
 
  option.addEventListener('change', ()=>{
    let lis = document.querySelectorAll('li');
  if (input.checked) {
    lis.forEach(li => li.addEventListener('click', changeMark));
  } else {
    lis.forEach(li => li.removeEventListener('click', changeMark));
  }
});
}
for (let i = 0; i < options.length; i++) {
  ToggleEvent(options[i], functions[i]);
}

