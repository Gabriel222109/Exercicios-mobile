import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function MultiplicacaoForm() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');

  function mostrarPopup() {
    const resultado = Number(valor1) * Number(valor2) * Number(valor3);

    Alert.alert(
      'Multiplicação',
      `Valor 1: ${valor1}\nValor 2: ${valor2}\nValor 3: ${valor3}\n${valor1} × ${valor2} × ${valor3} = ${resultado}`
    );
  }

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Multiplicação</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor 1"
        value={valor1}
        onChangeText={setValor1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor 2"
        value={valor2}
        onChangeText={setValor2}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor 3"
        value={valor3}
        onChangeText={setValor3}
        keyboardType="numeric"
      />

      <Pressable style={styles.botao} onPress={mostrarPopup}>
        <Text style={styles.botaoTexto}>Calcular</Text>
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