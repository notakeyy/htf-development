import { Request, Response } from "express";
import * as functions from 'firebase-functions';
import * as axios from "axios";

export const first_last = async (request: Request, response: Response): Promise<void> => {
    const baseurl = functions.config().baseurl.firebase;
    const data = {
        email: "harshasrikara@gmail.com"
    }
    const result = await (await axios.default.post(baseurl, data)).data;
    response.json({
        result: result
    });
}