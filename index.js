let text = document.querySelector('#text');
let submit = document.querySelector('#submit');
let one = document.querySelector('#one');
let two = document.querySelector('#two');

submit.addEventListener('click', function(){
    text.value = text.value.trim();
    if(text.value === ''){
        alert("Please enter a value");
    }else{
        two.textContent = text.value;
    }
    text.value = '';
});