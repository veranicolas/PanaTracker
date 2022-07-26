import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Modal, Button} from "react-native"
import { Formik } from "formik"
import * as yup from 'yup'
import { ButtonLogin } from "./ButtonLogin/ButtonLogin"


export const Login = () =>{

    const [visible, setVisible] = useState(false)
    const [data, setLoginData] = useState({})

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email.')
            .required('Email is required.'),
        password: yup
            .string()
            .min(6,'Too short')
            .required('Password is required')
    })

    return(
        <View style={styles.loginContainer}>
            <Formik
                initialValues={{email:'', password:''}}
                onSubmit={values =>{
                    setLoginData(values)
                    setVisible(true)
                }}
                validationSchema={validationSchema}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, touched})=>(
                    <>
                        <View style={styles.inputsContainer}>
                            <TextInput 
                                style={errors.email ? styles.inputsError : styles.inputs} 
                                placeholder="Email"
                                value={values.email}
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('email')}
                            />
                            {
                                errors.email && touched.email ? <Text style={styles.inputsErrorText}>{errors.email}</Text> : null
                            }
                        </View>
                        <View style={styles.inputsContainer}>
                            <TextInput
                                secureTextEntry={true}
                                style={errors.password ? styles.inputsError : styles.inputs} 
                                placeholder="Password"
                                maxLength={16} 
                                value={values.password}
                                onBlur={handleBlur('password')}
                                onChangeText={handleChange('password')}    
                            />
                            {
                                errors.password && touched.password ? <Text style={styles.inputsErrorText}>{errors.password}</Text> : null
                            }
                        </View>
                        
                        <ButtonLogin handleSubmit={handleSubmit} setVisible={setVisible}/>
                    </>
                )}
            </Formik>
            
            <SubmittedInfo loginData={data} visible={visible} setVisible={setVisible}/>
        </View>
    )
}


// Esto se va cuando este la redireccion a la homepage
const SubmittedInfo = (props:any) =>{
    return(
        <Modal 
            animationType="slide"
            visible={props.visible}
            transparent={true}
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
    loginContainer:{
        height:240,
        width:'95%',
        padding:30,
        backgroundColor:'#fff',
        borderRadius:12
    },
    inputsContainer:{
        marginBottom:15
    },
    inputs:{
        padding:3,
        paddingLeft:6,

        borderWidth:1,
        borderColor:'#e8e8e8',
        borderRadius:5,
    },
    inputsError:{
        padding:3,
        paddingLeft:6,

        borderWidth:1,
        borderColor:'red',
        borderRadius:5,
    },
    inputsErrorText:{
        color:'red',
        paddingLeft:2
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