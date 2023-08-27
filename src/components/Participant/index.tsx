import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParcipantType {
  name: string
  onRemove: () => void
}
export function Participant({name, onRemove}:ParcipantType) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}