import { ScrollView, StyleSheet, Text } from 'react-native';
import Alunos from '../components/Alunos';
import Funcionario from '../components/Funcionario';
import Multiplicacao from '../components/Multiplicacao';

export default function ExercicioProps() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.saudacao}>Exercício 1</Text>
      <Funcionario nome="Marcos Andrade" idade={33} setor="Financeiro" />
      <Alunos nome="Lucas Pereira" idade={16} turma="2º A" nota1={8} nota2={9.5} />
      <Multiplicacao valor1={4} valor2={5} valor3={3} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f3f4f6' },
  saudacao: { fontSize: 22, textAlign: 'center', marginVertical: 16 },
});