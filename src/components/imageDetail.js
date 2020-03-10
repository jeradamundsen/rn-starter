import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

const ImageDetail =(props)=>{
  console.log(props)
  return (
    <View>
      <Image source={props.imageSource}/>
      <Text>{props.title}</Text>
      <Text>Image Score - {props.score}</Text>
    </View>

  )
}

export default ImageDetail
