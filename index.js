// require files
const express = require('express');

// initialize express
const app = express();

// express bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/members', require('./routes/api/members'));

// port
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));