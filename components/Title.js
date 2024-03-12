import { View, Text, StyleSheet } from 'react-native'
export function Title() {
  return (
    <View>

      <Text style={styles.titulo}>Mercafé</Text>
      
      <Text style={styles.subtitulo}>Cápsulas, Máquinas, Acessórios e Mais. Confira no Mercafé. Descubra aqui cafés especiais de regiões do Brasil e do Mundo.
 </Text>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    color: '#ffffff',
    backgroundColor: '#9E520C',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 15
  },

  subtitulo: {
    marginLeft: 10,
  }
})