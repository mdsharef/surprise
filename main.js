let permissionOkk = document.getElementById('permissionOkk');
let question = document.getElementsByClassName('question')[0];

let yesBtn = document.getElementById('yes');
let noBtn = document.getElementById('no');
let yesPart = document.getElementsByClassName('yesPart')[0];
let noPart = document.getElementsByClassName('noPart')[0];

// console.log(question, permissionOkk);

permissionOkk.addEventListener('click', ()=> {
    question.style.visibility = 'visible';
});

yesBtn.addEventListener('click', ()=> {
    yesPart.style.visibility = 'visible';
    noPart.style.visibility = 'hidden';
});

noBtn.addEventListener('click', ()=> {
    noPart.style.visibility = 'visible';
    yesPart.style.visibility = 'hidden';
});