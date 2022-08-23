import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, FlatList, Dimensions, StyleSheet, Pressable} from 'react-native'
import { AddFriendsProps, FriendItemProps, FriendListProps } from '../../models/Props'

const FriendItem = ({width, name}:FriendItemProps) =>{

    const itemWidth = width * 0.97

    return(
        <View style={[{width:itemWidth}, styles.friendItem]}>
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
                        ({item})=> <FriendItem width={width} name={item} />
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

const AddFriends = ({width, onPressAddFriend}:AddFriendsProps) =>{

    return(
        <Pressable onPress={onPressAddFriend}>
            <View style={[{width},styles.addFriends]}>
                <Text style={{fontSize:24, fontWeight:'600'}}>Add your friends</Text>
                <MaterialIcons name="person-add" size={38} color="black" />
            </View>
        </Pressable>
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
        height:70,
        borderWidth:1, 
        borderRadius:12, 
        alignSelf:'center', 
        paddingHorizontal:20,
        marginVertical:5
    },
    addFriends:{
        height:70,
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:30,
        borderRadius:8,
        backgroundColor:'lightblue'
    }
})

export { FriendItem, FriendsList, AddFriends}