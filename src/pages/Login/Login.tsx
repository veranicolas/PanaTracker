import { useState } from "react"
import { View, StyleSheet, Text} from "react-native"
import { useForm } from 'react-hook-form'

import { CustomButton, CustomInput, Status } from "../../components"

import { LoginProps } from "../../models/Props"

const AppTitle = () =>{
    return(
        <View style={styles.appTitleContainer}>
            <Text style={styles.appTitle}>PanaTracker👀</Text>
        </View>
    )
}

export const Login = ({ navigation }:LoginProps) =>{

    const [data, setLoginData] = useState({})

    const { control, handleSubmit } = useForm()

    const onLoginPress = (loginData:any) =>{
        setLoginData(loginData)
        console.log(loginData)
        navigation.navigate('Home')
    }

    const onSignupPress = () =>{
        navigation.navigate('SignUp')
    }

    return(
        <View style={styles.loginContainer}>
            <AppTitle />
            <View style={styles.formContainer}>
                <CustomInput 
                    control={control}
                    name="email"
                    placeholder="Email"
                    rules={{
                        required:'Email is required.',
                        validate:{
                            empty: (value:string) => value.trim() !== '' || 'You must enter an email', 
                        },
                        pattern:{
                            value: /\S+@\S+\.\S+/,
                            message:'Must be a valid email'
                        }
                    }}
                    maxLength={254}
                />
                <CustomInput
                    control={control}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    rules={{
                        required:'Password is required', 
                        validate:{
                            empty: (value:string) => value.trim() !== '' || 'You must enter an password', 
                        },
                        minLength:{
                            value:8,
                            message:'Password is too short.'
                        }}}
                    maxLength={22}
                />            
                <CustomButton title="LOGIN" onPress={handleSubmit(onLoginPress)} />
                <CustomButton title="SIGNUP" onPress={onSignupPress} />
            </View>
            <Status style="light"/>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    formContainer:{
        justifyContent:'space-evenly',
        height:250,
        width:'95%',
        padding:10,
        backgroundColor:'#fff',
        borderRadius:12
    },
    appTitleContainer:{
        width:'100%',
        height:230,
        marginBottom:10,
        padding:15,
        backgroundColor:'#07020D',
        justifyContent:'center'
    },
    appTitle:{
        marginTop:30,
        fontSize:48,
        fontWeight:'bold',
        textAlign:'left',
        color:'white',
        paddingHorizontal:5
    }
})