import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121214',
    backgroundColor: '#000',
    padding: 24,
  },
  titulo: {
    color: '#fff',
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 48,
  },
  texto: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',

    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0,
  },
});
