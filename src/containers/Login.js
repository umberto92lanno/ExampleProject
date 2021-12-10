import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const checkUsername = 'email';
const checkPassword = 'password';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkerColor, setCheckerColor] = useState('red');
  const emailInput = useRef(null);

  useEffect(() => {
    if (!emailInput?.current) {
      return;
    }
    emailInput.current.focus();
  }, [emailInput]);

  const onLoginPress = useCallback(() => {
    if (username === checkUsername && password === checkPassword) {
      setCheckerColor('green');
      return;
    }
    setCheckerColor('red');
  }, [username, password]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={emailInput}
            style={styles.textInput}
            keyboardType="email-address"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          >
          </TextInput>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          >
          </TextInput>
        </View>
        <TouchableOpacity onPress={onLoginPress}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.checker, { backgroundColor: checkerColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    marginBottom: 16,
  },
  textInputContainer: {
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 26,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  checker: {
    marginTop: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'grey',
  },
});

export default Login;