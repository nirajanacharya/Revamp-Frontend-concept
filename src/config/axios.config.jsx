import axios from 'axios';  

const axiosInstance = axios.create({
// this base url contains the url which is same for all like localhost:5000 
    baseURL:import.meta.env.VITE_BASE_URL,
    //some time we have to wait for the response of api call so we use 
    //timeout property
    timeout:3000,
    //if i do not receive any message from the server in the respective time duration 
    timeoutErrorMessage:"Server time is out ",
    //if we want to send the data in the form of json then we use headers
    responseType:"json",  
    //we can also define method which want to use for api security . method: "POST" 

})

export default axiosInstance;   