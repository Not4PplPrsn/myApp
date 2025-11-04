import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function Contacts() {
  return (
    <ScrollView
            
      snapToAlignment= {'center'}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}

    >      
  <ImageBackground
     source={require('../../assets/images/Contacts.jpg')}/** (Soltani, 2025)*/
     style= {styles.background}
    
  >

    <View>
    <View style={styles.container}>
            <LinearGradient
              colors={['#0a8a30ff', '#043b04ff']}
     style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
              start={{x:1, y:0.2}}
              end={{x:0.5, y:1}}

            />
      
      <Text style= { styles.header1}> Contacts</Text>
      <Text style= {styles.header2}
      > <Ionicons name='mail-open-outline'  size={25}  ></Ionicons>empoweringthenation@gmail.com</Text>      
      <Text style={styles.header2}> <Ionicons name='call-outline' size={20}/>0860 567 861</Text>
      <Text style={styles.header2}onPress={()=>Linking.openURL('https://maps.app.goo.gl/DUxdu1gCozZXsrFN6')}> <Ionicons name='locate-outline' size={20}/>23  Apple Street</Text>


      <Text style={ styles.header1} > Venues</Text>
      <Text style={styles.header2} > <Ionicons name='locate-outline' size={20}/>Shepstone Gardens</Text>
      <Text style={styles.header2} > <Ionicons name='locate-outline' size={20}/>Living Room  jozi</Text>
      <Text style={styles.header2}> <Ionicons name='locate-outline' size={20}/>Thaba Eco Hotel</Text>



    </View>

      
      <View style= { styles.mapsScreens}>
        <TouchableOpacity
        activeOpacity={1.7} 
        onPress={()=>Linking.openURL('https://maps.app.goo.gl/zQHoFp917sPyGoKv7')}
        >
      <Image
      source={require('../../assets/images/DOT.jpg')}
      style={styles.images}
      
      /></TouchableOpacity>
      <Text style= {styles.captions}>Shepstone Gardens</Text>
      </View>
</View>
    </ImageBackground>
    
    <View>
      <OtherVenues/>
    </View>
<StatusBar style="auto" />






</ScrollView>
    
    
  );
}

function OtherVenues(){

  return(

  <ImageBackground
   source={require('../../assets/images/Contacts.jpg')}
   style= {styles.background}
   
  >
    <View >
      
      
      <View style={styles.mapsScreens}>
      <TouchableOpacity
      activeOpacity={1.7} 
      onPress={()=>Linking.openURL('https://maps.app.goo.gl/nFNcgWiYsWVYSkuG6')/**(Channel Partner., n.d.) */}
      >

       <Image
      source={require('../../assets/images/DOT.jpg') /**(Channel Partner., n.d.) */}
      style={styles.images}/>
      </TouchableOpacity>
        <Text style= {styles.captions}>Living Room  jozi</Text>
      </View>

      
      <View style= { styles.mapsScreens}>
    <TouchableOpacity
    activeOpacity={0.7} 
    onPress={()=>Linking.openURL('https://maps.app.goo.gl/8vZDUscJRTcUehgJ9')/**(Channel Partner., n.d.) */}
    >

              <Image
      source={require('../../assets/images/DOT.jpg')/**(Channel Partner., n.d.) */}
      style={styles.images}/>
    </TouchableOpacity>

       
       <Text style= {styles.captions}>Thaba Eco Hotel</Text>
      </View>


    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 398,
    width: 360,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    margin: 50.75,
    padding: 10,
    flex: 1,
    borderRadius: 20

  },
  text: {
        fontFamily: 'arial',

    zIndex: 1,
        padding: 4,
        color: '#FFFF', 
        marginStart: 20,
        margin:5

  },
   background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'stretch', etc.
    height: '100%',
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
  color: '#ffffffff',
  fontSize: 16,
  fontStyle: 'italic',
    textTransform: 'uppercase',

  

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
    borderRadius: 30,
    marginTop: 199.75,
    marginEnd: 199.5,
    padding: 20, 
    verticalAlign: 'bottom',
    marginStart: 150,
    textAlign: 'left'


 },container2:{
        position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 650,
    width: 320,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    borderRadius: 30,
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
    captions: {
  color: '#2d8209ff',
  fontSize: 16,
  fontStyle: 'italic',
    textTransform: 'uppercase',
    backgroundColor: '#eeede0af',
    width: 200,
    marginTop: 0.4,
    borderRadius: 30,
    fontWeight: '600'

  

 },
 images:{
  height: 200,
  width: 290, 
  margin: 15,
  alignContent: 'center',
  borderRadius: 20
 },
 mapsScreens:{
  alignItems: 'flex-start',
  alignSelf: 'center',
  justifyContent: 'flex-start',
  marginTop:50 
 }

  



 



});
