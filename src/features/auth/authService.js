import axios from "axios"



//Register user

const register = async (userData) => {

    const API_URL = "/employee/signup"
    const response  = await axios.post(API_URL , userData)

    if(response.data) {
        alert(JSON.stringify(response.data))
        //localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userData) => {
    const API_URL = "/employee/login/"
    const response  = await axios.post(API_URL , userData)

    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    alert(JSON.stringify(response.data))
    return response.data
}


const authService = {
    register,
    login,
}

export default authService