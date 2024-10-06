document.getElementById("btn").addEventListener("click",fetch_user);      // adding event listner function to to the buttton


async function fetch_user() {                                                               // function for fetching data
      const url ="https://reqres.in/api/users?page=2";
      const response = await fetch(url) ;
      const data = await response.json() ;
      console.log(data);
      display(data.data)
}

function display(users){                                                            // to display user data
    let container = document.querySelector(".user_container");
    container.innerHTML = ''

    users.forEach(element => {

        const user = document.createElement("div");
        user.className = "user";
        user.innerHTML = `
        <img src="${element.avatar}" alt="${element.first_name}">
        <h2>${element.first_name} ${element.last_name}</h2>
        <p>Email : ${element.email}</p>
        `
        container.appendChild(user)
    });
}