import axios, { AxiosError } from "axios"

const URL = process.env.BE_URL || 'https://pana-tracker.fly.dev/' // pay attention to changes in wifi

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
    return {
        splash:`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`,
        currentPatch: data.version
    }
}

const getUpdatedFriends = async (ids:any[]) =>{

    try{
        const { data } = await axios.post(`${URL}summoner/friends`, {friendsIDs:ids})
        return {
            data
        }
    } catch(error){
        console.log(error)
    }
}

export { getSummoner , getMainChampionSplash, getUpdatedFriends }