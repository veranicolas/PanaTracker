import { View, Text, Image, StyleSheet } from 'react-native'
import { FriendItemProps } from '../../../models/Props'

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

const styles = StyleSheet.create({
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

export { FriendItem }