import { Request, Response } from "express";
import * as axios from "axios";

//an alternative option to reading from a config file would be to have it as an environment variable
//access it through functions.config()
//reasons why we might do that is to reduce the need to have a config file & if we didn't want people to know the true URL
//basically prevent people from querying someone else's points, their PR must match their email address
import { BASE_URL } from "../config";

//if the code snippet is this short I'm wondering if there's a point in having everyone make thier own file?
//I guess it'll prevent merge conflicts but their code will be really short
export const harsha_srikara = async (request: Request, response: Response): Promise<void> => {
    // might want to wrap all this in a try/catch
    const email = "harshasrikara@gmail.com"
    const result = await axios.default.get(BASE_URL + email);
    response.json(result);
}