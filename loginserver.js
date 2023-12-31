const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());




// Route for user registration
app.post('/api/register', (req, res) => {
    const newUser = req.body;
  
    fs.readFile('users.json', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      const users = JSON.parse(data);
  
      // Check if username or email already exists
      const duplicateUser = users.find(
        user => user.username === newUser.username || user.email === newUser.email
      );
  
      if (duplicateUser) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
  
      // Generate a unique ID for the new user
      const newUserId = generateUniqueId();
  
      // Create a new user object with the unique ID
      const user = {
         id: generateUniqueId(),
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      };
  
      // Add the new user to the existing users array
      users.push(user);
  
      // Write the updated users array back to the JSON file
      fs.writeFile('users.json', JSON.stringify(users, null, 2), err => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        return res.status(200).json({ message: 'User registered successfully' });
      });
    });
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  