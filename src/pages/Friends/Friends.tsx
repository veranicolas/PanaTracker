import { View, Dimensions, StyleSheet} from "react-native"
import { AddFriends, FriendsList } from "./FriendComponents"

const Friends = () =>{

    const windowWidth = Dimensions.get('window').width * 0.9
    return(
        <View style={styles.homeContainer}>
            <AddFriends width={windowWidth * 0.97} />
            <FriendsList width={windowWidth} />
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
        paddingVertical:10,
        backgroundColor:'#F5F5F5'
    }
})

export { Friends }