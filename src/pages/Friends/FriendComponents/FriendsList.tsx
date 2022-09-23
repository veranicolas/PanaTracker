import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native'
import { FriendItem } from './FriendItem'
import { useSelector } from 'react-redux'

import { FriendListProps } from '../../../models/Props'

const FriendsList = ({width}:FriendListProps) =>{

    const height = Dimensions.get('window').height * 0.5
    const friends:any = useSelector((state:any)=> state.friendsArrayData.friends )
    
    return(
        <View style={[{height},styles.friendsList]}>
            {
                friends !== undefined ? 
                (<FlatList 
                    data={friends}
                    renderItem={
                        ({item})=> <FriendItem width={width} dataItem={item} />
                    }
                    keyExtractor={(item:any, index)=>{
                        return item.id
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
        height:'80%'
    },
})

export { FriendsList }