const signupForm = document.getElementById('login-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  alert('Account created successfully!');
  signupForm.reset();
});


const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Perform authentication/login logic here
  // Send the form data to a server for verification

  alert('Login successful!');
  loginForm.reset();
});

