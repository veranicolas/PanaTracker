import { View, Text, Image, StyleSheet } from 'react-native'
import { FriendItemProps } from '../../../models/Props'

const FriendItem = ({width, dataItem:{name, profileIconId, rankImage}}:FriendItemProps) =>{

    const itemWidth = width * 0.97

    return(
        <View style={[{width:itemWidth}, styles.friendItem]}>
            <Image
                style={styles.summonerIcon}
                source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${profileIconId}.png`}}
            />
            <Text style={styles.summonerName}>{name}</Text>
            {rankImage ? 
                (<Image
                    style={styles.rankImage}
                    source={{uri:rankImage}}
                />)
                :
                (<Text style={styles.unrankedText}>Unranked</Text>)
                }
        </View>
    )
}

const styles = StyleSheet.create({
    friendItem:{
        flexDirection:'row',
        height:70,
        borderRadius:12, 
        alignSelf:'center', 
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginVertical:5,
        backgroundColor:'#07020D'
    },
    summonerIcon:{
        height:60, 
        width:60, 
        borderRadius:5,
        alignSelf:'center', 
        marginRight:15
    },
    summonerName:{
        height:70, 
        width:140, 
        maxWidth:140, 
        overflow:'scroll', 
        textAlign:'left', 
        textAlignVertical:'center',
        color:'white'
    },
    rankImage:{
        height:90, 
        width:90, 
        alignSelf:'center',
    },
    unrankedText:{
        height:70, 
        width:90, 
        textAlignVertical:'center', 
        textAlign:'center', 
        fontWeight:'bold',
        color:'white'
    }
})

export { FriendItem }