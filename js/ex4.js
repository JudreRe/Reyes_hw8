document.querySelector("form").addEventListener("submit", e =>{
    e.preventDefault();
    
    

    const name =document.getElementById("name").value;
    const nameData =document.createElement("tr");
    nameData.innerHTML= 
    `
    Name <td>${name}</td>
    `

    const email =document.getElementById("email").value;
    const emailData =document.createElement("tr");
    emailData.innerHTML= 
    `
    Email <td>${email}</td>
    `

    const payment =document.getElementById("radio").value;
    const paymentData =document.createElement("tr");
    paymentData.innerHTML= 
    `
    Payment <td>${payment}</td>
    `

    const promotion =document.getElementById("promotion").value;
    const promotionData =document.createElement("tr");
    promotionData.innerHTML= 
    `
    Promotion <td>${promotion}</td>
    `

    const location =document.getElementById("location").value;
    const locationData =document.createElement("tr");
    locationData.innerHTML= 
    `
    Location <td>${location}</td>
    `
    
    console.log(name);
    console.log(email);
    console.log(payment);
    console.log(promotion);
    console.log(location);
    
    

    const displayData = document.getElementById("result");
    displayData.innerHTML = "";
    displayData.appendChild(nameData);
    displayData.appendChild(emailData);
    displayData.appendChild(paymentData);
    displayData.appendChild(promotionData);
    displayData.appendChild(locationData);
    console.log(displayData);
});





