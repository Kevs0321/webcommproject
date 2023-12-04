console.log('Hello World')

//footer
const year = new Date();
document.getElementById("footer-year").textContent = year.getFullYear();

//alert button
let alertButton = document.createElement('button');
alertButton.innerHTML = 'CLICK ME!';
alertButton.id = 'btn-alert';
alertButton.onclick = () => {
    alert('HUZZAH!!');
}

document.getElementById("btn-alert").append(alertButton);

//Hover Button
let hoverButton = document.createElement("button");
hoverButton.innerHTML = "Put your cursor on me!";
hoverButton.id = 'hover-btn-id';
 
hoverButton.onmouseover = () => {
    hoverButton.innerText = 'OIIII!!!';
}
hoverButton.onmouseleave = () => {
    hoverButton.innerText = 'AGAIN!';
    setTimeout(()=>{hoverButton.innerText = "Put your cursor on me!";},3000)
}
 
document.getElementById("hover-btn-id").append(hoverButton);

//Increment Button
let numberParagraph = document.createElement("p");
let ctr = 0;
numberParagraph.innerText = `Number : ${ctr}`;
 
let incrementButton = document.createElement("button");
 
incrementButton.innerHTML = "Click me to add!";
incrementButton.id = "btn-counter";
 
incrementButton.onclick = () => {
     
    numberParagraph.classList.remove(...numberParagraph.classList);
    if (ctr++ % 2 == 0) {
        numberParagraph.classList.add('even');
    } else {
        numberParagraph.classList.add('odd');
    }
    numberParagraph.innerText = `Number : ${ctr}`;
 
    ``
}
 
document.getElementById("btn-counter").append(incrementButton);
document.getElementById("txt-counter").append(numberParagraph);