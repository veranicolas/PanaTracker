import { useState } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import { AddFriendsProps } from "../../models/Props"
import { MaterialIcons } from "@expo/vector-icons"
import { useForm } from "react-hook-form"

import Modal from 'react-native-modal'
import { CustomButton, CustomInput } from "../../components"
import { getSummoner } from "../../services/api"

const AddFriends = ({width, onPressAddFriend}:AddFriendsProps) =>{

    const [visible, setVisible] = useState(false)
    const {control, handleSubmit, reset} = useForm()

    const onPressHandleSubmit = async ({summoner}:any) =>{
        const summonerData = await getSummoner(summoner)
        onPressAddFriend(summonerData)
        setVisible(false)
        reset()
    }

    return(
        <Pressable onPress={()=>setVisible(true)}>
            <View style={[{width},styles.addFriends]}>
                <Text style={{fontSize:24, fontWeight:'600'}}>Add your friends</Text>
                <MaterialIcons name="person-add" size={38} color="black" />
            </View>
            <Modal isVisible={visible}>
                <View>
                    <CustomInput 
                        control={control}
                        name="summoner"
                        placeholder="Your friend's summoner name"
                        rules={{
                            required:'You must enter a name'
                        }}
                        maxLength={40}
                    />
                    <CustomButton onPress={handleSubmit(onPressHandleSubmit)} title="ADD FRIEND"/>
                    <CustomButton onPress={()=>{
                        setVisible(false)
                        reset()
                    }} title="CANCEL"/>
                </View>
            </Modal>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    addFriends:{
        height:70,
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:30,
        borderRadius:8,
        backgroundColor:'lightblue'
    }
})

export { AddFriends }