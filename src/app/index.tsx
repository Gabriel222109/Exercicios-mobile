import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Tela1 from '@/components/Tela1';
import Tela2 from '@/components/Tela2';
import Tela3 from '@/components/Tela3';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.exercicio}>
        <Text style={styles.titulo}>Tela 1</Text>
        <Tela1 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.titulo}>Tela 2</Text>
        <Tela2 />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.titulo}>Tela 3</Text>
        <Tela3 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 28,
    paddingBottom: 40,
  },
  exercicio: {
    gap: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});