import { styles } from './styles';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [partivipantName, setParticipantName] = useState<string>('')

  // const participants: string[] = ['Eduardo Queiroz', "Fulano de tal", 'Beltrano de tal', 'Ciclano de tal', 'Cipriano de tal']

  function handlePaticipantAdd() {
    if(participants.includes(partivipantName)){
      return Alert.alert("Participante já existe", `O participante ${partivipantName} já está na lista!`);
    }
    setParticipants((prev) => [
      ...prev,
      partivipantName
    ])
    setParticipantName('')
    console.log("Adicionou!")
  }
  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante?",
      `Deseja remover o participante ${name} da lista?`,
      [
        {text: 'Sim', onPress: () => Alert.alert("Deletado!")},
        {text: 'Não', style: 'cancel'}
      ]
    )

    console.log("removeu!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nome do evento</Text>
      <Text style={styles.texto}>Sexta, 26 de agosto de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6b6b6b'}
          onChangeText={(e) => setParticipantName(e)}
          value={partivipantName}
        />
        <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
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