import { View, Text, FlatList, Dimensions, StyleSheet, Image} from 'react-native'
import { FriendItemProps, FriendListProps } from '../../models/Props'

const FriendItem = ({width, dataItem:{name, profileIconId}}:FriendItemProps) =>{

    const itemWidth = width * 0.97

    return(
        <View style={[{width:itemWidth}, styles.friendItem]}>
            <Image
                style={{height:60, width:60, borderRadius:5, marginVertical:4, marginRight:15}}
                source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${profileIconId}.png`}}
            />
            <Text style={{height:70, textAlignVertical:'center'}}>{name}</Text>
        </View>
    )
}

const FriendsList = ({width, friends}:FriendListProps) =>{

    const height = Dimensions.get('window').height * 0.5

    // REVIEW the keyExtractor should use the summonerID

    return(
        <View style={[{height},styles.friendsList]}>
            {
                friends.length ? 
                (<FlatList 
                    data={friends}
                    renderItem={
                        ({item})=> <FriendItem width={width} dataItem={item} />
                    }
                    keyExtractor={(item, index)=>{
                        return (Math.random()*1000).toString()
                    }}
                />) 
                : 
                <Text style={{fontSize:24}}>No friends added yet</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    friendsList:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
    },
    friendItem:{
        flexDirection:'row',
        height:70,
        borderWidth:1, 
        borderRadius:12, 
        alignSelf:'center', 
        paddingHorizontal:20,
        marginVertical:5
    },
    
})

export { FriendItem, FriendsList }