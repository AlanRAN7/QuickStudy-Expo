import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ModalComponent from './src/components/ModalComponent';
import BuscadorComponent from './src/components/BuscadorComponent';
import DropdownFilter from "./src/components/DropdownFilter.js";
import CardCuestionario from "./src/components/CardCuestionario.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <ModalComponent/> */}
      <BuscadorComponent/>
      <DropdownFilter />
      <CardCuestionario />
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
