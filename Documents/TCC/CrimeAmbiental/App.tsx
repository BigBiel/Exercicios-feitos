/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



function HomeScreen() {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
          <SafeAreaView>

      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}

    <View style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder={'Usuário'} 
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.inputField}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}           
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
        />
      </View>
    </View>


    </SafeAreaView>

    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container:{
    
    flex: 1,
    backgroundColor: '#F5EEDC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12

  },
  inputContainer: {

    backgroundColor: 'white',
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7'
  },
  inputField:{

    padding: 14,
    fontSize: 22,
    width: '90%'


  }


  
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={TestePage} />
    </Stack.Navigator> */}

      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility
  };
};

