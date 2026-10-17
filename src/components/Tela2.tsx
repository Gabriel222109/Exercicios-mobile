import { StyleSheet, Text, View } from 'react-native';

const Tela2 = () => {
  return (
    <View style={styles_local.tela}>
      <View style={styles_local.topo}>
        <Text style={styles_local.item}>TERCEIRO</Text>
        <Text style={styles_local.item}>SEGUNDO</Text>
        <Text style={styles_local.item}>PRIMEIRO</Text>
      </View>

      <View style={styles_local.baixo}>
        <View style={[styles_local.caixa, styles_local.fundo_azul]}>
          <Text style={styles_local.numero}>1</Text>
        </View>
        <View style={[styles_local.caixa, styles_local.fundo_laranja]}>
          <Text style={styles_local.numero}>2</Text>
        </View>
        <View style={[styles_local.caixa, styles_local.fundo_verde]}>
          <Text style={styles_local.numero}>3</Text>
        </View>
      </View>
    </View>
  );
};

export default Tela2;

const styles_local = StyleSheet.create({
  tela: {
    height: 720,
    //cor da borda
    borderColor: 'black',
    //espessura da borda
    borderWidth: 2,
    borderRadius: 12,
    overflow: 'hidden',
    //cor de fundo
    backgroundColor: 'white',
  },
  topo: {
    //valor de preenchimento da área disponível
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    //posicionamento no eixo principal
    justifyContent: 'space-evenly',
    paddingHorizontal: 12,
  },
  item: {
    //cor
    color: 'black',
    //tamanho da fonte
    fontSize: 18,
  },
  baixo: {
  //valor de preenchimento da área disponível
  flex: 1,
  //definição do eixo principal
  flexDirection: 'column-reverse',
  //posicionamento no eixo principal
  justifyContent: 'space-evenly',
  //posicionamento no eixo secundário
  alignItems: 'center',
},
  caixa: {
    width: 50,
    height: 50,
    //cor da borda
    borderColor: 'black',
    //espessura da borda
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundo_azul: {
    //cor de fundo
    backgroundColor: 'blue',
  },
  fundo_laranja: {
    //cor de fundo
    backgroundColor: 'orange',
  },
  fundo_verde: {
    //cor de fundo
    backgroundColor: 'green',
  },
  numero: {
    //cor
    color: 'white',
    fontWeight: 'bold',
  },
});