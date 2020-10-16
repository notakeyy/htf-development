import { Request, Response } from "express";
import * as functions from 'firebase-functions';
import * as axios from "axios";

const baseurl = functions.config().baseurl.firebase;

export const first_last = async (request: Request, response: Response): Promise<void> => {
    const email = "harshasrikara@gmail.com"
    console.log(baseurl + email);
    const result = await axios.default.get(baseurl + email);
    response.json(result);
}