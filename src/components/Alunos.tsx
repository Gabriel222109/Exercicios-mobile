import { StyleSheet, Text, View } from 'react-native';

type AlunoProps = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

export default function Aluno({ nome, idade, turma, nota1, nota2 }: AlunoProps) {
  const media = (nota1 + nota2) / 2;

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Aluno</Text>
      <Text style={styles.linha}>Nome: {nome}</Text>
      <Text style={styles.linha}>Idade: {idade}</Text>
      <Text style={styles.linha}>Turma: {turma}</Text>
      <Text style={styles.linha}>Nota 1: {nota1}</Text>
      <Text style={styles.linha}>Nota 2: {nota2}</Text>
      <Text style={styles.media}>Média: {media.toFixed(1)}</Text>
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
  media: { fontSize: 16, fontWeight: '700', marginTop: 6 },
});
