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
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A431B',
    alignItems: 'center',
    justifyContent: 'center',
  },

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

