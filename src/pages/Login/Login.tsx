import { useState } from "react"
import { View, StyleSheet, Image} from "react-native"
import { StatusBar } from "expo-status-bar"
import { useForm } from 'react-hook-form'

import { CustomButton } from "../../components/CustomButton/CustomButton"
import { CustomInput } from "../../components/CustomInput/CustomInput"

import { LOGO_IMAGE } from "../../assets/images"
import { LoginProps } from "../../models/Props"

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
            <View style={styles.formContainer}>
                <Image 
                    style={styles.appLogo}
                    source={LOGO_IMAGE}
                />
                <CustomInput 
                    control={control}
                    name="email"
                    placeholder="Email"
                    rules={{
                        required:'Email is required.',
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
                        minLength:{
                            value:8,
                            message:'Password is too short.'
                        }}}
                    maxLength={22}
                />            
                <CustomButton title="LOGIN" onPress={handleSubmit(onLoginPress)} />
                <CustomButton title="SIGNUP" onPress={onSignupPress} />
            </View>
            <StatusBar backgroundColor='transparent' style="auto" />
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
        justifyContent:'center',
        height:420,
        width:'95%',
        padding:10,
        backgroundColor:'#fff',
        borderRadius:12
    },
    appLogo:{
        width:'100%',
        height:80,
        marginBottom:35,
        
        borderRadius:15,
    }
})