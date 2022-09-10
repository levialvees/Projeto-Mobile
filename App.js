import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import sunflower from './assets/levi.png';

export default function App() {
  return (
   <> 
    <View style={styles.container}>
      <Image source={sunflower} style={styles.foto}></Image>
      <Text style={styles.FirstText}><a href="https://youtu.be/mK2xhbj0MFw" onclick="Function();">Clique aqui</a></Text>
      <StatusBar style="auto"/>
    </View>
    
    <View style={styles.container2}>
      <Text style={styles.Text}>^ Clique no link acima ^</Text>
      <StatusBar style="auto"/>
    </View>
  </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAA520',
    alignItems: 'center',
    justifyContent: 'center',
  },

    container2: {
      flex: 1,
      backgroundColor: '#DAA520',
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