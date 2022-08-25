import { View, StyleSheet, Keyboard, Dimensions } from "react-native"
import { AddFriendsProps } from "../../models/Props"
import { MaterialIcons } from "@expo/vector-icons"
import { useForm } from "react-hook-form"

import { CustomInput } from "../../components"
import { getSummoner } from "../../services/api"

const AddFriends = ({width, onPressAddFriend}:AddFriendsProps) =>{

    const {control, handleSubmit, reset} = useForm()

    const onPressHandleSubmit = async ({summoner}:any) =>{
        const summonerData = await getSummoner(summoner)
        onPressAddFriend(summonerData)
        Keyboard.dismiss()
        reset()
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