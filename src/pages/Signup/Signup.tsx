import { StyleSheet, View, Text} from "react-native"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CustomInput, CustomButton, Status } from "../../components"
import Modal from 'react-native-modal'

import { SignUpProps } from "../../models/Props"
import { getMainChampionSplash, getSummoner } from "../../services/api"
import { useDispatch } from "react-redux"
import { setCurrentPatch, setProfile } from "../../redux/slices/profileSlice"
import { setSplash } from "../../redux/slices/splashSlice"

const AppTitle = () =>{
    return(
        <View style={styles.appTitleContainer}>
            <Text style={styles.appTitle}>Welcome!🥳</Text>
        </View>
    )
}

export const SignUp = ({ navigation }:SignUpProps) => {

    const dispatch = useDispatch()

    const [visible, setVisible] = useState(false)
    const { control, handleSubmit } = useForm()

    const onPressSignUp = async ({summoner}:any) =>{
        try{
            const summonerData = await getSummoner(summoner)
            if(summonerData.message !== 'Not found'){
                const { splash, currentPatch } = await getMainChampionSplash(summonerData.id)
                dispatch(setCurrentPatch(currentPatch))
                dispatch(setSplash(splash))
                dispatch(setProfile(summonerData))
                navigation.navigate('Home')
            } else {
                throw Error('Not found')
            }
        } catch(error){
            console.log(error)
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
                {/* <CustomInput 
                    control={control}
                    name="email"
                    placeholder="Email"
                    maxLength={254}
                    rules={{
                        required:'Email is required.',
                        validate:{
                            empty: (value:string) => value.trim() !== '' || 'You must enter an email', 
                        },
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
                        validate:{
                            empty: (value:string) => value.trim() !== '' || 'You must enter a password', 
                        }
                        minLength:{
                            value:8,
                            message:'Password is too short.'
                        }}},
                        
                    maxLength={22}
                /> */}
                <CustomInput
                    control={control}
                    name="summoner"
                    placeholder="Summoner name"
                    rules={{
                        required:'You must link your summoner name.',
                        validate:{
                            empty: (value:string) => value.trim() !== '' || 'You must enter a name',
                        }
                    }}
                    maxLength={60}
                />
                <CustomButton title="ENTER" onPress={handleSubmit(onPressSignUp)}/>
                {/* <CustomButton title="LOGIN" onPress={onPressLogin}/> */}

                <Modal isVisible={visible}>
                    <View style={{width:300, height:100, backgroundColor:'white', alignSelf:'center', borderRadius:8, padding:15}}>
                        <Text style={{textAlign:'center'}}>Not found</Text>
                        <CustomButton title="OK" onPress={()=>setVisible(false)}/>
                    </View>
                </Modal>
            </View>
            <Status style="light"/>
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
        backgroundColor:'#07020D',
        justifyContent:'center'
    },
    appTitle:{
        fontSize:48,
        fontWeight:'bold',
        textAlign:'left',
        color:'white',
        paddingHorizontal:5
    }
})