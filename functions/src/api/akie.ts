import { Request, Response } from "express";
import * as functions from 'firebase-functions';
import * as axios from "axios";

/**
 * 
 * @param request contains the query parameter name
 * @param response returns hello <name>
 */
export const hello_akie = async (request: Request, response: Response): Promise<void> => {
    /**
     * If the request is localhost:3000/hello-first-last/harsha then
     * request.params.name is harsha
     */
    const name = request.params.name; 
    response.json({
        message: `Hello ${name}`
    });
    
}
/*
export const hello_temoc = async (request: Request, response: Response): Promise<void> => {
    const name = request.params.name; 
    response.json({
        message: `Hello ${name}`
    });
}*/

/**
 * @param request unique request that contains persons firstname-lastname
 * @param response queries the hacktoberfest database and returns the user data
 */
export const akie_kasai = async (request: Request, response: Response): Promise<void> => {
    const baseurl = functions.config().baseurl.firebase; // resolves to https://cloudfunctions.net
    const data = {
        email: "akiekasai1@gmail.com"
    }
    const result = await axios.default.post(baseurl, data);
    const res = result.data;
    response.json({
        result: res
    });
}