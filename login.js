const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform authentication or login logic here
  // You can send the form data to a server for verification

  loginForm.reset();
  window.location.href = 'homepage.html'; // Redirect to homepage.html after successful login
});
