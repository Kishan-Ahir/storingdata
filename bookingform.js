
let form=document.querySelector('#form');
form.addEventListener('submit',storedetail);
function storedetail(e){
    
    localStorage.setItem('Name',document.querySelector("#fname").value);
    localStorage.setItem('Email Id',document.querySelector("#email").value);
    localStorage.setItem('Phone number',document.querySelector("#phone").value);
    localStorage.setItem('Date',document.querySelector("#date").value);
    localStorage.setItem('Time',document.querySelector("#time").value);
}

