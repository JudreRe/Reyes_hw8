const paintings =
[
    {
      "name": "The Starry Night",
      "year": "1889",
      "artist": "Vincent Van Gogh"
    },
    {
      "name": "The Scream",
      "year": "1893",
      "artist": "Edvard Munch"
    },
    {
      "name": "Guernica",
      "year": "1937",
      "artist": "Pablo Picasso"
    }
  ];

  console.log(paintings);


  
  
  fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
    .then(response => response.json())
    .then(paintings => {
        const getPainting = document.getElementById("paintings");
        paintings.forEach(painting => {
            const paintingsB = document.createElement("tr");
            paintingsB.innerHTML = 
            `
            <td>${painting.name}</td>
            <td>${painting.year}</td>
            <td>${painting.artist}</td>
            `
            getPainting.appendChild(paintingsB);
        });
    } )

    .catch(er=> {
        console.error(er.message);
    });
