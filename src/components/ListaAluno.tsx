import { FlatList, StyleSheet, Text, View } from 'react-native';

type Aluno = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

const aluno1: Aluno = { nome: 'Ana', idade: 17, turma: '301', nota1: 10, nota2: 8 };
const aluno2: Aluno = { nome: 'Carlos', idade: 16, turma: '301', nota1: 7, nota2: 6 };
const aluno3: Aluno = { nome: 'Cláudio', idade: 17, turma: '301', nota1: 7.5, nota2: 9 };
const aluno4: Aluno = { nome: 'Renato', idade: 18, turma: '301', nota1: 6, nota2: 5 };

const lista: Aluno[] = [aluno1, aluno2, aluno3, aluno4];

export default function ListaAlunos() {
  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Lista de alunos</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.nome}
        scrollEnabled={false}
        renderItem={({ item }) => {
          const media = (item.nota1 + item.nota2) / 2;

          return (
            <View style={styles.card}>
              <Text style={styles.linha}>Nome: {item.nome}</Text>
              <Text style={styles.linha}>Idade: {item.idade}</Text>
              <Text style={styles.linha}>Turma: {item.turma}</Text>
              <Text style={styles.linha}>Nota 1: {item.nota1}</Text>
              <Text style={styles.linha}>Nota 2: {item.nota2}</Text>
              <Text style={styles.resultado}>Média: {media.toFixed(1)}</Text>
              {media >= 7 ? (
                <Text style={styles.aprovado}>Aprovado</Text>
              ) : (
                <Text style={styles.reprovado}>Reprovado</Text>
              )}
            </View>
          );
        }}
      />
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
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  linha: { fontSize: 16, marginBottom: 4 },
  resultado: { fontSize: 16, marginTop: 4 },
  aprovado: { fontSize: 16, color: 'green', marginTop: 4 },
  reprovado: { fontSize: 16, color: 'red', marginTop: 4 },
});