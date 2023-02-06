const express = require('express');
const app = express();
const port = 3000;
const db = require('./connection');
const routes = require('./routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(port, () => console.log(`Now listening on port ${port}`));
})
