import { View, Text, Image, StyleSheet } from 'react-native'
import { FriendItemProps } from '../../../models/Props'

const FriendItem = ({width, dataItem:{name, profileIconId, rankImage}}:FriendItemProps) =>{

    const itemWidth = width * 0.97

    return(
        <View style={[{width:itemWidth}, styles.friendItem, styles.shadow]}>
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
        height:80,
        marginVertical:8, 
        marginHorizontal: 15,
        paddingRight:10,
        position:'relative',
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'space-evenly',
        alignItems:'center', 
        borderRadius:12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,

        elevation: 13
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
        color:'black'
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
        color:'black'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export { FriendItem }