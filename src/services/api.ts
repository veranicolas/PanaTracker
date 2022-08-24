import axios from "axios"

const URL = 'http://192.168.0.181:3000/'

const getSummoner = async (summonerName:string) =>{

    const response = await axios.get(`${URL}summoner?name=${summonerName}`)
    return response.data
}

export { getSummoner }