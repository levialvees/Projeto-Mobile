<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

import imagem from './assets/motoboy.png';

export default function App() {
  return (
   <> 
    <View style={styles.container}>
      <Text style={styles.FirstText}> HELP FOOD </Text>
      <Image source={imagem} style={styles.foto}></Image>
      <StatusBar style="auto"/>
    </View>
    
    <View style={styles.container2}>
      <Text style={styles.Text}></Text>
      <StatusBar style="auto"/>
    </View>
  </>
=======
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Button, 
  Pressable
} from 'react-native';
import DefaultText from './src/components/AppName';
import food from './assets/food.png';

export default function App() {
  return (
   <SafeAreaView>
    <View style={styles.container}>
      <Image source={food} defaultSource={food} style={styles.foodlogo}></Image>
      <DefaultText> HELP FOOD </DefaultText>
      <Text>style={styles.appDescription}Entrega em tempo recorde</Text>
    </View>
   </SafeAreaView>
>>>>>>> 2a5cb6a (10/10)
  );
}
const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
=======
>>>>>>> 2a5cb6a (10/10)
    backgroundColor: '#2A431B',
    alignItems: 'center',
    justifyContent: 'center',
  },

<<<<<<< HEAD
    container2: {
      flex: 1,
      backgroundColor: '#2A431B',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  FirstText: {
    color: 'blue',
    fontSize: 20,
  },

  Text: {
    color: 'indigo',
    fontSize: 20,
    height: 300,
  },
  
  foto: {
    width:365,
    height:200,
  }
});
=======
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  appDescription: {
    fontSize: 20,
    color: 'blue',
    fontStyle: 'Arial',
  },
  foodlogo: {
    width:320,
    height:200,
  }
});
>>>>>>> 2a5cb6a (10/10)
