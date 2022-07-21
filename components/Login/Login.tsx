import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Modal, Button} from "react-native"
import { ButtonLogin } from "./ButtonLogin/ButtonLogin"

export const Login = () =>{

    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View style={styles.loginContainer}>
            <TextInput 
                style={styles.inputs} 
                placeholder="Email" 
                onChangeText={value => setEmail(value)}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.inputs} 
                placeholder="Password"
                maxLength={16} 
                onChangeText={value => setPassword(value)}    
            />
            <ButtonLogin setVisible={setVisible}/>

            <SubmittedInfo email={email} password={password} visible={visible} setVisible={setVisible}/>
        </View>
    )
}

const SubmittedInfo = (props:any) =>{
    return(
        <Modal 
            animationType="slide"
            visible={props.visible}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <Text>{props.email}</Text>
                <Text>{props.password}</Text>
                <Button title="close modal" onPress={()=>{props.setVisible(false)}}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        height:200,
        width:'75%',
        padding:50,
        backgroundColor:'#fff',
        borderRadius:12
    },
    inputs:{
        marginBottom:10,
        padding:3,
        paddingLeft:6,

        borderWidth:1,
        borderColor:'#e8e8e8',
        borderRadius:5,
    },
    button:{
        backgroundColor:'#403bd9',
        borderRadius:12
    },
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
    }
})