import axios from "axios";

const baseUrl = "https://api-listparty.herokuapp.com/api/login"

export const login = async credentials => {
    const {data} = await axios.post(baseUrl, credentials) 
    return data
}
