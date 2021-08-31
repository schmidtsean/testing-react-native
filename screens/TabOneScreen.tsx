import * as React from 'react';
import { StyleSheet, ScrollView, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.body}>
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    
    <Image style= {{width: 100, height: 100 }} source={require('../assets/images/peace.png')} />
    <TextInput>Enter Text Here</TextInput>
    </View>
      <ScrollView style={styles.secondContainer}>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        <Text>Testing</Text>
        
      </ScrollView>
      
   </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'orange',
    
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  secondContainer: {
    flex: 1,
    marginLeft: 160
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
