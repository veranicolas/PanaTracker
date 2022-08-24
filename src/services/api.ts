import axios from "axios"

const URL = 'https://la2.api.riotgames.com'

const getSummoner = async (summonerName:string) =>{

    const response = await axios.get(`${URL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-d099fae6-60b5-485a-9695-67693a35560f`)
    return response.data
}

export { getSummoner }