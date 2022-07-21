import { View, TextInput, StyleSheet } from "react-native"
import { ButtonLogin } from "./ButtonLogin/ButtonLogin"

export const Login = () =>{
    return(
        <View style={styles.loginContainer}>
            <TextInput style={styles.inputs} placeholder="Email" />
            <TextInput style={styles.inputs} placeholder="Password" />
            <ButtonLogin />
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        height:200,
        width:'75%',
        padding:50,
        backgroundColor:'#fff',
        borderRadius:12
    },
    inputs:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#e8e8e8',
        borderRadius:5,
        padding:3,
        paddingLeft:6
    },
    button:{
        backgroundColor:'#403bd9',
        borderRadius:12
    }
})