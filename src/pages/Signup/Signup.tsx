import { StyleSheet, View, Text} from "react-native"
import {  } from 'redux'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import Modal from 'react-native-modal'

import { SignUpProps } from "../../models/Props"
import { getSummoner } from "../../services/api"
import { useDispatch, useSelector } from "react-redux"
import { setProfile } from "../../redux/slices/profileSlice"

const AppTitle = () =>{
    return(
        <View style={styles.appTitleContainer}>
            <Text style={styles.appTitle}>Welcome!🥳</Text>
        </View>
    )
}

export const SignUp = ({ navigation }:SignUpProps) => {

    const summonerName = useSelector((state:any) => state.profileData.summonerName)
    const dispatch = useDispatch()

    const [visible, setVisible] = useState(false)
    const { control, handleSubmit } = useForm()

    // TODO add data to the app's state and display the summonerIcon, name and rank in the homepage
    // TODO Error handler for summonername not found

    const onPressSignUp = async ({summoner}:any) =>{
        const summonerData = await getSummoner(summoner)
        if(summonerData.message !== 'Not found'){
            dispatch(setProfile(summonerData.name))
            navigation.navigate('Home')
        } else {
            setVisible(true)
        }
    }

    const onPressLogin = () =>{
        navigation.goBack()
    }

    return(
        <View style={styles.signupContainer}>
            <AppTitle />
            <View style={styles.formContainer}>
                <CustomInput 
                    control={control}
                    name="email"
                    placeholder="Email"
                    maxLength={254}
                    rules={{
                        required:'Email is required.',
                        pattern:{
                            value: /\S+@\S+\.\S+/,
                            message:'Must be a valid email'
                        }
                    }}
                />
                <CustomInput
                    control={control}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    rules={{
                        required:'Password is required', 
                        minLength:{
                            value:8,
                            message:'Password is too short.'
                        }}}
                    maxLength={22}
                />
                <CustomInput
                    control={control}
                    name="summoner"
                    placeholder="IGN"
                    rules={{
                        required:'You must link your summoner name.'
                    }}
                    maxLength={60}
                />
                <CustomButton title="SIGNUP" onPress={handleSubmit(onPressSignUp)}/>
                <CustomButton title="LOGIN" onPress={onPressLogin}/>

                <Modal isVisible={visible}>
                    <View style={{width:300, height:100, backgroundColor:'white', alignSelf:'center', borderRadius:8, padding:15}}>
                        <Text style={{textAlign:'center'}}>Not found</Text>
                        <CustomButton title="OK" onPress={()=>setVisible(false)}/>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signupContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    formContainer:{
        justifyContent:'flex-start',
        height:450,
        width:'95%',
        padding:10,
        backgroundColor:'#fff',
        borderRadius:12
    },
    appTitleContainer:{
        width:'100%',
        height:230,
        marginBottom:10,
        padding:15,
        backgroundColor:'#bbdefb',
        justifyContent:'center'
    },
    appTitle:{
        fontSize:48,
        fontWeight:'bold',
        textAlign:'left',
        color:'#000000',
        paddingHorizontal:5
    }
})