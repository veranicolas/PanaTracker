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
        navigation.navigate('SignUp')
    }

    const onDeleteAllFriends = () =>{
        dispatch(deleteAllFriends(''))
    }

    // TODO add set status for changing the user status

    return (
        <View style={styles.mainContainer}>
            <ImageBackground 
                resizeMode="cover"
                style={[styles.backgroundImage, {height:DEVICE_HEIGHT * 0.3}]}
                source={{uri:splashData}}
            >  
                <View style={{width:'90%', flexDirection:'row', position:'relative',top: 120, left: 5}}>
                    <View style={styles.profileIcon}>
                        <Image 
                            style={{height:110, width:110, borderRadius:55}}
                            source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${summonerData.profileIconId}.png`}}
                        />
                        <View style={styles.statusBox}>
                            <Text style={{overflow:'scroll', width:160, textAlign:'center', fontSize:20, fontWeight:'600'}}>{summonerData.name}</Text>
                            <Text style={{fontSize:14}}>"lmao caballeros"</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <View style={[{height:DEVICE_HEIGHT * 0.45}, styles.informationContainer]}>
                {/* <View style={{height:'80%', width:'100%'}}>
                    <CustomButton title="Delete all friends" ripple="red" onPress={onDeleteAllFriends}/>
                </View> */}
                
                <View style={{borderTopWidth:1, borderTopColor:'lightgrey', paddingTop:15}}>
                    <CustomButton title="Logout" onPress={onLogoutPress}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingBottom:25,
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
        width:355, 
        paddingHorizontal:10,
        position:'relative',
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center', 
        borderRadius:60, 
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        marginLeft:10,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,

        elevation: 13,
    },
    statusBox:{
        height:'60%', 
        width:'65%', 
        flexDirection:'column', 
        justifyContent:'space-evenly', 
        alignItems:'center',
    },
    informationContainer:{
        width:'90%', 
        padding:20,
        marginTop:10
    }
})