const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitted);

function submitted() {
  const user = usernames.indexOf(usernameEl.value);
  if (passwordEl.value === passwords[user]) {
    window.location = "flipbooks.html";
  } else {
    alert("Sorry, username or password is incorrect.");
  }
}