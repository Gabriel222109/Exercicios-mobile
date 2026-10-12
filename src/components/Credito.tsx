import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Credito() {
  const [renda, setRenda] = useState('');
  const [idade, setIdade] = useState('');
  const [clt, setClt] = useState<boolean | null>(null);
  const [divida, setDivida] = useState<boolean | null>(null);
  const [resultado, setResultado] = useState('');

  function consultar() {
    const rendaNumero = Number(renda.replace(',', '.'));
    const idadeNumero = Number(idade);

    if (!renda || !idade || clt === null || divida === null) {
      setResultado('Preencha todos os campos.');
      return;
    }

    if (Number.isNaN(rendaNumero) || Number.isNaN(idadeNumero) || rendaNumero < 0 || idadeNumero < 0) {
      setResultado('Renda e idade precisam ser números válidos.');
      return;
    }

    if (divida) {
      setResultado('SEM DIREITO A CRÉDITO');
      return;
    }

    let percentual = 0;

    if (idadeNumero <= 24) {
      percentual = 0.25;
    } else if (idadeNumero <= 49) {
      percentual = 0.4;
    } else if (idadeNumero <= 64) {
      percentual = 0.3;
    } else {
      percentual = 0.15;
    }

    if (!clt) {
      percentual = percentual / 2;
    }

    const valor = rendaNumero * percentual;
    const rendaTexto = rendaNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valorTexto = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const percentualTexto = `${percentual * 100}%`;

    setResultado(
      `CRÉDITO APROVADO\n${rendaTexto} x ${percentualTexto} = ${valorTexto} de crédito aprovado`
    );
  }

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Análise de crédito</Text>

      <Text style={styles.label}>Renda anual</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 20000"
        value={renda}
        onChangeText={setRenda}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 23"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Possui vínculo CLT?</Text>
      <View style={styles.linha}>
        <Pressable
          style={[styles.opcao, clt === true && styles.opcaoAtiva]}
          onPress={() => setClt(true)}
        >
          <Text style={styles.opcaoTexto}>Sim</Text>
        </Pressable>
        <Pressable
          style={[styles.opcao, clt === false && styles.opcaoAtiva]}
          onPress={() => setClt(false)}
        >
          <Text style={styles.opcaoTexto}>Não</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>Possui dívida?</Text>
      <View style={styles.linha}>
        <Pressable
          style={[styles.opcao, divida === true && styles.opcaoAtiva]}
          onPress={() => setDivida(true)}
        >
          <Text style={styles.opcaoTexto}>Sim</Text>
        </Pressable>
        <Pressable
          style={[styles.opcao, divida === false && styles.opcaoAtiva]}
          onPress={() => setDivida(false)}
        >
          <Text style={styles.opcaoTexto}>Não</Text>
        </Pressable>
      </View>

      <Pressable style={styles.botao} onPress={consultar}>
        <Text style={styles.botaoTexto}>Consultar</Text>
      </Pressable>

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
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
    borderColor: '#000000',
  },
  titulo: { fontSize: 18, fontWeight: '700', marginBottom: 8, color: '#000000' },
  label: { fontSize: 16, marginBottom: 4, marginTop: 8, color: '#000000' },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 4,
    fontSize: 16,
    color: '#000000',
  },
  linha: { flexDirection: 'row', gap: 8, marginBottom: 4 },
  opcao: {
    borderWidth: 1,
    borderColor: '#000000',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  opcaoAtiva: { backgroundColor: '#e5e7eb' },
  opcaoTexto: { fontSize: 16, color: '#000000' },
  botao: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  botaoTexto: { fontSize: 16, color: '#000000' },
  resultado: { fontSize: 16, marginTop: 12, color: '#000000' },
});