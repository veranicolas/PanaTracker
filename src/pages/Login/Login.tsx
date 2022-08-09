import { useState } from "react"
import { View, StyleSheet, Image} from "react-native"
import { StatusBar } from "expo-status-bar"
import { useForm } from 'react-hook-form'

import { CustomButton } from "../../components/CustomButton/CustomButton"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { SubmittedInfo } from "./MomentaryModal"

import { LOGO_IMAGE } from "../../assets/images"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<any,'Login'>

export const Login = ({ navigation }:Props) =>{

    const [visible, setVisible] = useState(false)
    const [data, setLoginData] = useState({})

    const { control, handleSubmit } = useForm()

    const onLoginPress = (loginData:any) =>{
        setLoginData(loginData)
        console.log(loginData)
        navigation.navigate('Home')
    }

    const onSignupPress = () =>{
        // TODO ADD navigate to SignUp page
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
                />
                <CustomInput
                    control={control}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                />            
                <CustomButton title="LOGIN" onPress={handleSubmit(onLoginPress)} />
                <CustomButton title="SIGNUP" onPress={onSignupPress} />
                
                <SubmittedInfo loginData={data} visible={visible} setVisible={setVisible}/>
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