import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AlunoForm() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  function mostrarPopup() {
    const media = (Number(nota1) + Number(nota2)) / 2;

    Alert.alert(
      'Dados do aluno',
      `Nome: ${nome}\nIdade: ${idade}\nTurma: ${turma}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media.toFixed(1)}`
    );
  }

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Aluno</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />
      <TextInput style={styles.input} placeholder="Turma" value={turma} onChangeText={setTurma} />
      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        value={nota1}
        onChangeText={setNota1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        value={nota2}
        onChangeText={setNota2}
        keyboardType="numeric"
      />

      <Pressable style={styles.botao} onPress={mostrarPopup}>
        <Text style={styles.botaoTexto}>Mostrar dados</Text>
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