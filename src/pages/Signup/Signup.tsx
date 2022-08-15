import { StyleSheet, View, Text} from "react-native"
import { useForm } from "react-hook-form"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { CustomButton } from "../../components/CustomButton/CustomButton"

import { SignUpProps } from "../../models/Props"

const AppTitle = () =>{
    return(
        <View style={styles.appTitleContainer}>
            <Text style={styles.appTitle}>Welcome!🥳</Text>
        </View>
    )
}

export const SignUp = ({ navigation }:SignUpProps) => {

    const { control, handleSubmit } = useForm()

    const onPressSignUp = (data:any) =>{
        console.log(data)
        navigation.navigate('Home')
    }

    const onPressLogin = () =>{
        navigation.goBack()
    }

    return(
        <View style={styles.signupContainer}>
            <AppTitle />
            <View style={styles.formContainer}>
                <CustomInput 
                    control={control}
                    name="email"
                    placeholder="Email"
                    maxLength={254}
                    rules={{
                        required:'Email is required.',
                        pattern:{
                            value: /\S+@\S+\.\S+/,
                            message:'Must be a valid email'
                        }
                    }}
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
                <CustomInput
                    control={control}
                    name="summoner"
                    placeholder="IGN"
                    rules={{
                        required:'You must link your summoner name.'
                    }}
                    maxLength={60}
                />
                <CustomButton title="SIGNUP" onPress={handleSubmit(onPressSignUp)}/>
                <CustomButton title="LOGIN" onPress={onPressLogin}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signupContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    formContainer:{
        justifyContent:'flex-start',
        height:450,
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
        backgroundColor:'#bbdefb',
        justifyContent:'center'
    },
    appTitle:{
        fontSize:48,
        fontWeight:'bold',
        textAlign:'left',
        color:'#000000',
        paddingHorizontal:5
    }
})