import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import AlunoForm from '../components/AlunoForm';

export default function AlunoFormTela() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.saudacao}>Aluno e média</Text>
      <AlunoForm />

      <Pressable style={styles.botao} onPress={() => router.navigate('/multiplicacao-form')}>
        <Text style={styles.botaoTexto}>Ir para Multiplicação</Text>
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