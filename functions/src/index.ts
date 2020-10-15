import * as functions from 'firebase-functions';
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: true }));

import { first_last } from "./api/template";

app.get("/first-last", first_last);

export const api = functions.https.onRequest(app);