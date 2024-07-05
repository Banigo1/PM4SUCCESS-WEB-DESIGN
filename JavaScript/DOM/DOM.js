const para = document.querySelector('p');
const error = document.querySelector('.error');
const divError = document.querySelector('div.error');

console.log (para);// Prints the first paragraph encountered
console.log (error);// Prints the paragraph with class name error
console.log (divError);// Prints the div with class error

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);

}); //Circles through each paragraph in the nodeList and and logs them to the console

console.log (paras);// Prints all paragraphs in a NodeList
console.log (paras[0]);// Selects and prints a sinlge element from the Nodelist based on the index

const errors = document.querySelectorAll('.error');//Prints everything with a class of error whehter <div> or <p>
console.log(errors);

// "querySelector" selects single elements and "querySelectorAll" selects multiple elements from the HTML document. They are the best selectors, but there are other ways to select HTML element


// get the element by ID
const title = document.getElementById('page-title');
console.log(title);


// get the element by their class name
const errr = document.getElementsByClassName('error');
console.log(errr)
console.log(errr[0]);
// errr.forEach(errr => {
//     console.log(err)   
// });

// get the element by their tag name
const allParas = document.getElementsByTagName('p')
console.log(allParas);
console.log(allParas[1]);

const changeText = document.querySelector('p')

console.log(changeText.innerText)

changeText.innerText = 'JavaScript can change text in an HTML paragraph'; //This chnages the paragraph text in HTML and sets the new text specified

const everyPara = document.querySelectorAll('p');//referencea all the ptags as a NodeList
everyPara.forEach(eachPara => {
    console.log(eachPara.innerText);
});

const myNam = document.querySelector('.myName');
myNam.innerHTML = `<h2>Precious Banigo</h2>`;
console.log(myNam.innerHTML);