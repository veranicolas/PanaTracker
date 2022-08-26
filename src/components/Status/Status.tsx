import { StatusBar } from "expo-status-bar";

export const Status = ({style}:any) =>{

    return(
        <StatusBar translucent={true} style={style}/>
    )
}