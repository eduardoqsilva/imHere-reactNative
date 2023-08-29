import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, FlatList} from "react-native";
import { Participant } from '../../components/Participant';

export default function Home() {

  const participants: string[] = ['Eduardo Queiroz', "Fulano de tal", 'Beltrano de tal', 'Ciclano de tal', 'Cipriano de tal']

  function handlePaticipantAdd() {
    console.log("Adicionou!")
  }
  function handleParticipantRemove() {
    console.log("removeu!")
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        style='inverted'
        backgroundColor='transparent'
        translucent
      />

      <Text style={styles.titulo}>Nome do evento</Text>
      <Text style={styles.texto}>Sexta, 26 de agosto de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participandte'
          placeholderTextColor={'#6b6b6b'}
        />
        <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant key={item} name={item} onRemove={handleParticipantRemove}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém Chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text> 
        )}
      />
    </View>
  );
}