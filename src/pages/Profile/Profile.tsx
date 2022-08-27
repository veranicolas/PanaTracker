import { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"
import { useSelector } from "react-redux"
import { Status } from "../../components"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import { ProfileProps } from "../../models/Props"
import { getMainChampionSplash } from "../../services/api"

export const Profile = ({ navigation }:ProfileProps) =>{

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)
    
    const onLogoutPress = () =>{
        navigation.navigate('Login')
    }

    // TODO set background image as the main champion

    return (
        <View style={styles.mainContainer}>
            <ImageBackground 
                resizeMode="cover"
                style={{backgroundColor:'white', width:'100%', height:250, justifyContent:'center', alignItems:'flex-start'}}
                source={{uri:'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg'}}
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
            <Status style="light"/>
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
})