import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (

          <ScrollView
        
      snapToAlignment= {'center'}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}

>
    <View >
          <ImageBackground
    source={require('../../assets/images/women.jpg')}
    style={styles.background}>
    <View style={styles.container} >
      <LinearGradient
              colors={['#0a8a30ff', '#043b04ff']}
        style={StyleSheet.absoluteFill}
        start={{x:1, y:0.2}}
        end={{x:0.5, y:1}}


      >



      <Text style={styles.header1}>Testimonial</Text>
      <Text style={styles.text}>Precious Radebe started an initiative to provide skills and training for domestic workers  and gardeners through her business Empower the Nation. They offer both  Six Months and Six Week courses. They also want both a mobile and web page that must  include a Home,  Summary of Six Month and Week Courses, Details of Six Month and Week  courses a separate screen for each course, a page where the user can calculate the total fees  of there selected courses and a contact detail page where the use can see how they can  contact, where to find and where t he business will host events.</Text>
      </LinearGradient>
    </View></ImageBackground></View>

    <View  style={{ width: 'auto' }} >
      
      <NextPag/>

    </View>
    
    <View>
      <NextPage/>
    </View>

    
         </ScrollView>

  );
}
   export function NextPag() {
    return(
      <ImageBackground
      source= {require('../../assets/images/Cooking.jpg')}>
        <View>
        <View style= {styles.container2}>
      <LinearGradient
        colors={['#0a8a30ff', '#043b04ff']}
        style={StyleSheet.absoluteFill}
        start={{x:1, y:0.2}}
        end={{x:0.5, y:1}}
      />
      <Text style= {styles.header1}>About Empower the Nation</Text>
<Text style= {styles.text}>
At Empower the Nation, we believe that education should be practical, empowering, and accessible to everyone. As a trade school, our focus is on equipping individuals with valuable skills that can open doors to new opportunities, improve daily life, and even kickstart exciting careers.
We specialize in two types of courses – short-term 6-week programs and more in-depth 6-month programs – giving you the flexibility to choose the learning path that best suits your goals.
</Text>

<Text style = {styles.header2}>
  Our 6-Week Courses:
</Text>
<Text style= {styles.text}> 
If you’re looking to gain useful, hands-on knowledge in a short time, our 6-week courses are perfect for you. We offer:

Child Minding – Learn how to care for and understand children, whether for personal growth or professional childcare opportunities.

Cooking – Develop practical culinary skills and unlock your inner chef, with inspiration from the likes of Jamie Oliver.

Gardening – Strengthen your green thumb as you learn the essentials of growing and maintaining plants successfully.
</Text>



        </View>
        </View>
      </ImageBackground>

    
    );
   }
   export function NextPage(){

      return(
        
        <ImageBackground
        source={require('../../assets/images/Office.jpg')}
        >
        <View >
    <View style = {styles.container3}>
      
      <LinearGradient
        colors={['#0a8a30ff', '#043b04ff']}
        style={StyleSheet.absoluteFill}
        start={{x:1, y:0.2}}
        end={{x:0.5, y:1}}
      />

          <Text style={styles.header2}>Our 6-Month Courses:</Text>
          <Text style = {styles.text}>For those who want to take their skills to the next level, our 6-month courses provide deeper training and recognized qualifications. We offer:
            <Text style = {styles.text}>First Aid – Gain a qualification that enables you to respond to emergencies and provide life-saving assistance.</Text>
            <Text style = {styles.text}>Sewing – Master the art of making, repairing, and tailoring clothing with creativity and precision.</Text>
            <Text style= {{ marginBlock: 240}}>Landscaping – Learn how to transform outdoor spaces, designing and maintaining natural, beautiful environments.
</Text>
            <Text style= {{ marginBlock: 240}}>Life Skills – Build confidence and communication skills to interact more effectively in both personal and professional settings.</Text>
            <Text></Text>

          
        </Text>
        
        </View></View></ImageBackground>
      );
    }


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 360,
    width: 360,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    margin: 199.75,
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
        margin:5,
        lineHeight: 20

  },
   background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'stretch', etc.
  },
 header1: {
  color: '#ffff',
  fontSize: 30,
  fontStyle: 'italic',
  padding: 15

 },
  header2: {
  color: '#ffff',
  fontSize: 16,
  fontStyle: 'italic',
  

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
    marginTop: 99.75,
    marginEnd: 99.5,
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


});
