import { Text, View, StyleSheet } from "react-native"
import { Shadow } from "react-native-shadow-2"
import { MaterialIcons } from '@expo/vector-icons';

export const Home = () =>{
    return(
        <View style={styles.homeContainer}>
            <Shadow style={{width:200, height:200, borderRadius:12}}>
                <Text style={styles.textShadow}>Hello there!</Text>
            </Shadow>
        </View>
    )
}

export const HomeHeader = () =>{
    return(
        <View style={styles.homeHeader}>
            <MaterialIcons name="account-circle" size={28} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    homeHeader:{
        width:300,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    textShadow:{
        padding:20
    }
})