import { StyleSheet, Text, View } from 'react-native';

type FuncionarioProps = {
  nome: string;
  idade: number;
  setor: string;
};

export default function Funcionario({ nome, idade, setor }: FuncionarioProps) {
  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Funcionário</Text>
      <Text style={styles.linha}>Nome: {nome}</Text>
      <Text style={styles.linha}>Idade: {idade}</Text>
      <Text style={styles.linha}>Setor: {setor}</Text>
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
});