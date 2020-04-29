require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';

import roles from './controllers/roles';

const app = express();

app.use(bodyParser.json());

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/roles', roles);

// eslint-disable-next-line no-magic-numbers
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
    res.send('Hello World');
});

app.listen(PORT);
