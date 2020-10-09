/**
 * There's a little too many things here that are not required. 
 * We can probably just trim it down to the initialization and move the code over to index.ts
 */

import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";

const app = express(); //probs the only required line in this file
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;