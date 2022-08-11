import { TextInput, View, StyleSheet, Text } from "react-native"
import { Controller } from "react-hook-form"
import { CustomInputProps } from "../../models/Props"

export const CustomInput = ({control,name,placeholder,secureTextEntry,rules = {}, maxLength}:CustomInputProps) =>{
    return(
        <Controller
            control={control}
            name={name}
            render={({field:{onBlur, onChange, value}, fieldState:{error}})=>
                <View style={style.inputsContainer}>
                    <TextInput
                        style={error ? style.inputsError : style.inputs}
                        value={value}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={(value)=>onChange(value)}
                        maxLength={maxLength}
                        secureTextEntry={secureTextEntry}
                    />
                    {error && 
                        <Text style={style.inputsErrorText}>{error.message || 'Error'}</Text>}
                </View>
            }
            rules={rules}
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