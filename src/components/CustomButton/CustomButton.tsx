import { View, Text, Pressable, StyleSheet} from 'react-native'
import { CustomButtomProps } from '../../models/Props'

// TODO ADD styles in props and props types
export const CustomButton = ({onPress, title, ripple, style}:CustomButtomProps) =>{
    return(
        <View >
            <Pressable style={style ? style : styles.button} android_ripple={{color: ripple ? ripple : 'white'}} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#212121',
        borderRadius:10,
        marginTop:10,
        padding:10
    },
    text:{
        color:'#ffffff',
        textAlign:'center',
        fontWeight:'700',
    }
})