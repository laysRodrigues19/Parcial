import { View, Text, StyleSheet } from 'react-native'
export function SubTitle() {
  return (
    <View>

      <Text style={styles.titulo}>DESCUBRA TODOS OS NOSSOS SABORES</Text>

      <Text style={styles.subtitulo}>Os Kits 3 Corações são perfeitos para os admiradores de café. Com kits completos e combinações feitas pensando especialmente em você, essa seleção vai te fazer desejar todas as opções possíveis. Oferecendo desde kits com máquinas, cápsulas, acessórios até kits com cafés, preparados com muito cuidado e carinho. E se você procura conhecer novos sabores ou presentear algum amante do café, esse é o espaço perfeito para se deliciar nas opções oferecidas pela 3 Corações. </Text>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 17,
    backgroundColor: '#f18210',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 30
  },

  subtitulo: {
    marginLeft: 10,
    color: '#000000'
  }
})