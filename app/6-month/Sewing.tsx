import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

export type Item = {
  id: string,
  course: string,
  descriptions: string

};



export default function Sewing() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 700,
    width: 360,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    margin: 199.75,
    padding: 10,
    flex: 1,

  },
  text: {
        fontFamily: 'arial',

    zIndex: 1,
        padding: 4,
        color: '#FFFF', 
        marginStart: 20,
        margin:5,
        lineHeight: 20, 
        position: 'fixed',

  },
   background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'stretch', etc.
  },
 header1: {
  color: '#6eb918ff',
  fontSize: 30,
  fontStyle: 'italic',
  padding: 15,
  fontWeight: '500',
  textTransform: 'uppercase'

 },
  header2: {
  color: '#6eb918ff',
  fontSize: 20,
  fontStyle: 'italic',
  fontWeight: '600',
  alignSelf: 'center',
  padding: 20
  

 },

 container3: {
      position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 650,
    width: 320,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    marginTop: 99.75,
    marginEnd: 99.5,
    padding: 10, 
    verticalAlign: 'bottom',
    marginStart: 150,
    textAlign: 'left'


 },container2:{
        position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 750,
    width: 320,
    borderWidth: 0.01,
    alignSelf: 'center',
    marginTop: 199.75,
    marginEnd: 199.5,
    padding: 0.1, 
    verticalAlign: 'bottom',
    marginStart: 150,
    textAlign: 'left',
    
  
 },
   gradient: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },


});
