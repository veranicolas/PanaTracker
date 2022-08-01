import { TextInput, View, StyleSheet } from "react-native"
import { Controller } from "react-hook-form"

export const CustomInput = (props:any) =>{
    return(
        <Controller
            control={props.control}
            name={props.name}
            render={({field:{onBlur, onChange, value}})=>
                <View style={style.inputsContainer}>
                    <TextInput
                        style={style.inputs}
                        value={value}
                        placeholder={props.placeholder}
                        onBlur={onBlur}
                        onChangeText={(value)=>onChange(value)}
                        secureTextEntry={props.secureTextEntry}
                    />
                </View>
            }
        />
    )
}

const style = StyleSheet.create({
    inputsContainer:{
        marginBottom:15
    },
    inputs:{
        padding:3,
        paddingLeft:6,

        borderWidth:1,
        borderColor:'#e8e8e8',
        borderRadius:5,
    },
    inputsError:{
        padding:3,
        paddingLeft:6,

        borderWidth:1,
        borderColor:'red',
        borderRadius:5,
    },
    inputsErrorText:{
        color:'red',
        paddingLeft:2
    },
})