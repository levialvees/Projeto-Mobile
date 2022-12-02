import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login/';
import Cadastro from './src/screens/Cadastro/';
import TelaPrincipal from './src/screens/TelaPrincipal/';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
  
    <Stack.Screen 
    name="Login"  
    component={Login} 
    options ={{ headerShown: false}} 
    />
    
    <Stack.Screen 
    name="Cadastro" 
    component={Cadastro} 
    options ={{ headerShown: false}} 
    />

    <Stack.Screen 
    name="TelaPrincipal" 
    component={TelaPrincipal} 
    options ={{ headerShown: false}} 
    />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

    