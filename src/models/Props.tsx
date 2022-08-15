import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { Control } from "react-hook-form"

type LoginProps = NativeStackScreenProps<any,'Login'>

type ProfileProps = DrawerScreenProps<any, 'Profile'>

type CustomInputProps = {
    control:Control,
    name:string,
    placeholder:string,
    secureTextEntry?:boolean,
    rules:{},
    maxLength:number
}

type CustomButtomProps = {
    onPress:()=> any,
    title:string
}

export { 
    LoginProps,
    CustomInputProps,
    CustomButtomProps,
    ProfileProps
}