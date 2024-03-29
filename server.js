// This is the entry point to our backend

// Here we just bring in express 
import express from 'express';

// We initialize it into this app variable
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle GET request to fetch users 
// Create list of static users that we want to return from this route
app.get('/users', async (req, res) => {
    // const users = [
    //     {id: 1, name: 'John Doe'},
    //     {id: 2, name: 'Bob Williams'},
    //     {id: 3, name: 'Eddy Ed'},
    // ];

    setTimeout(async () => {
    // we make req.query.limit a number by adding + to the front of it
    const limit = +req.query.limit || 10;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
    const users = await response.json()

    res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join('')}
        </ul>
    `);
    }, 2000);

    
});

// Handle POST request for temp conversion
app.post('/convert', (req, res) =>{
    setTimeout(() => {
        // In order to get the data from the body we need the middleware added above
        const fahrenheit = parseFloat(req.body.fahrenheit);
        const celsius = (fahrenheit - 32) * (5 / 9);

        res.send(`
            <p>
                ${fahrenheit} degrees fahrenheit is equal to ${celsius.toFixed(2)}
                degrees Celsius
            </p>
        `);
    }, 2000);
});

let counter = 0;

// Handle GET request for polling example
app.get('/poll', (req, res) => {
    // Simulating updated data
    counter++;

    const data = {value: counter};

    res.json(data);
})

// Start the server
app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});