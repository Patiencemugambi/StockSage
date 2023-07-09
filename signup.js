// const signupForm = document.getElementById('signup-form');

// signupForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const fullName = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirm-password').value;

//   if (password !== confirmPassword) {
//     alert('Passwords do not match.');
//     return;
//   }

//   // Create an object representing the new user
//   const newUser = {
//     fullName: fullName,
//     email: email,
//     password: password
//   };

//   // Perform signup logic here
//   fetch('/api/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newUser)
//   })
//   .then(response => {
//     if (response.ok) {
//       alert('Account created successfully!');
//       signupForm.reset();
//       window.location.href = 'index.html'; // Redirect to index.html after successful signup
//     } else {
//       alert('Failed to create an account. Please try again.');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// });


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

  // Create an object representing the new user
  const newUser = {
    fullName: fullName,
    email: email,
    password: password
  };

  // Save the new user data to localStorage
  saveUser(newUser);

  alert('Account created successfully!');
  signupForm.reset();
  window.location.href = 'index.html'; // Redirect to index.html after successful signup
});

function saveUser(user) {
  let users = [];
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
  }

const xhr = new XMLHttpRequest();
const url = 'https://fake-server-jhcl.onrender.com/users/' ;


xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request succeeded
      console.log(xhr.responseText);
    } else {
      // Request failed
      console.error('Request failed');
    }
  }
};

xhr.send(JSON.stringify(user));

  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));
}
