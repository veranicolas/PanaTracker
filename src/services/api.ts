import axios, { AxiosError } from "axios"

const URL = 'http://192.168.0.181:3000/' || 'https://pana-tracker.fly.dev/' // pay attention to changes in wifi

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

const getUpdatedFriends = async (friendsIDs:any[]) =>{

    try{
        const { data } = await axios.post(`${URL}sumonner/friends`, friendsIDs, 
        {
            headers:{
                'Content-Type':'application/json'
            }
        })
        return {
            friends:data
        }
    } catch(error){
        console.log(error)
    }
}

export { getSummoner , getMainChampionSplash, getUpdatedFriends }