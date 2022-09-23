import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Control } from "react-hook-form"

type LoginProps = NativeStackScreenProps<any,'Login'>

type SignUpProps = NativeStackScreenProps<any,'SignUp'>

type ProfileProps = BottomTabScreenProps<any, 'Profile'>

type HomeProps = BottomTabScreenProps<any, 'Feed'>

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
    maxLength:number,
    inputsStyle?:any
}

type CustomButtomProps = {
    onPress:()=> any,
    title:string,
    ripple?:string,
    style?:{}
}

type RiotUserData = {
    accountId:string,
    id:string,
    name:string,
    profileIconId:number,
    summonerLevel:number,
    rankImage:string,
    rankedData?:any,
    message?:string
}

type FriendItemProps = {
    width:number,
    dataItem:RiotUserData
}

type FriendListProps = {
    width:number,
}

type AddFriendsProps = {
    width:number,
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
    AddFriendsProps,
    RiotUserData
}