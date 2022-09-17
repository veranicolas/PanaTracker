import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import { ProfileProps } from "../../models/Props"

import { deleteAllFriends } from "../../redux/slices/friendsSlice"

const DEVICE_HEIGHT = Dimensions.get('screen').height

export const Profile = ({ navigation }:ProfileProps) =>{

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)
    const splashData = useSelector((state:any)=> state.mainChampionSplash.splash)
    const dispatch = useDispatch()

    const onLogoutPress = () =>{
        dispatch(deleteAllFriends(''))
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.mainContainer}>
            <ImageBackground 
                resizeMode="cover"
                style={[styles.backgroundImage, {height:DEVICE_HEIGHT * 0.3}]}
                source={{uri:splashData}}
            >  
                <View style={styles.profileIcon}>
                    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100%', width:'100%'}}>
                        <Image 
                            style={{height:80, width:80, borderRadius:5}}
                            source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${summonerData.profileIconId}.png`}}
                        />
                        <Text style={{overflow:'scroll'}}>{summonerData.name}</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={[{height:DEVICE_HEIGHT * 0.55}, styles.informationContainer]}>
                <View style={{height:'80%', width:'100%'}}>

                </View>
                <CustomButton title="Logout" onPress={onLogoutPress}/>
            </View>
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
        justifyContent:'center', 
        alignItems:'flex-start'
    },
    profileIcon:{
        height:125, 
        width:125, 
        backgroundColor:'white', 
        flexDirection:'column', 
        justifyContent:'center',
        alignItems:'center', 
        borderRadius:12, 
        marginLeft:10,
        marginTop:20
    },
    informationContainer:{
        width:'90%', 
        padding:20,
        marginTop:10
    }
})