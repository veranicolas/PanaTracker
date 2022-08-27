import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Profile, Home, SignUp } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

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

    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='SignUp'>
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