import { StyleSheet, Text, View } from 'react-native';

const Tela1 = () => {
  return (
    <View style={styles_local.tela}>
      <View style={styles_local.topo}>
        <View style={styles_local.numeros}>
          <View style={[styles_local.caixa, styles_local.fundo_azul]}>
            <Text style={styles_local.numero}>3</Text>
          </View>
          <View style={[styles_local.caixa, styles_local.fundo_laranja]}>
            <Text style={styles_local.numero}>2</Text>
          </View>
          <View style={[styles_local.caixa, styles_local.fundo_verde]}>
            <Text style={styles_local.numero}>1</Text>
          </View>
        </View>
      </View>

      <View style={styles_local.baixo}>
        <Text style={styles_local.hello}>HELLO</Text>
        <Text style={styles_local.hello}>WORLD</Text>
      </View>
    </View>
  );
};

export default Tela1;

const styles_local = StyleSheet.create({
  tela: {
    //altura da tela
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
    //cor da borda
    borderBottomColor: 'black',
    //espessura da borda
    borderBottomWidth: 2,
    //posicionamento no eixo secundário
    alignItems: 'flex-end',
    padding: 8,
  },
  numeros: {
    //definição do eixo principal
    flexDirection: 'row',
    gap: 0,
  },
  caixa: {
    //largura
    width: 50,
    //altura
    height: 50,
    //cor da borda
    borderColor: 'black',
    //espessura da borda
    borderWidth: 1,
    //posicionamento no eixo principal
    justifyContent: 'center',
    //posicionamento no eixo secundário
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
  baixo: {
    //valor de preenchimento da área disponível
    flex: 1,
    //posicionamento no eixo principal
    justifyContent: 'center',
    //posicionamento no eixo secundário
    alignItems: 'center',
  },
  hello: {
        color: 'black',        
        //criando sombra para o texto
        textShadowOffset: { width: -30, height: 5 },
        //cor da sombra do texto
        textShadowColor: 'blue',
        //embaçar a sombra
        textShadowRadius: 20,
        //tamanho da fonte do texto
        fontSize: 60,
  },
});