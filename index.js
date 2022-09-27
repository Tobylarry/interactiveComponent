let rate = document.querySelectorAll('.rating');
let submit = document.querySelector('.btn');
let select = document.querySelector('.selected');
let message = document.querySelector('.message');
let content = document.querySelector('.content');
let selected = 0;

for(let i = 0; i < rate.length; i++){
    rate[i].addEventListener('click', function(){
        rate[i].style.background = 'hsl(25, 97%, 53%)';
        rate[i].style.color = 'hsl(0, 0%, 100%)';
        selected = rate[i].textContent;
    })
}

submit.addEventListener('click', function(){
   select.textContent = `You have selected ${selected} of 5`;
   message.style.display = 'block';
   content.style.display = 'none';
})
