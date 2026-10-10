import { StyleSheet, Text, View } from 'react-native';

const Tela3 = () => {
  return (
    <View style={styles_local.tela}>
      <Text style={styles_local.titulo}>BEMVINDO</Text>
      <Text style={styles_local.nome}>FULANO</Text>

      <View style={styles_local.meio}>
        <View style={[styles_local.botao, styles_local.fundo_azul]}>
          <Text style={styles_local.botaoTexto}>COMPRAR</Text>
        </View>
      </View>

      <View style={[styles_local.sair, styles_local.fundo_verde]}>
        <Text style={styles_local.botaoTexto}>SAIR</Text>
      </View>
    </View>
  );
};

export default Tela3;

const styles_local = StyleSheet.create({
  tela: {
    height: 720,
    //cor da borda
    borderColor: 'black',
    //espessura da borda
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    //cor de fundo
    backgroundColor: 'white',
  },
  titulo: {
    //cor
    color: 'black',
    //tamanho da fonte
    fontSize: 22,
    //espessura do texto
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nome: {
    //cor
    color: 'black',
    fontSize: 16,
    //margem
    marginTop: 8,
    textAlign: 'center',
  },
  meio: {
    //valor de preenchimento da área disponível
    flex: 1,
    //posicionamento no eixo principal
    justifyContent: 'center',
    //posicionamento no eixo secundário
    alignItems: 'center',
  },
  botao: {
    //cor da borda
    borderColor: 'black',
    //espessura da borda
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  sair: {
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 28,
  },
  fundo_azul: {
    //cor de fundo
    backgroundColor: 'white',
  },
  fundo_verde: {
    //cor de fundo
    backgroundColor: 'white',
  },
  botaoTexto: {
    //cor
    color: 'black',
    fontWeight: 'bold',
  },
});