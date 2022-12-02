import { StyleSheet, 
    Text, 
    View,
    Image, 
    SafeAreaView,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  export default function App() {
    const navigation = useNavigation()
    return (
      
      <SafeAreaView>
        <View style={styles.container}>

        <View style={styles.containerText}>
        
        <Text style={styles.textInicio}>BEM VINDO AO LVFILMES </Text>
        </View>
          
          <View style={styles.containerForm}>
         
          <Text style={styles.title}>E-mail</Text>
          <TextInput placeholder='Digite seu e-mail'style={styles.input}/>
          <Text style={styles.title}>Senha</Text>
          <TextInput secureTextEntry={true} placeholder='Digite sua senha' style={styles.input}/>
          
          <TouchableOpacity style={styles.Button}  onPress={() => navigation.navigate('TelaPrincipal')}>
          <Text style={styles.textButton}>Acessar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.cad}  onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textCad}>Não possui uma conta? Cadastre-se </Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    
  
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a52a2a',
      alignItems: 'center',
      justifyContent: 'center', 

    },
    
    containerText:{
      flex: 1,
      backgroundColor: '#a52a2a',
      alignItems: 'center',
      justifyContent: 'center',
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    
    textInicio: {
      color: '#f0f8ff',
      fontWeight: 'bold',
      width: 180,
    },
    
    containerForm:{
      flex: 2,
      backgroundColor: '#7fffd4',
      borderTopLeftRadius: 25,
      borderTopRightRadius:25,
      paddingStart: '5%',
      paddingEnd: '5%',

    },
   
    title:{
      fontSize: 20,
      marginTop: 28,
      fontWeight: 'bold',
    },
    
    input:{
      borderWidth: 1,
      height: 100,
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
    },
    
    cad:{
      marginTop: 14,
      alignSelf: 'center',
    },
   
    textCad: {
       color: '#808080'
    }
  
  });
