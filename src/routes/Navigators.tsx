import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Profile, Home, SignUp, Friends } from '../pages';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

const HomeStack = () =>{

  const Drawer = createDrawerNavigator()

  return(
    <Drawer.Navigator initialRouteName='Feed'>
      <Drawer.Screen
        name='Feed'
        component={Home}
      />
      <Drawer.Screen 
        name='Friends'
        component={Friends}
      />
      <Drawer.Screen
        name='Profile'
        component={Profile}
      />
    </Drawer.Navigator>
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