import { View, Text, Modal, Button, StyleSheet } from 'react-native'

const DeleteFriendModal = ({visible, onPressDeleteFriend, onChangeVisibility}:any) =>{

    return(
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, styles.shadow]}>
                    <Text style={styles.deleteText}>Delete?</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <Button title='Yes' onPress={onPressDeleteFriend}/>
                        <Button title='No' onPress={onChangeVisibility}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{flex:1, justifyContent:'center', alignItems:'center'},
    modalContent:{width:120, height:100, padding:10, backgroundColor:'white', flexDirection:'column'},
    deleteText:{height:40, width:'100%', textAlign:'center', fontSize:16},
    shadow:{shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}
})

export default DeleteFriendModal