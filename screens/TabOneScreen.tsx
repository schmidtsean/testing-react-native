import * as React from 'react';
import { StyleSheet, ScrollView, Image, TextInput} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.body}>
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    
    <Image style= {{width: 100, height: 100 }} source={require('../assets/images/peace.png')} />
   
   <TextInput
    style={styles.input}
    placeholder="Enter Text Here"
    placeholderTextColor= 'black'
    />


    </View>
      <ScrollView contentContainerStyle={styles.secondContainer}>
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
    backgroundColor: 'grey',
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  secondContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
