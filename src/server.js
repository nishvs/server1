import express from 'express';
import 'dotenv/config';
const { intentValidationRules, validate } = require('./validation')

import { receiveIntents } from './controllers/intentController'
import { getResponse } from './controllers/storeController'

const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/intent',intentValidationRules(), validate, async (req, res) => {
    let aiResponse = await receiveIntents(req);
    let finalResponse = await getResponse(req, res, aiResponse);
    res.json(finalResponse)
});

app.listen(process.env.PORT, () =>
  console.log(`Server 1 listening on port ${process.env.PORT}!`),
);