import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
          <ImageBackground
    source={require('../../assets/images/women.jpg')}
    style={styles.background}>
      <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}

>
    <View style={styles.container} >
       <LinearGradient
        colors={['#0a8a30ff', '#043b04ff']}
        style={StyleSheet.absoluteFill}
        start={{x:1, y:0.2}}
        end={{x:0.5, y:1}}
      />

  

      <Text style={styles.header1}>Testimonial</Text>
      <Text style={styles.text}>Precious Radebe started an initiative to provide skills and training for domestic workers  and gardeners through her business Empower the Nation. They offer both  Six Months and Six Week courses. They also want both a mobile and web page that must  include a Home,  Summary of Six Month and Week Courses, Details of Six Month and Week  courses a separate screen for each course, a page where the user can calculate the total fees  of there selected courses and a contact detail page where the use can see how they can  contact, where to find and where t he business will host events.</Text>
    </View>

    <View  style={{ width: 'auto' }} >
      
      <NextPag/>

    </View>
    </ScrollView>


    
    </ImageBackground> 
  );
}
   export function NextPag() {
    return(
      <ImageBackground
      source= {require('../../assets/images/Cooking.jpg')}>
        <View>
          <LinearGradient
        colors={['#0a8a30ff', '#043b04ff']}
        style={StyleSheet.absoluteFill}
        start={{x:1, y:0.2}}
        end={{x:0.5, y:1}}
      />
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
    height: 340,
    width: 320,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    borderRadius: 20,
    margin: 199.75,
    padding: 10
    

  },
  text: {
        fontFamily: 'arial',

    zIndex: 1,
        padding: 5,
        color: '#FFFF'

  },
   background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'stretch', etc.
  },
 header1: {
  color: '#ffff',
  fontSize: 30,
  fontStyle: 'italic'

 }
});
