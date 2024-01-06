// This is the entry point to our backend

// Here we just bring in express 
import express from 'express';

// We initialize it into this app variable
const app = express();


// These lines below are middleware
// Set static folder
  // This will make the public folder we create is static, and we can just serve HTML files from it  
app.use(express.static('public'));

// These two lines below are middleswares so we can get data from JSON API clients or form bodies
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Handle GET request to fetch users 
// Create list of static users that we want to return from this route
app.get('/users', (req, res) => {
    const users = [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Bob Williams'},
        {id: 3, name: 'Eddy Ed'},
    ];

    // use the res prop (contains the send method), and add back-tiques so it can be a template string
    // Initially I return an array (map), but adding .join and empty string returns us a string
    res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join('')}
        </ul>
    `)
});

// Start the server
app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});