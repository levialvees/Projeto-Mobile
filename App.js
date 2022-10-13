import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pedido from './src/screens/Pedido/';
import Preparo from './src/screens/Preparo/';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Pedido"  component={Pedido} />
    <Stack.Screen name="Preparo" component={Preparo} />

    </Stack.Navigator>
    </NavigationContainer>


  );
}

    