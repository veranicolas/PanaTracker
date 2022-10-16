import { useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, Modal } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import { ProfileProps } from "../../models/Props"

import { setStatus } from '../../redux/slices/profileSlice'
import StatusModal from './StatusModal'

const DEVICE_HEIGHT = Dimensions.get('screen').height

export const Profile = ({ navigation }:ProfileProps) =>{

    const [visible, setVisible] = useState(false)
    const status = useSelector((state:any)=> state.profileData.status)
    const summonerData = useSelector((state:any)=> state.profileData.summonerData)
    const splashData = useSelector((state:any)=> state.mainChampionSplash.splash)
    const dispatch = useDispatch()

    const onLogoutPress = () =>{
        navigation.navigate('SignUp')
    }

    const onChangeStatusPress = () =>{
        setVisible((visible) => !visible)
    }

    const onDonePress = (text:string) =>{
        dispatch(setStatus(text))
        setVisible((visible) => !visible)
    }

    return (
        <View style={styles.mainContainer}>
            <ImageBackground 
                resizeMode="cover"
                style={[styles.backgroundImage, {height:DEVICE_HEIGHT * 0.25}]}
                source={{uri:splashData}}
            >  
                <View style={{width:'90%', flexDirection:'row', position:'relative',top: 120, left: 5}}>
                    <View style={styles.profileIcon}>
                        <Image 
                            style={{height:90, width:90, borderRadius:3}}
                            source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${summonerData.profileIconId}.png`}}
                        />
                        <View style={styles.statusBox}>
                            <Text style={{overflow:'scroll', width:160, textAlign:'center', fontSize:20, fontWeight:'600'}}>{summonerData.name}</Text>
                            <Text style={{fontSize:14}}>{status && `"${status}"`}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <View style={[{height:DEVICE_HEIGHT * 0.45}, styles.informationContainer]}>       
                <CustomButton title="change status" style={{marginBottom:25}} onPress={onChangeStatusPress}/> 
                <View style={{borderTopWidth:1, borderTopColor:'lightgrey', paddingTop:15}}>
                    <CustomButton title="Logout" onPress={onLogoutPress}/>
                </View>
            </View>

            <StatusModal visible={visible} onDonePress={onDonePress}/>
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
        height:100, 
        width:310, 
        paddingHorizontal:10,
        position:'relative',
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center', 
        borderRadius:7,
        
        marginLeft:35,
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
        flexDirection:'column',
        justifyContent:'flex-end',
        width:'90%', 
        padding:20,
        marginTop:10
    }
})