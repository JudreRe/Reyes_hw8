document.querySelector("form").addEventListener("submit", e =>{
    e.preventDefault();
    const formData = new FormData(e.target);

    for (var pair of formData.entries()){
        document.write(`<th>${pair[0]}</th> `);
        document.write(`<td>${pair[1]}</td><br>`);
        console.log(pair);
    }

})


