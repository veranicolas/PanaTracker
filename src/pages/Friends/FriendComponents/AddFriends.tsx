import { View, StyleSheet, Keyboard, Dimensions, Text, Pressable, Modal } from "react-native"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { MaterialIcons } from "@expo/vector-icons"
import { useForm } from "react-hook-form"

import { AddFriendsProps, RiotUserData } from "../../../models/Props"
import { CustomButton, CustomInput } from "../../../components"
import { addFriend, updateFriends } from "../../../redux/slices/friendsSlice"
import { getSummoner, getUpdatedFriends } from "../../../services/api"
import { getFriendsIDs } from "../../../services/dataModelingL"


const AddFriends = ({width}:AddFriendsProps) =>{

    const dispatch = useDispatch()
    const friends:any[] = useSelector((state:any)=> state.friendsArrayData.friends)

    const {control, handleSubmit, reset} = useForm()
    const [visible, setVisible] = useState(false)

    const onPressHandleSubmit = async ({summoner}:any) =>{
        const summonerData:RiotUserData = await getSummoner(summoner)
        if(summonerData.message !== 'Not found'){
            dispatch(addFriend(summonerData))
            Keyboard.dismiss()
            reset()
        } else {
            console.log(summonerData)
            Keyboard.dismiss()
            setVisible(true)
            reset()
        }
    }

    const onPressReloadFriends = async () =>{
        const ids = getFriendsIDs(friends)
        const response = await getUpdatedFriends(ids)
        dispatch(updateFriends(response?.data.data))
    }

    return(
        <View style={[{width}, styles.addFriends]}>
            <CustomInput 
                control={control}
                name="summoner"
                placeholder="Your friend's summoner name"
                rules={{
                    required:'You must enter a name',
                    validate:{
                        empty: (value:string) => value.trim() !== '' || 'You must enter a name',
                    }
                }}
                maxLength={40}
                inputsStyle={styles.inputFriend}
            />
            <Pressable android_ripple={{color:'white'}} onPress={handleSubmit(onPressHandleSubmit)} style={styles.addFriendButton}>
                <MaterialIcons name="person-add" size={30} color="white" />
            </Pressable>
            <Pressable android_ripple={{color:'white'}} onPress={onPressReloadFriends} style={styles.addFriendButton}>
                <MaterialIcons name="360" size={30} color="white" />
            </Pressable>
            <Modal visible={visible}>
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
        marginVertical:20,
        borderRadius:8,
    },
    addFriendButton:{
        backgroundColor:'#07020D', 
        height:38, 
        width:46,
        marginBottom:15, 
        borderRadius:5, 
        justifyContent:'center', 
        alignItems:'center'
    },
    inputFriend:{
        width: Dimensions.get('screen').width * 0.60,
        height: 38,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'grey',
        paddingHorizontal:15
    }
})

export { AddFriends }