import axios, { AxiosError } from "axios"

const URL = 'http://192.168.0.181:3000/'

const getSummoner = async (summonerName:string) =>{

    try{
        const response = await axios.get(`${URL}summoner/${summonerName}`)
        return response.data
    } catch(error:any){
        return {...error, message:'Not found'}
    }
    
}

const getMainChampionSplash = async (summonerID:string) =>{

    const { data } = await axios.get(`${URL}summoner/champion/${summonerID}`)
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`
}

export { getSummoner , getMainChampionSplash}