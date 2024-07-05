const ptag = document.querySelector('p');
ptag.innerText = "It is working"
console.log(ptag);

const tagname = document.getElementsByTagName('p');
console.log(tagname[1].innerText);
tagname[1].innerText = "It is supposed to change now"
console.log(tagname[1]);

const errr = document.getElementsByClassName('error');
errr[0].innerHTML = "This is the third one";
console.log(errr[0]);

//Adding & Removing Classes

const addRemove = document.querySelectorAll('p');
addRemove.forEach(p =>{
if (p.textContent.includes('success')){
    p.classList.add('success');
    p.style.color ='red'
}
});