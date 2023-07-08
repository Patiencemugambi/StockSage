document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector(".left-nav");
  const full_name = document.getElementById("full-name");
  const role = document.getElementById("role");


  // Get the user's name and role from the server

  function retrieveUserDetails(email) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fake-server-jhcl.onrender.com/db?email=" + email);
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


document.addEventListener("DOMContentLoaded", function() {
  fetch("https://fake-server-jhcl.onrender.com/db")
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


document.addEventListener("DOMContentLoaded", function() {
  fetch("https://fake-server-jhcl.onrender.com/db")
    .then(response => response.json())
    .then(data => {
      var stockItems = data.stockItems;
      var stockAlerts = data.stock_alerts;

      // Loop through the stock alerts and append them to the table
      stockAlerts.forEach(function(alert) {
        var itemName = alert.item_name;
        var alertQuantity = alert.quantity;
        var alertType = alert.alert_type;

        // Find the corresponding stock item
        var stockItem = stockItems.find(item => item.itemName === itemName);
        var stockQuantity = stockItem ? stockItem.quantity : 0;

        var row = document.createElement("tr");
        row.innerHTML = `
          <td>${itemName}</td>
          <td>${stockQuantity}</td>
          <td>${alertType}</td>
        `;

        document.getElementById("stock-alerts-table").getElementsByTagName("tbody")[0].appendChild(row);
      });
    })
    .catch(error => console.error(error));
});


// Get the search input element
const searchBar = document.getElementById('search-bar');

// Add event listener for input changes
searchBar.addEventListener('input', function() {
  const searchTerm = searchBar.value.toLowerCase();
  const rows = document.querySelectorAll('#manage-stock-items-table tbody tr');

  rows.forEach(function(row) {
    const itemName = row.querySelector('td:first-child').textContent.toLowerCase();

    // Show/hide rows based on the search term
    if (itemName.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});


// Get the form element
const form = document.getElementById('stock-item-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Create a new FormData object
  const formData = new FormData(form);

  // Access the form data using the input field names
  const itemName = formData.get('item-name');
  const quantity = formData.get('quantity');
  const price = formData.get('price');

  // Do something with the form data
  console.log('Item Name:', itemName);
  console.log('Quantity:', quantity);
  console.log('Price:', price);

  form.reset();
});
