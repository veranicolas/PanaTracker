import { useState } from "react"
import { View, StyleSheet, Image} from "react-native"
import { useForm } from 'react-hook-form'

import { CustomButton } from "../../components/CustomButton/CustomButton"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { SubmittedInfo } from "./MomentaryModal"

import { LOGO_IMAGE } from "../../assets/images"


export const Login = () =>{

    const [visible, setVisible] = useState(false)
    const [data, setLoginData] = useState({})

    const { control, handleSubmit } = useForm()

    const onLoginPress = (loginData:any) =>{
        setLoginData(loginData)
        setVisible(true)
    }

    const onSignupPress = () =>{
        // TODO ADD navigate to SignUp page
    }

    return(
        <View style={styles.loginContainer}>
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
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        justifyContent:'center',
        height:500,
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