import { Text, View, StyleSheet, Dimensions, Image, Pressable } from "react-native"
import { useSelector, useDispatch } from "react-redux";

import { HomeHeaderProps, HomeProps } from "../../models/Props";
import { Status } from "../../components";
import { CurrentRank } from "./CurrentRank";
import { useEffect } from "react";
import { getSummoner } from "../../services/api";
import { setProfile } from "../../redux/slices/profileSlice";

const HomeHeader = ({onProfilePress}:HomeHeaderProps) => {

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)

    return(
        <View style={styles.header}>
            <Pressable onPress={onProfilePress}>
                <View style={{height:49, width:49, marginHorizontal:5, backgroundColor:'black', borderRadius:25}}>
                    <Image 
                        style={{height:45, width:45, borderRadius:25, alignSelf:'center', marginVertical:2}}
                        source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${summonerData.profileIconId}.png`}}
                    />
                </View>
            </Pressable>
            <Text style={styles.headerTitle}>{summonerData.name ? summonerData.name : 'you'}</Text>
        </View>
    )
}

export const Home = ({navigation}:HomeProps) =>{

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)
    const windowWidth = Dimensions.get('window').width * 0.9
    const dispatch = useDispatch()

    useEffect(()=>{
        const updatedData = getSummoner(summonerData.name)
        dispatch(setProfile(updatedData))
    },[])

    return(
        <View style={styles.homeContainer}>
            <CurrentRank width={windowWidth * 0.97}/>
            <Status style="dark"/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%',
        paddingVertical:20,
        backgroundColor:'#F5F5F5'
    },
    textShadow:{
        height:80,
        fontSize:20,
        textAlignVertical:'center',
        paddingHorizontal:20,
        backgroundColor:'#07020D',
        borderRadius:12,
        color:'white'
    },
    header:{
        height:60,
        width:'100%',
        paddingHorizontal:25,
        paddingVertical:1,
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        borderBottomColor:'lightgrey',
        borderBottomWidth:1
    },
    headerTitle:{
        paddingVertical:9,
        marginHorizontal:10,
        fontSize:24,
        fontWeight:'700',
        color:'black'
    }
})