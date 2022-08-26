import { Text, View, StyleSheet, Dimensions, Image } from "react-native"

import { Shadow } from "react-native-shadow-2"
import { MaterialIcons } from '@expo/vector-icons';
import { FriendsList } from "./Friends/FriendsList";
import { AddFriends } from "./AddFriends";

import { CurrentRankProps, HomeHeaderProps, HomeProps } from "../../models/Props";
import { useState } from "react";
import { useSelector } from "react-redux";

const HomeHeader = ({onProfilePress}:HomeHeaderProps) => {

    // TODO change icon for summoner icon

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)

    return(
        <View style={styles.header}>
            <View style={{height:49, width:49, marginHorizontal:5, backgroundColor:'black', borderRadius:25}}>
                <Image 
                    style={{height:45, width:45, borderRadius:25, alignSelf:'center', marginVertical:2}}
                    source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${summonerData.profileIconId}.png`}}
                />
            </View>
            <Text style={styles.headerTitle}>{summonerData.name ? summonerData.name : 'you'}</Text>
        </View>
    )
}

const CurrentRank = ({width}:CurrentRankProps) =>{

    return(
        <Shadow style={{width,height:80, borderRadius:12}}>
            <Text style={styles.textShadow}>Current Rank:</Text>
        </Shadow>
    )
}

export const Home = ({navigation}:HomeProps) =>{

    const windowWidth = Dimensions.get('window').width * 0.9

    const [friends, setFriends] = useState<any>([])

    const onPressAddFriend = (data:{}) =>{
        if(!friends){
            setFriends([data])
        } else {
            setFriends((friends:any) => [...friends, data])
        }
    }

    const onProfilePress = () =>{
        navigation.toggleDrawer()
    }

    // REVIEW should I change navigator for homepage to bottomTabs? and have HOME / FRIENDS / PROFILE for simpler and cleaner navigation

    return(
        <View style={styles.homeContainer}>
            <HomeHeader onProfilePress={onProfilePress}/>
            <CurrentRank width={windowWidth * 0.97}/>
            <AddFriends width={windowWidth * 0.97} onPressAddFriend={onPressAddFriend} />
            <FriendsList width={windowWidth} friends={friends}/>
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
        paddingVertical:50,
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
        height:80,
        width:'100%',
        paddingHorizontal:25,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    headerTitle:{
        paddingVertical:5,
        marginHorizontal:10,
        fontSize:22,
        fontWeight:'700',
        color:'black'
    }
})