/** Entry point JS file that is called by our database */

const express = require('express');

//create instance of express
//"app" is what we refer to use express
const app = express();

//Let's write our first route
app.get('/', (req, res) => res.send('Hello'));

/*
app.get - 
Tell express, if you see a GET request

('/', - 
go to the homepage route

(req, res) => res.send('Hello') - 
this is what you do
*/

//tells express to only complete request from port 5000
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}` ) );

//Go over multi-threading