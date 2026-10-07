import { StyleSheet, Text, View } from 'react-native';

type MultiplicacaoProps = {
  valor1: number;
  valor2: number;
  valor3: number;
};

export default function Multiplicacao({ valor1, valor2, valor3 }: MultiplicacaoProps) {
  const resultado = valor1 * valor2 * valor3;

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Multiplicação</Text>
      <Text style={styles.linha}>Valor 1: {valor1}</Text>
      <Text style={styles.linha}>Valor 2: {valor2}</Text>
      <Text style={styles.linha}>Valor 3: {valor3}</Text>
      <Text style={styles.resultado}>
        {valor1} × {valor2} × {valor3} = {resultado}
      </Text>
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
  linha: { fontSize: 16, marginBottom: 4 },
  resultado: { fontSize: 16, fontWeight: '700', marginTop: 6 },
});