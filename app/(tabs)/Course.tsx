import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TouchableNativeFeedback,ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import { use } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef } from 'react';


export default function Information() {
  return (
   <ScrollView
  
        snapToAlignment= {'center'}
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}

  >
    <ImageBackground
    source={require('../../assets/images/Teaching.jpg')}
    >
    <View style={styles.container}>
      <LinearGradient
                    colors={['#0a8a30ff', '#043b04ff']}
              style={{borderRadius:20}}
              start={{x:1, y:0.2}}
              end={{x:0.5, y:1}}
      
      >
      <Text style={styles.header1}>Special</Text>
      <Text style={styles.text}>
        Costumers who enrol in multiple courses at Empowering the Nation can receive discounts based on the number of courses they choose. 

If a customer selects one course, no discount is given. Choosing two courses provides a 5% discount, while three courses qualifies for a 10% discount. 

Costumers who select more then three courses enjoy the maximum discount of 15%.

      </Text>
      <Text style={styles. header1}>Some Food for thought</Text>
      <Text style={styles.text}>
        Costumers who enrol in multiple courses at Empowering the Nation can receive discounts based on the number of courses they choose. 

If a customer selects one course, no discount is given. Choosing two courses provides a 5% discount, while three courses qualifies for a 10% discount. 

Costumers who select more then three courses enjoy the maximum discount of 15%.
      </Text>
      </LinearGradient>
    </View></ImageBackground>


    <View>  
      <LinksToTheCourses/>
    </View>
      <StatusBar style="auto" />

    </ScrollView>

    
  );
}



function LinksToTheCourses(){
  const scaleAnim = useRef(new Animated.Value(7)).current;

  const router = useRouter();

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95, // scale down slightly
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // return to original size
      friction: 10,
      tension: 60,
      useNativeDriver: true,
    }).start();
  };


  return(
              <ImageBackground
    source={require('../../assets/images/6MonthCourses.jpg')}
    >

    <View>

      <Text style={styles.header1ForPage2}> Courses</Text>

      <View style= {{alignItems: 'center', }}>
        <Text style={styles.header2}>Six Months</Text>


          <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#0d50e2ff',true)}
          onPress={() => router.push('/6-month/FirstAid')}
          onPressIn={handlePressIn}
        onPressOut={handlePressOut}
          >
            <View style= {{ borderRadius: 20, width: 190, padding: 6, backgroundColor: "#1143a1e0", margin: 22}}>
              <Text style={{fontSize: 25, flexDirection: 'row', margin: 10, color: '#fff'}}>First Aid</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#0e5e2fff',true)}
          onPress={() => router.push('/6-month/LandScaping')}
                    onPressIn={handlePressIn}
        onPressOut={handlePressOut}

          >
            <View style= {{ borderRadius: 20, width: 190, padding: 6, backgroundColor: "#219146d7" , margin: 22}}>
              <Text style={{fontSize: 25, flexDirection: 'row', margin: 10, color: '#fff'}}>Land Scaping </Text>
            </View>
          </TouchableNativeFeedback>
          
          <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#76e7cfff',true)}
          onPress= { () => router.push('/6-month/LifeSkills')}>
            <View style= {{ borderRadius: 20, width: 190, padding: 6, backgroundColor: "#d4259ad0" , margin: 22}}>
              <Text style={{fontSize: 25, flexDirection: 'row', margin: 10, color: '#fff'}}>Life Skills</Text>
            </View>
          </TouchableNativeFeedback>
          


          <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#de61e2ff',true)}
          onPress={() => router.push('/6-month/Sewing')}
                    onPressIn={handlePressIn}
        onPressOut={handlePressOut}

          >
            <View style= {{ borderRadius: 20, width: 190, padding: 6, backgroundColor: "#e99e6cf1" , margin: 22}}>
              <Text style={{fontSize: 25, flexDirection: 'row', margin: 10, color: '#fff'}}>Sewing</Text>
            </View>
          </TouchableNativeFeedback>

      </View>

        
      <View style= {{alignItems: 'center', }}>
          <Text style={ styles.header2}>Six Weeks</Text>
        
          <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#95e5f3ff',true)}
          onPress={() => router.push('/6-weeks/Child-Minding')}
                    onPressIn={handlePressIn}
        onPressOut={handlePressOut}

          >
            <View style= {{ borderRadius: 20, width: 190, padding: 6, backgroundColor: "#c4ec10e3" , margin: 22}}>
              < Text style={{fontSize: 25, flexDirection: 'row', margin: 10, color: '#fff'}}>Child Minding</Text>
            </View>
          </TouchableNativeFeedback>


          <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#db541eff',true)}
          onPress={() => router.push('/6-weeks/Cooking')}
          onPressIn={handlePressIn}
        onPressOut={handlePressOut}
          
          
          >
            <View style= {{ borderRadius: 20, width: 190, padding: 6, backgroundColor: "#d63722ec" , margin: 22}}>
              <Text style={{fontSize: 25, flexDirection: 'row', margin: 10, color: '#fff'}} >Cooking</Text>
            </View>
          </TouchableNativeFeedback>


          <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#58ca7aff',true)}
          onPress={() => router.push('/6-weeks/Gardening')}
            onPressIn={handlePressIn}
        onPressOut={handlePressOut}

          >
            <View style= {{ borderRadius: 20, width: 190, padding: 6, backgroundColor: "#0ed33fe5" , margin: 22}}>
              <Text style={{fontSize: 25, flexDirection: 'row', margin: 10, color: '#fff'}}>Gardening</Text>
            </View>
          </TouchableNativeFeedback>


      </View>

    </View></ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 540,
    width: 340,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    margin: 199.75,
    padding: 10,
    flex: 1,
    borderRadius: 1000,
    

  },
  text: {
        fontFamily: 'arial',

    zIndex: 1,
        padding: 4,
        color: '#FFFF', 
        marginStart: 20,
        margin:5,
        lineHeight: 15.9

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
  color: '#349441ff',
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: '300',
  letterSpacing: 11,
  backgroundColor: "#ffff",
  marginTop: 35
  
  
  

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
    height: 350,
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
   header1ForPage2: {
  color: '#065c0aff',
  fontSize: 30,
  fontStyle: 'italic',
  padding: 15,
  backgroundColor: ' #fff',
      fontWeight: '500',
  letterSpacing: 16,

}




});
