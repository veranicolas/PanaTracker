import { View } from "react-native"
import { useForm } from "react-hook-form"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { CustomButton } from "../../components/CustomButton/CustomButton"

import { styles } from "../Login/Login"

export const SignUp = () => {

    const { control, handleSubmit } = useForm()

    const onPressSignUp = (data:any) =>{
        console.log(data)
    }

    return(
        <View style={styles.loginContainer}>
            <View style={[styles.formContainer, {height:400}]}>
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
            </View>
        </View>
    )
}