import { View, Text, StyleSheet } from 'react-native'
export function Footer() {
  return (
    <View>
      
      <Text style={styles.subtitulo}>Rua Joaquim Coelho da Cruz, 559</Text>

    </View>
    
  )
}

const styles = StyleSheet.create({
  subtitulo: {
    marginLeft: 55,
    color: '#',
    marginTop: 25
  }
})