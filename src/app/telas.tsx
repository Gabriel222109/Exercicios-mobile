import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import Tela1 from '../components/Tela1';
import Tela2 from '../components/Tela2';
import Tela3 from '../components/Tela3';

export default function Telas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Tela 1</Text>
      <Tela1 />
      <Text style={styles.titulo}>Tela 2</Text>
      <Tela2 />
      <Text style={styles.titulo}>Tela 3</Text>
      <Tela3 />

      <Pressable style={styles.botao} onPress={() => router.navigate('/')}>
        <Text style={styles.botaoTexto}>Voltar para o início</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f3f4f6', gap: 16 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
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