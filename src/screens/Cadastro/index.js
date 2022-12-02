import { StyleSheet, 
  Text, 
  View,
  Image, 
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation()
  return (
    
    <SafeAreaView>
      <View style={styles.container}>
      
        <Text style={styles.textInicio}>CRIE SUA CONTA</Text>
  
        
        <View style={styles.containerForm}>
          
          <Text style={styles.title}>Nome</Text>
          <TextInput placeholder='Digite seu nome'style={styles.input}/>
          <Text style={styles.title}>Sobrenome</Text>
          <TextInput placeholder='Digite seu sobrenome'style={styles.input}/>
          <Text style={styles.title}>E-mail</Text>
          <TextInput placeholder='Digite seu e-mail' style={styles.input}/>
    
          <Text style={styles.title}>Senha</Text>
          <TextInput secureTextEntry={true} placeholder='Digite sua senha' style={styles.input}/>
          
          <TouchableOpacity 
          style={styles.Button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textButton}>Cadastrar</Text>
          
          </TouchableOpacity>
       
        </View>
      
      </View>
    </SafeAreaView>
  

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a52a2a',
  },

  textInicio: {
    color: '#f0f8ff',
    fontWeight: 'bold',
  },
  containerForm:{
    flex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    paddingStart: '5%',
    paddingEnd: '5%',
    backgroundColor: '#7fffd4',
  },
 
  title:{
    fontSize: 20,
    marginTop: 28,
    fontWeight: 'bold',
  },
  
  input:{
    borderWidth: 1,
    height: 35,
    width: 250,
    marginBottom: 10,
    fontSize: 16,
    
  },
  Button: {
    backgroundColor: '#a52a2a',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  textButton: {
    color: '#f0f8ff',
    fontSize: 18,
    fontWeight: 'bold',
  }

});
