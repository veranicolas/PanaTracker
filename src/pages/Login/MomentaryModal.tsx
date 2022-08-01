import { Modal, View, Text, StyleSheet, Button} from 'react-native'

export const SubmittedInfo = (props:any) =>{
    return(
        <Modal 
            animationType="slide"
            visible={props.visible}
            transparent={false}
        >
            <View style={styles.modalContainer}>
                <Text>{props.loginData.email}</Text>
                <Text>{props.loginData.password}</Text>
                <Button title="close modal" onPress={()=>{props.setVisible(false)}}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        height:150,
        width:'60%',
        marginTop:100,
        padding:30,

        justifyContent:'space-evenly',
        alignSelf:'center',
        
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#f2bcb8',
        borderRadius:12,
    },
})