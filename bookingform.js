
//localStorage.removeItem('Time')
let form=document.querySelector('#form');
form.addEventListener('submit',storedetail);
function storedetail(e){
    e.preventDefault();
    let data = {
        name : document.querySelector("#fname").value,
        Email_Id : document.querySelector("#email").value,
        Phone_number : document.querySelector("#phone").value,
        Date : document.querySelector("#date").value,
        time : document.querySelector("#time").value
    };
    console.log(data);
    localStorage.setItem('Data',JSON.stringify(data));
    console.log(localStorage);
    //localStorage.setItem('Name',document.querySelector("#fname").value);
    //localStorage.setItem('Email Id',document.querySelector("#email").value);
    //localStorage.setItem('Phone number',document.querySelector("#phone").value);
    //localStorage.setItem('Date',document.querySelector("#date").value);
    //localStorage.setItem('Time',document.querySelector("#time").value);a
}

