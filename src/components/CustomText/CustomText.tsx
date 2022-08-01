import { Text } from "react-native"

export const CustomText = (props:any) =>{
    return(
        <Text style={[props.styles]}>{props.text}</Text>
    )
}