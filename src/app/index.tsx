import { ScrollView, StyleSheet, Text } from 'react-native';
import AlunoForm from '../components/AlunoForm';
import MultiplicacaoForm from '../components/MultiplicacaoForm';
import NomeSobrenome from '../components/NomeSobrenome';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.saudacao}>Boa noite!</Text>

      <NomeSobrenome />
      <AlunoForm />
      <MultiplicacaoForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f3f4f6' },
  saudacao: { fontSize: 22, textAlign: 'center', marginVertical: 16 },
});