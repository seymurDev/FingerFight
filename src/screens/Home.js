import { StyleSheet,TextInput,Button, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const Home = () => {
  const [isFull,setIsFull]=useState(false)
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.inputContainer}>
        <Text>Player 1 Name</Text>
        <TextInput
          style={styles.input}
          value={player1Name}
          onChangeText={text => setPlayer1Name(text)}
          placeholder="Enter Player 1 Name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Player 2 Name</Text>
        <TextInput
          style={styles.input}
          value={player2Name}
          onChangeText={text => setPlayer2Name(text)}
          placeholder="Enter Player 2 Name"
        />
      </View>
      
      <Button disabled={!player1Name || !player2Name} style={styles.button} title="Play" onPress={() => handlePlay()} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  button:{
    backgroundColor:'red',
    paddingVertical:'auto'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 200,
  },
})