import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

const ListScreen =()=>{
  const friends = [
    {name: 'Friend #1',age: 69},
    {name: 'Friend #2',age: 70},
    {name: 'Friend #3',age: 72},
    {name: 'Friend #4',age: 73},
    {name: 'Friend #5',age: 60},
    {name: 'Friend #6',age: 61},
    {name: 'Friend #69',age: 62}
  ]

  return (

      <FlatList


        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item})=>{
        return <Text style={styles.textStyle}>{item.name}- Age: {item.age} </Text>
      }}
      />
  )
}

const styles= StyleSheet.create({
  textStyle:{
    marginVertical: 50
  }
})
export default ListScreen
