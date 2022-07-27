import { Text, View, StyleSheet } from "react-native"

export const Home = () =>{
    return(
        <View style={styles.homeContainer}>
            <Text>Welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})