let users = [];

function renderUsers() {
  let userCard = document.getElementById("users");

  userCard.innerHTML = "";

  users.map((user) => {
    let div = document.createElement("div");
    let userName = document.createElement("p");
    let userEmail = document.createElement("p");
    div.classList.add("user");

    userName.innerText = user.name;
    userEmail.innerText = user.email;

    userCard.appendChild(div);
    div.appendChild(userName);
    div.appendChild(userEmail);
  });
}

function successAlert() {
  let alert = document.getElementById("alert");
  alert.classList.add("success");
  alert.innerText = "User added successfully";

  setTimeout(() => {
    alert.classList.remove("success");
    alert.innerText = "";
  }, 3000);
}

function dangerAlert() {
  let alert = document.getElementById("alert");
  alert.classList.add("danger");
  alert.innerText = "User Email id already exist";

  setTimeout(() => {
    alert.classList.remove("danger");
    alert.innerText = "";
  }, 3000);
}

function register() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let tempuser = {
    name: name.value,
    email: email.value,
  };

  let useremailCount = users.filter((user) => {
    return user.email == email.value;
  });
  if (useremailCount.length == 0) {
    users.push(tempuser);
    successAlert();
  } else {
    dangerAlert();
  }
  renderUsers();
  name.value = ''
  email.value = ''
}
