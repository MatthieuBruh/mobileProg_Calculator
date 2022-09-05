import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [firstValue, setFirstValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(0);
  const [result, setResult] = React.useState(0);

  return (
    <View style={styles.container}>

      <Text>Result: {result}</Text>
      <TextInput
        style={styles.textInputStyle}
        keyboardType='numeric'
        onChangeText={value => setFirstValue(value)}
        value={firstValue}
      />
      <TextInput
        style={styles.textInputStyle}
        keyboardType='numeric'
        onChangeText={value => setSecondValue(value)}
        value={secondValue}
      />

      <View style={{ flexDirection: "row", justifyContent: 'space-around', width: '75%', height: 40 }} >
        
        <Button
          style={styles.buttonStyle}
          title="+"
          onPress={ () => {
            if (firstValue && secondValue) {
              setResult(parseInt(firstValue) + parseInt(secondValue))
            } else {
              alert('Value error', "Please enter a valid value")
            }
          }
        } />

        <Button 
          style={styles.buttonStyle}
          title="-"
          onPress={ () => {
            if (firstValue && secondValue) {
              setResult(parseInt(firstValue) - parseInt(secondValue))
            } else {
              alert('Value error', "Please enter a valid value")
            }
          }
        } />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    width: 10,
    height: 10,
    margin: 10,
    alignContent: 'center',
  },
  textInputStyle: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin:10
  }
});
