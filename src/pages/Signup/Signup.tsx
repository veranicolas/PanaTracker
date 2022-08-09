import { View } from "react-native"
import { useForm } from "react-hook-form"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { CustomButton } from "../../components/CustomButton/CustomButton"

export const SignUp = () => {

    const { control, handleSubmit } = useForm()

    const onPressSignUp = (data:any) =>{
        console.log(data)
    }

    return(
        <View>
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
            <CustomInput
                control={control}
                name="summoner"
                placeholder="IGN"
            />
            <CustomButton title="SIGNUP" onPress={handleSubmit(onPressSignUp)}/>
        </View>
    )
}