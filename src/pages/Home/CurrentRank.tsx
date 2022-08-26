import { View, Text, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { Shadow } from 'react-native-shadow-2'
import { CurrentRankProps } from '../../models/Props'

const CurrentRank = ({width}:CurrentRankProps) =>{

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)

    const rankText = `${summonerData.rankedData[0].leaguePoints}LP   ${summonerData.rankedData[0].rank}`

    return(
        <Shadow style={[{width}, styles.shadowBox]}>
            <View style={styles.rankBox}>
                <Text style={styles.textShadow}>Current Rank</Text>
                
                <View style={{flexDirection:'row', width:'70%', justifyContent:'space-around'}}>
                    <Text style={styles.rankText}>{rankText}</Text>
                    <Image style={styles.rankImage} source={{uri:summonerData.rankImage}} />
                </View>
            </View>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    shadowBox:{
        height:80,
        borderRadius:12
    },
    rankBox:{
        flexDirection:'row', 
        justifyContent:'space-between',
        width:'100%'
    },
    rankText:{
        flexDirection:'row',
        fontWeight:'bold',
        textAlign:'right', 
        textAlignVertical:'center', 
        fontSize:36, 
        width:'65%'
    },
    rankImage:{
        height:80, 
        width:'35%', 
        alignSelf:'center'
    },
    textShadow:{
        width:'30%',
        height:80,
        fontSize:20,
        textAlignVertical:'center',
        paddingHorizontal:20,
        backgroundColor:'#07020D',
        borderRadius:12,
        color:'white'
    }
})

export { CurrentRank }