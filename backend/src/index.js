const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json()); //Express vai ir no corpo da requisição e converter o json em um objeto do tipo JS.
app.use(routes);

app.listen(3333);

