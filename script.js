const nav = document.querySelector(".left-nav");
const full_name = document.getElementById("full-name");
const role = document.getElementById("role");

// Get the user's email address from the login page
const email = document.getElementById("email").value;

// Get the user's name and role from the db.json server
const xhr = new XMLHttpRequest();
xhr.open("GET", "/db.json?email=" + email);
xhr.onload = function() {
  if (xhr.status === 200) {
    const user = JSON.parse(xhr.responseText);
    full_name.textContent = user.full_name;
    role.textContent = user.role;
  } else {
    // Handle error
  }
};
xhr.send();

// Redirect to the homepage if the user is logged in
if (email) {
  window.location.href = "homepage.html";
}
