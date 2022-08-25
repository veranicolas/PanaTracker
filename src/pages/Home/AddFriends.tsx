import { View, StyleSheet, Keyboard, Dimensions, Text } from "react-native"
import { AddFriendsProps } from "../../models/Props"
import { MaterialIcons } from "@expo/vector-icons"
import { useForm } from "react-hook-form"
import Modal from 'react-native-modal'

import { CustomButton, CustomInput } from "../../components"
import { getSummoner } from "../../services/api"
import { useState } from "react"

const AddFriends = ({width, onPressAddFriend}:AddFriendsProps) =>{

    const {control, handleSubmit, reset} = useForm()
    const [visible, setVisible] = useState(false)

    const onPressHandleSubmit = async ({summoner}:any) =>{
        const summonerData = await getSummoner(summoner)
        if(summonerData.message !== 'Not found'){
            onPressAddFriend(summonerData)
            Keyboard.dismiss()
            reset()
        } else {
            Keyboard.dismiss()
            setVisible(true)
            reset()
        }
    }

    return(
        <View style={[{width}, styles.addFriends]}>
            <CustomInput 
                control={control}
                name="summoner"
                placeholder="Your friend's summoner name"
                rules={{
                    required:'You must enter a name'
                }}
                maxLength={40}
                inputsStyle={styles.inputFriend}
            />
            <View style={styles.addFriendButton}>
                <MaterialIcons onPress={handleSubmit(onPressHandleSubmit)} name="person-add" size={30} color="black" />
            </View>
            <Modal isVisible={visible}>
                <View style={{width:300, height:100, backgroundColor:'white', alignSelf:'center', borderRadius:8, padding:15}}>
                    <Text style={{textAlign:'center'}}>Not found</Text>
                    <CustomButton title="OK" onPress={()=>setVisible(false)}/>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    addFriends:{
        height:70,
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:30,
        borderRadius:8,
    },
    addFriendButton:{
        backgroundColor:'lightblue', 
        height:38, 
        width:38,
        marginBottom:15, 
        borderRadius:5, 
        justifyContent:'center', 
        alignItems:'center'
    },
    inputFriend:{
        width: Dimensions.get('screen').width * 0.75,
        height: 38,
        backgroundColor:'white',
        borderRadius:5,
        paddingHorizontal:15
    }
})

export { AddFriends }