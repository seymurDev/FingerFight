import { Image, StyleSheet,} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const İntro = ({navigation}) => {
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   navigation.navigate('Home');
    // }, 2000);

    // return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView style={{position:'relative'}}>
      <Image
          source={require('../../assets/images/unnamed.png')} 
          style={styles.image}
          resizeMode="cover"
        />
    </SafeAreaView>
  )
}

export default İntro

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: '100%'
  }
})