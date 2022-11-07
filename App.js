import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import ModalComponent from './src/components/ModalComponent';
import BuscadorComponent from './src/components/BuscadorComponent';
import DropdownFilter from "./src/components/DropdownFilter.js";
import CardCuestionario from "./src/components/CardCuestionario.js";
import CardPregunta from "./src/components/CardPregunta.js";
import ModalWrong from "./src/components/ModalWrong.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <ModalComponent/> */}
      <BuscadorComponent/>
      <DropdownFilter />
      <CardCuestionario />
      <CardPregunta/>
      {/* <Button title="Modal -> Incorrecto"/> */}
      <ModalWrong/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
