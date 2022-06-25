import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Switch, SafeAreaViewBase, SafeAreaView} from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { set } from 'react-native-reanimated';
import { myColors } from './src/style/colors';
import Button from './src/component/Button';
import MyKeyboard from './src/component/MyKeyboard';


export default function App() {
  const [theme,setTheme]=useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme==='light'?styles.container:[styles.container,{backgroundColor:myColors.black}]}>
      <StatusBar style="auto" />
      <Switch
        value = {theme==='light'}
        onValueChange={() => setTheme(theme==='light'?'dark':'light')}
      />
      <MyKeyboard/>
    </SafeAreaView >
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
