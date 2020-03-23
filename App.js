import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [aleatorio, setAleatorio] = useState([]);

  const gerarAleatorio = () => {
    let sorte = [];
    for(let i = 0; i < 6; i++){
      let resultado = Math.floor(Math.random() * 60)
      sorte.push(resultado);
    }
    setAleatorio(sorte);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gere o seu numero!</Text>
      <Text style={styles.text}>{aleatorio.toString()}</Text>
      <Button style={styles.btn} title="Gerar numero" onPress={() => gerarAleatorio()}/>
      <Button style={styles.btn} title="Zerar jogo" onPress={() => setAleatorio([])}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  text: {
    marginBottom: 12,
    fontSize: 17,
    color: '#001d',
    textTransform: 'uppercase',
    padding: 12,
    fontWeight: '303'
  },  
  flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
