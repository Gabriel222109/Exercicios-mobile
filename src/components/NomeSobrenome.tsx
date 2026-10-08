import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function NomeSobrenome() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  function mostrarPopup() {
    Alert.alert('Nome e sobrenome', `${nome} ${sobrenome}`);
  }

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Nome e sobrenome</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />

      <Pressable style={styles.botao} onPress={mostrarPopup}>
        <Text style={styles.botaoTexto}>Mostrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  titulo: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    fontSize: 16,
  },
  botao: {
  borderWidth: 1,
  borderColor: '#000000',
  padding: 8,
  marginTop: 8,
  alignItems: 'center',
},
botaoTexto: { fontSize: 16, color: '#000000' },
});