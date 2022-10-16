import { useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable, Modal, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FriendItemProps } from '../../../models/Props'
import { deleteFriend } from '../../../redux/slices/friendsSlice'
import { sortRankedData } from '../../../services/dataModelingL'
import DeleteFriendModal from './DeleteFriendModal'

const FriendItem = ({width, dataItem:{name, profileIconId, rankImage, rankedData, id}}:FriendItemProps) =>{

    const [visible, setVisible] = useState(false)
    const currentPatch = useSelector((state:any)=> state.profileData.currentPatch)
    const dispatch = useDispatch()

    const itemWidth = width * 0.98

    let rankText:string = sortRankedData(rankedData)

    const onChangeVisibility = () =>{
        setVisible((visibility)=> !visibility)
    }

    const onPressDeleteFriend = () => {
        dispatch(deleteFriend(id))
        setVisible((visibility)=> !visibility)
    }

    return(
        <Pressable onLongPress={onChangeVisibility} style={[{width:itemWidth}, styles.friendItem, styles.shadow]}>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10}}>
                <Image
                    style={styles.summonerIcon}
                    source={{uri:`http://ddragon.leagueoflegends.com/cdn/${currentPatch}/img/profileicon/${profileIconId}.png`}}
                />
                <Text style={styles.summonerName}>{name}</Text>
            </View>
            
            {rankImage ? 
                (<View style={{flexDirection:'row', width:140, justifyContent:'space-between'}}>
                    <Text style={{width:60, textAlignVertical:'center', fontWeight:'bold'}}>{rankText}</Text>
                    <Image
                        style={styles.rankImage}
                        source={{uri:rankImage}}
                    />
                </View>)
                :
                (<Text style={styles.unrankedText}>Unranked</Text>)
            }
            <DeleteFriendModal visible={visible} onChangeVisibility={onChangeVisibility} onPressDeleteFriend={onPressDeleteFriend}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    friendItem:{
        height:80,
        marginVertical:8, 
        marginHorizontal: 15,
        paddingRight:10,
        position:'relative',
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center', 
        borderRadius:12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,

        elevation: 13
    },
    summonerIcon:{
        height:60, 
        width:60, 
        borderRadius:5,
        alignSelf:'center', 
        marginRight:15
    },
    summonerName:{
        height:70, 
        width:100, 
        maxWidth:140, 
        overflow:'scroll', 
        textAlign:'left', 
        textAlignVertical:'center',
        color:'black'
    },
    rankImage:{
        height:90, 
        width:90, 
        alignSelf:'center',
    },
    unrankedText:{
        height:70, 
        width:90, 
        textAlignVertical:'center', 
        textAlign:'right', 
        fontWeight:'bold',
        paddingRight:5,
        color:'black'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export { FriendItem }