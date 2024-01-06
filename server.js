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

// Start the server
app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});