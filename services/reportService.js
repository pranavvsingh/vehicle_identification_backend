import {http} from "../http/http";
import {urlBuilder} from "../utils"

export function autoCheck(req, res){
    http.get(urlBuilder(req, "autoCheck"))
}