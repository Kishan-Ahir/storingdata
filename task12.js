let form=document.querySelector('#form');
        let existingData = [];
        form.addEventListener('submit',additem)
        function additem(e){
            e.preventDefault();//if we will not add this then it will be not visible on web page.

            // Retrieve existing data from local storage
            let existingData = localStorage.getItem('Data');


            // Parse the data back into a JavaScript object if it exists
            if (existingData) {
                existingData = JSON.parse(existingData);
            } else {
                existingData = [];
            }


            // Get the new data from the form
            let newData = {
                name: document.querySelector("#name").value,
                Email_Id: document.querySelector("#email").value,
                Phone_number: document.querySelector("#phone").value,
            };


            // Add the new data to the existing data
            existingData.push(newData);


            // Convert the updated data back to a string and store it in local storage
            localStorage.setItem('Data', JSON.stringify(existingData));


            //To Show the data on webpage
            let newelement = document.createElement('p');
            let name=document.createTextNode(document.querySelector('#name').value);
            let email=document.createTextNode(' '+document.querySelector('#email').value);
            let phone=document.createTextNode(' '+document.querySelector('#phone').value);
            newelement.appendChild(name);
            newelement.appendChild(email);
            newelement.appendChild(phone);
            form.appendChild(newelement);
        }