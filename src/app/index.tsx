import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import Alunos from '../components/Alunos';
import Funcionario from '../components/Funcionario';
import Multiplicacao from '../components/Multiplicacao';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.saudacao}>Exercício 1</Text>

      <Funcionario nome="Marcos Andrade" idade={33} setor="Financeiro" />
      <Alunos nome="Lucas Pereira" idade={16} turma="2º A" nota1={8} nota2={9.5} />
      <Multiplicacao valor1={4} valor2={5} valor3={3} />

      <Pressable style={styles.botao} onPress={() => router.navigate('/nome-sobrenome')}>
        <Text style={styles.botaoTexto}>Ir para Nome e sobrenome</Text>
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