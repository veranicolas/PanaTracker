import { useState } from 'react'
import { View, Modal, TextInput, Dimensions, StyleSheet } from 'react-native'
import { CustomButton } from '../../components'

const DEVICE_HEIGHT = Dimensions.get('screen').height

const StatusModal = ({visible, onDonePress}:any) => {

    const [text, setText] = useState('')

    return(
        <Modal visible={visible} transparent={true} animationType='fade'>
            <View style={styles.modalContainer}>
                <View style={styles.modalBox}>
                    <TextInput 
                        value={text}
                        placeholder="Set your status"
                        onChangeText={(value)=> setText(value)}
                        style={styles.textInput}
                    /> 
                    <CustomButton title="done" style={{backgroundColor: 'green'}} onPress={()=>onDonePress(text)}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        height:'100%', 
        width:'100%', 
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
    modalBox:{
        height:120, 
        width:300, 
        backgroundColor:'white', 
        padding:20, 
        position:'absolute', 
        top:DEVICE_HEIGHT * 0.4, 
        alignSelf:'center'
    },
    textInput:{borderWidth:1, borderRadius:7, borderColor:'black', fontSize:12, width:'100%', paddingLeft:10}
})

export default StatusModal;