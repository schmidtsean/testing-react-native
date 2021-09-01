import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  
  const [timesPressed, setTimesPressed] = useState(0);

let textLog = '';
if (timesPressed > 1) {
  textLog = timesPressed + 'x';
} else if (timesPressed > 0) {
  textLog = '1x';
}
  
  return (

        



    <View style={styles.container}>
      <Text style={styles.title}>Click Game</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'green'
              : 'grey'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={{color:'black', textAlign:'center'}}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
        <Text style={styles.logBox}>{textLog}</Text>
        <Pressable
        onPress={() => {
          setTimesPressed((current) => current - current);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'red'
              : 'grey'
          },
          styles.wrapperCustom2
        ]}>
          {({ pressed }) => (
          <Text style={{color:'black', textAlign:'center'}}>
            Reset
          </Text>
        )}
        </Pressable>
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20

  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '50%',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 15,
    padding: 40,
    width: 200,
    height: 100
  },
  wrapperCustom2: {
    borderRadius: 15,
    padding: 15,
    width: 150,
    height: 50
  },
  logBox: {
    padding: 20,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 100
  }
});
