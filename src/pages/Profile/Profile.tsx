import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"
import { useSelector } from "react-redux"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import { ProfileProps } from "../../models/Props"

export const Profile = ({ navigation }:ProfileProps) =>{

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)
    const splashData = useSelector((state:any)=> state.mainChampionSplash.splash)

    console.log(splashData)

    const onLogoutPress = () =>{
        navigation.navigate('Login')
    }

    // TODO set background image as the main champion

    return (
        <View style={styles.mainContainer}>
            <ImageBackground 
                resizeMode="cover"
                style={styles.backgroundImage}
                source={{uri:splashData}}
            >  
                <View style={{height:125, width:125, backgroundColor:'white', flexDirection:'column', justifyContent:'center',alignItems:'center', borderRadius:12, marginLeft:10}}>
                    <Image 
                        style={{height:80, width:80}}
                        source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${summonerData.profileIconId}.png`}}
                    />
                    <Text>{summonerData.name}</Text>
                </View>
            </ImageBackground>

            <CustomButton title="Logout" onPress={onLogoutPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%',
        paddingBottom:50,
        backgroundColor:'#F5F5F5'
    },
    backgroundImage:{
        backgroundColor:'white', 
        width:'100%', 
        height:250, 
        justifyContent:'center', 
        alignItems:'flex-start'
    }
})