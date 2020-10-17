import * as functions from 'firebase-functions';
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: true }));
functions.logger.info("Starting Application");

// example function that returns hello world
app.get("/hello", (request: Request, response: Response) => {
    response.json({
        message: "hello world!"
    });
});

/* Change things below this line */

// import functions
import { hello_first, first_last } from "./api/template";
//import { hello_akie } from "./api/akie"
// import functions
//import { hello_akie, akie_kasai } from "./api/template";

//add your import in addition to the ones above
import {hello_akie, akie_kasai} from "./api/akie"


app.get("/first-last", first_last);
app.get("/hello-first-last/:name", hello_first);

app.get("/hello-akie-utd/:name", hello_akie);
//app.get("/hello-abby-utd/:name", hello_abby);
//import { hello_akie, akie_kasai } from "./api/akie"

app.get("/hello-akie-kasai/:name", hello_akie);

//add your endpoint in addition to the default one
app.get("/hello-akie-kasai/:name", hello_akie);
app.get("/akie_kasai", akie_kasai);

/*
import { hello_temoc, temoc_utd } from "./api/temoc"

app.get("/hello-first-last/:name", hello_first);

//add your endpoint in addition to the default one
app.get("/hello-temoc-utd/:name", hello_temoc);
app.get("/temoc-utd", temoc_utd);
*/

/* Change things above this line */

//the line of code below will deploy to firebase cloud functions instead of running locally
//leave this line commented
//export const api = functions.https.onRequest(app);

//the line of code below will run this locally
app.listen(8010);
