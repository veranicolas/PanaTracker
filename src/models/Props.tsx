import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { Control } from "react-hook-form"

type LoginProps = NativeStackScreenProps<any,'Login'>

type SignUpProps = NativeStackScreenProps<any,'SignUp'>

type ProfileProps = DrawerScreenProps<any, 'Profile'>

type HomeProps = DrawerScreenProps<any, 'Feed'>

type HomeHeaderProps = {
    onProfilePress:()=>any
}

type CurrentRankProps = {
    width:number
}

type CustomInputProps = {
    control:Control,
    name:string,
    placeholder:string,
    secureTextEntry?:boolean,
    rules:{},
    maxLength:number
}

type CustomButtomProps = {
    onPress:()=> any,
    title:string
}

type RiotData = {
    accountId:string,
    id:string,
    name:string,
    profileIconId:number,
    summonerLevel:number
}

type FriendItemProps = {
    width:number,
    dataItem:RiotData
}

type FriendListProps = {
    width:number,
    friends:[]
}

type AddFriendsProps = {
    width:number,
    onPressAddFriend:(data:{})=>void
}

export { 
    LoginProps,
    CustomInputProps,
    CustomButtomProps,
    ProfileProps,
    SignUpProps,
    HomeProps,
    HomeHeaderProps,
    CurrentRankProps,
    FriendItemProps,
    FriendListProps,
    AddFriendsProps
}