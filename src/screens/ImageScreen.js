import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import ImageDetail from '../components/imageDetail'

const ImageScreen =()=>{
  return (
    <View>
      <ImageDetail title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        score={5}
      />
      <ImageDetail title="Solar"
         imageSource={require('../../assets/beach.jpg')}
         score={9}
     />
      <ImageDetail title="mountain"
         imageSource={require('../../assets/mountain.jpg')}
         score={7}
       />

    </View>

  )
}

export default ImageScreen
