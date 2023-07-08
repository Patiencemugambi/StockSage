// const loginForm = document.getElementById('login-form');

// loginForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Perform authentication or login logic here
//   // You can send the form data to a server for verification

//   loginForm.reset();
//   window.location.href = 'index.html'; // Redirect to homepage.html after successful login
// });






// login.js

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Make a GET request to the users endpoint of the JSON server
  fetch('https://fake-server-jhcl.onrender.com/users')
    .then(response => response.json())
    .then(users => {
      // Check if the entered email and password match any user in the users list
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {

        console.log('Login successful');
        // Redirect to the desired page
        window.location.href = 'index.html';
      } else {

        console.log('Login failed');
        // Show an error message to the user
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid email or password.';
        errorMessage.style.color = 'red';
        loginForm.appendChild(errorMessage);
      }
    })
    .catch(error => {
      // An error occurred during the request
      console.error('Error:', error);
      // Show a generic error message to the user
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'An error occurred during the login. Please try again later.';
      errorMessage.style.color = 'red';
      loginForm.appendChild(errorMessage);
    });
}
