const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Perform authentication or signup logic here
  // You can send the form data to a server for verification

  signupForm.reset();
  window.location.href = 'index.html'; // Redirect to index.html after successful signup
});
