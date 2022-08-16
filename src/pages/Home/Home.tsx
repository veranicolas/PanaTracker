import { Text, View, StyleSheet, Dimensions } from "react-native"

import { Shadow } from "react-native-shadow-2"
import { MaterialIcons } from '@expo/vector-icons';
import { AddFriends, FriendsList } from "./FriendsList";

import { CurrentRankProps, HomeHeaderProps, HomeProps } from "../../models/Props";

const HomeHeader = ({onProfilePress}:HomeHeaderProps) => {

    // TODO change icon for summoner icon

    return(
        <View style={styles.header}>
            <MaterialIcons onPress={onProfilePress} name="account-circle" size={38} color="black" />
            <Text style={styles.headerTitle}>Hello again!</Text>
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

    // TODO Do the UI components (YourFriends)

    const windowWidth = Dimensions.get('window').width * 0.9

    const onProfilePress = () =>{
        navigation.toggleDrawer()
    }

    return(
        <View style={styles.homeContainer}>
            <HomeHeader onProfilePress={onProfilePress}/>
            <CurrentRank width={windowWidth * 0.97}/>
            <AddFriends width={windowWidth * 0.97} />
            <FriendsList width={windowWidth}/>
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
        paddingVertical:50
    },
    textShadow:{
        height:80,
        fontSize:20,
        textAlignVertical:'center',
        paddingHorizontal:20
    },
    header:{
        height:80,
        width:'100%',
        paddingHorizontal:23,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    headerTitle:{
        marginHorizontal:10,
        fontSize:26,
        fontWeight:'700'
    }
})