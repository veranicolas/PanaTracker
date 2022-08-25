import axios, { AxiosError } from "axios"

const URL = 'http://192.168.0.181:3000/'

const getSummoner = async (summonerName:string) =>{

    try{
        const response = await axios.get(`${URL}summoner?name=${summonerName}`)
        return response.data
    } catch(error:any){
        return {...error, message:'Not found'}
    }
    
}

export { getSummoner }