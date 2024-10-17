
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

    // register API
    export const registerAPI = async(users)=>{
        return await commonAPI('POST',`${BASE_URL}/user/register`,users,"")
    }

    // login api
    export const loginAPI = async(users)=>{
        return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")
    }

    // get Arith apt Questions
    export const arithQuestionAPI = async()=>{
        return await commonAPI('GET',`${BASE_URL}/general/arith/pot`)
    }
