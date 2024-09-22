import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonapi"


// register API
const registerAPI = (users)=>{
    commonAPI('POST',`${BASE_URL}/user/register`,users,"")
}