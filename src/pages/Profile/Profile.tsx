import { Text, View } from "react-native"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import { ProfileProps } from "../../models/Props"

export const Profile = ({ navigation }:ProfileProps) =>{

    const onLogoutPress = () =>{
        navigation.navigate('Login')
    }

    return (
        <View>
            <Text>This is the profile</Text>
            <CustomButton title="Logout" onPress={onLogoutPress}/>
        </View>
    )
}