import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Control } from "react-hook-form"

type LoginProps = NativeStackScreenProps<any,'Login'>

type CustomInputProps = {
    control:Control,
    name:string,
    placeholder:string,
    secureTextEntry?:boolean
}

type CustomButtomProps = {
    onPress:()=> any,
    title:string
}

export { 
    LoginProps,
    CustomInputProps,
    CustomButtomProps
}