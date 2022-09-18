import { View, Text, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { CurrentRankProps } from '../../models/Props'

const CurrentRank = ({width}:CurrentRankProps) =>{

    return(
        <View style={[styles.rankContainer, {width}]}>
            <Text style={styles.currentRankText}>Current Rank</Text>
            
            <View style={{width:'68%', flexDirection:'row'}}>
                <DataDisplay />
            </View>
        </View>
    )
}

const DataDisplay = () =>{

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)

    let rankText:string = 'Unranked'
    if(summonerData.rankedData){
        rankText = `${summonerData.rankedData[0].leaguePoints}LP   ${summonerData.rankedData[0].rank}`
    }

    return(
        <>
            {
                rankText !== 'Unranked' ? 
                    (<>
                        <Text style={styles.rankText}>{rankText}</Text>
                        <Image style={styles.rankImage} source={{uri:summonerData.rankImage}} />
                    </>)
                :
                (<>
                        <Text style={styles.rankText}>{rankText}</Text>
                        <Image resizeMode='stretch' style={{alignSelf:'center', height:45, width:60}} source={{uri:'https://eloboost24.eu/images/divisions/0.webp'}} />
                </>)
            }
        </>
    )
}

const styles = StyleSheet.create({
    rankContainer:{
        height:80, 
        paddingRight:10,
        position:'relative',
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center', 
        borderRadius:12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,

        elevation: 13,
    },
    rankText:{
        flexDirection:'row',
        fontWeight:'bold',
        textAlign:'right', 
        textAlignVertical:'center', 
        fontSize:32, 
        height:90,
        width:'65%'
    },
    rankImage:{
        height:80, 
        width:'35%', 
        alignSelf:'center'
    },
    currentRankText:{
        width:'30%',
        height:82,
        marginVertical:5,
        fontSize:20,
        textAlignVertical:'center',
        paddingHorizontal:20,
        backgroundColor:'#07020D',
        borderRadius:12,
        color:'white'
    }
})

export { CurrentRank }