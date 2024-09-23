
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register API
    const registerAPI = (users)=>{
        commonAPI('POST',`${BASE_URL}/user/register`,users,"")
    }