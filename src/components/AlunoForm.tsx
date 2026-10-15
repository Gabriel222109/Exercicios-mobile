import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AlunoForm() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState<number | null>(null);

  function calcular() {
    const resultado = (Number(nota1) + Number(nota2)) / 2;
    setMedia(resultado);
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

      <Pressable style={styles.botao} onPress={calcular}>
        <Text style={styles.botaoTexto}>Calcular média</Text>
      </Pressable>

      {media !== null && (
        <View>
          <Text style={styles.resultado}>Média: {media.toFixed(1)}</Text>
          {media >= 7 ? (
            <Text style={styles.aprovado}>Aprovado</Text>
          ) : (
            <Text style={styles.reprovado}>Reprovado</Text>
          )}
        </View>
      )}
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
  resultado: { fontSize: 18, marginTop: 12 },
  aprovado: { fontSize: 18, color: 'green', marginTop: 4 },
  reprovado: { fontSize: 18, color: 'red', marginTop: 4 },
});