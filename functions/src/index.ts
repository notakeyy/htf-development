import * as functions from 'firebase-functions';
import app from "./express_config/express";

//debating if this is the best way to go about it
import { harsha_srikara } from "./api/harsha_srikara";

app.get("/harsha-srikara", harsha_srikara);

export const api = functions.https.onRequest(app);