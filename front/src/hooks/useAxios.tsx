import { useState, useEffect } from "react"
import axios, {AxiosResponse, AxiosError, AxiosRequestConfig} from "axios"
import Config from "../../config"

axios.defaults.baseURL = Config["backendURl"];

const useAxios = (axiosParams: AxiosRequestConfig) =>{

    const [response, setResponse] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(axiosParams.method === "GET" || axiosParams.method === "get")

    const fetchData = async (params: AxiosRequestConfig) => {
        try{
            const result = await axios.request(params);
            setResponse(result);
            console.log(result);
        }
        catch(err){
            if(axios.isAxiosError(err)){
                setError("Axios Error: "+ err.message);
            }
            else{
                setError(err);
            }
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(()=> {
        if(axiosParams.method === "GET" || axiosParams.method === "get"){
            fetchData(axiosParams);
        }
    },[]);

    return {response, error, loading}
}
export default useAxios;