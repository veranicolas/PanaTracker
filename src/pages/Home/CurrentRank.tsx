import { View, Text, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { Shadow } from 'react-native-shadow-2'
import { CurrentRankProps } from '../../models/Props'

const CurrentRank = ({width}:CurrentRankProps) =>{

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)

    return(
        <Shadow style={[{width}, styles.shadowBox]}>
            <View style={styles.rankBox}>
                <Text style={styles.textShadow}>Current Rank</Text>
                
                <Text style={styles.rankText}>{summonerData.rankedData[0].rank}</Text>
                <Image style={styles.rankImage} source={{uri:summonerData.rankImage}} />
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
        justifyContent:'space-between'
    },
    rankText:{
        fontWeight:'bold',
        textAlign:'right', 
        textAlignVertical:'center', 
        fontSize:36, 
        width:100 
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
    rankImage:{
        height:80, 
        width:90, 
        alignSelf:'center'
    }
})

export { CurrentRank }