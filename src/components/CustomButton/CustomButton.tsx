import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { CustomButtomProps } from '../../models/Props'

// TODO ADD styles in props and props types
export const CustomButton = ({onPress, title}:CustomButtomProps) =>{
    return(
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
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