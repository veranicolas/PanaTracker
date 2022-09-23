import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Profile, Home, SignUp, Friends } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { getStoredUser } from '../services/storage';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const HomeStack = () =>{

  // TODO change the navigator for bottomTabsNavigator 

  const Tab = createBottomTabNavigator()

  return(
    <Tab.Navigator initialRouteName='Feed'>
      <Tab.Screen
        name='Feed'
        component={Home}
        options={{
          headerShown:false,
          tabBarIcon:()=>(<MaterialIcons name="home" size={24} color="black" />),
          tabBarShowLabel:false
        }}
      />
      <Tab.Screen 
        name='Friends'
        component={Friends}
        options={{
          tabBarIcon:()=>(<FontAwesome5 name="user-friends" size={24} color="black" />),
          tabBarShowLabel:false
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown:false,
          tabBarIcon:()=>(<MaterialIcons name="account-box" size={24} color="black" />),
          tabBarShowLabel:false
        }}
      />
    </Tab.Navigator>
  )
}
  
const MainNavigator = () =>{

    const Stack = createNativeStackNavigator()

    const summonerData = useSelector((state:any)=> state.profileData.summonerData)

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={summonerData ? 'Home' : 'SignUp'}>
              <Stack.Screen 
                  name='Login' 
                  component={Login}
                  options={{
                  headerShown:false
                  }}
              />
              <Stack.Screen 
                  name='Home'
                  component={HomeStack}
                  options={{
                  headerShown:false
                  }}
              />
              <Stack.Screen
                  name='SignUp'
                  component={SignUp}
                  options={{
                  headerShown:false
                  }}
              />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export { MainNavigator }