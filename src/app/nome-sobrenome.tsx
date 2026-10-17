import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import NomeSobrenome from '../components/NomeSobrenome';

export default function NomeSobrenomeTela() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.saudacao}>Nome e sobrenome</Text>
      <NomeSobrenome />

      <Pressable style={styles.botao} onPress={() => router.navigate('/aluno-form')}>
        <Text style={styles.botaoTexto}>Ir para Aluno e média</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f3f4f6' },
  saudacao: { fontSize: 22, textAlign: 'center', marginVertical: 16 },
  botao: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
    marginTop: 8,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  botaoTexto: { fontSize: 16, color: '#000000' },
});