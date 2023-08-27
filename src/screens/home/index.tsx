import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity} from "react-native";

export default function Home() {

  function handlePaticipantAdd() {
    console.log("Adicionou!")
  }

  return (
    <View style={styles.container}>
      <StatusBar style='inverted'/>

      <Text style={styles.titulo}>Nome do evento</Text>
      <Text style={styles.texto}>Sexta, 26 de agosto de 2023</Text>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participandte'
        placeholderTextColor={'#6b6b6b'}
      />
      <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}