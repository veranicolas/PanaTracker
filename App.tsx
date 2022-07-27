import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/pages/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar backgroundColor='transparent' style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5d5f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
