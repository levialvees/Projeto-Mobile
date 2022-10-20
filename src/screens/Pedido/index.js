import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DefaultText from '../../components/AppName';
import entrega from '../../../assets/entrega.png';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DefaultText>HELP FOOD</DefaultText>
        <Image source={entrega} defaultSource={entrega} style={styles.entregaLogo}></Image>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Preparo')}>
          <Text style={styles.textButton}>Fazer Pedido</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    fontStyle: 'arial',
    height: 200,
  },
  entregaLogo: {
    width: 320,
    height: 200,
  },
  Button: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 10,
    padding: 10,
    borderRadius: 10,
    top: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',

  }
});
