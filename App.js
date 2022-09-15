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
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A431B',
    alignItems: 'center',
    justifyContent: 'center',
  },

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