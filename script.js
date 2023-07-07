document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector(".left-nav");
  const full_name = document.getElementById("full-name");
  const role = document.getElementById("role");


// Get the user's name and role from the db.json server

  function retrieveUserDetails(email) {
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
  }

  // Redirect to the homepage if the user is logged in
  const email = document.getElementById("email");
  if (email) {
    const emailValue = email.value;
    if (emailValue) {
      window.location.href = "index.html";
    } else {
      email.addEventListener("change", function() {
        const updatedEmailValue = email.value;
        if (updatedEmailValue) {
          retrieveUserDetails(updatedEmailValue);
          window.location.href = "index.html";
        }
      });
    }
  }

  function confirmLogout() {
    var logoutConfirmation = window.confirm('Are you sure you want to log out?');
    if (logoutConfirmation) {
      window.location.href = 'login.html';
    }
  }

  const logoutButton = document.getElementById('margin-bottom-user-settings');
  logoutButton.onclick = confirmLogout;
});





// ***Fetch


document.addEventListener("DOMContentLoaded", function() {
  fetch("db.json")
    .then(response => response.json())
    .then(data => {
      var stockItems = data.stockItems;

      // Loop through the stock items and append them to the table
      stockItems.forEach(function(item) {
        var itemName = item.itemName;
        var quantity = item.quantity;
        var price = item.price;

        var row = document.createElement("tr");
        row.innerHTML = `
          <td>${itemName}</td>
          <td>${quantity}</td>
          <td>${price}</td>
          <td>
          <button onclick="editItem('${itemName}')">Edit</button>
            <button onclick="deleteItem('${itemName}')">Delete</button>
          </td>
        `;

        document.getElementById("manage-stock-items-table").getElementsByTagName("tbody")[0].appendChild(row);
      });
    })
    .catch(error => console.error(error));
});
