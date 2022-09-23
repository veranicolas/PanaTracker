import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUser = async (summonerData:any) =>{

    try{
        const jsonUser = JSON.stringify(summonerData)
        await AsyncStorage.setItem('user', jsonUser)
    } catch(error){
        console.log(error)
    }
}

const getStoredUser = async ()=>{

    try{
        const data = await AsyncStorage.getItem('user')
        return data
    } catch(error){
        console.log(error)
    }
}

export { storeUser , getStoredUser }