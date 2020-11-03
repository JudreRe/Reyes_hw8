const forms = document.querySelector("form");
forms.addEventListener("submit", e => {
  e.preventDefault();
  const login = forms.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {



      //add an image
      const images = document.createElement("img");
      images.src = user.avatar_url;
      images.style.height = "125px";
      images.style.width = "125px";
      
      //include the name of user
      const userName = document.createElement("tr");
      userName.textContent = user.name;
      userName.style.fontSize = "15px";
      userName.innerHTML =
      `Name <td>${user.name}</td>`
      

     //include the blog (if any)
      const blog = document.createElement("tr");
      blog.href = user.blog;
      blog.textContent = blog.href;
      blog.innerHTML = 
      `Blog <td>${user.blog}</td>`

    //add creation date
      const created = document.createElement("tr");
      created.textContent = user.created_at;
      created.style.fontSize = "15px";
      created.innerHTML = 
      `Created <td>${user.created_at}</td>`

      //append
      const userProfile = document.getElementById("infos");
      userProfile.innerHTML = "";
      userProfile.appendChild(images);
      userProfile.appendChild(userName);
      userProfile.appendChild(blog);
      userProfile.appendChild(created);
    })

    .catch(err => {
      console.error(err.message);
    });
});