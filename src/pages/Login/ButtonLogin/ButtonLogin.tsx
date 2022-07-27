import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export const ButtonLogin = (props:any) =>{
    return(
        <View style={styles.button}>
            <TouchableOpacity onPress={()=>{props.handleSubmit()}}>
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#403bd9',
        borderRadius:6,
        marginTop:10,
        padding:5
    },
    text:{
        color:'white',
        textAlign:'center'
    }
})