import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

// TODO ADD styles in props and props types
export const CustomButton = (props:any) =>{
    return(
        <View style={styles.button}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#403bd9',
        borderRadius:6,
        marginTop:10,
        padding:10
    },
    text:{
        color:'white',
        textAlign:'center',
        fontWeight:'700'
    }
})