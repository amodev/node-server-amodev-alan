import express from 'express';

var app = express();

// app.get('/', (req, res) => res.send('hello World!!!'));

app.use(express.static('src/alanmarcell'));

console.log("Running alanmarcell on port 7000");
app.listen(7000);

var app2 = express();

app2.use(express.static('src/amodev'));

console.log("Running amodev on port 8000!");
app2.listen(8000);