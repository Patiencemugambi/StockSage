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


const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('./db.json')
    .then(response => response.json())
    .then(data => {
      // Find user with matching email and password
      const user = data.users.find(user => user.email === email && user.password === password);

      if (user) {
        // Authentication successful
        alert('Login successful!');
        loginForm.reset();
        window.location.href = 'index.html'; // Redirect to homepage.html after successful login
      } else {
        // Authentication failed
        alert('Invalid email or password. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  loginForm.reset();
});
