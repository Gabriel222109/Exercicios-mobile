import { ScrollView, StyleSheet, Text } from 'react-native';
import Credito from '../components/Credito';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.saudacao}>Análise de crédito</Text>
      <Credito />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f3f4f6' },
  saudacao: { fontSize: 22, textAlign: 'center', marginVertical: 16 },
});