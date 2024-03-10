
let email = document.getElementById("email");
let logec = document.getElementById("error");
let sucsess = document.getElementById("sucess");
let conainer = document.getElementById("container");
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
}
function printvalue(){
 console.log(validateEmail(email));
 if (validateEmail(email)){
    logec.innerHTML = 'hello';
    conainer.style.display = 'none'
    sucsess.innerHTML = `<img src="assets/images/icon-success.svg">
    <h2>Thanks for subscribing!</h2>
    <p>  A confirmation email has been sent to ash@loremcompany.com. 
    Please open it and click the button inside to confirm your subscription.</p>
    <button onclick="dismiss()">Dismiss message</button>`
    sucsess.style.display = "block"
 }else{
    logec.innerHTML = "Valid email requeird";
 }
}


logec.style.color = 'red'
function dismiss(){
    conainer.style.display = 'flex'
    sucsess.style.display = "none"
}