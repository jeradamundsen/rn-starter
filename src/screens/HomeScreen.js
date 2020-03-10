import React from "react";
import { Text, Image, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  console.log(navigation)
  return (
    <View>
      <Text style={styles.text}>Berlin  </Text>
      <Button
        onPress={()=>navigation.navigate('Components')}
        title='Go to components'
      />
      <Button
        onPress={()=>navigation.navigate('List')}
        title='Go to List'
      />
      <Button
        onPress={()=>navigation.navigate('Image')}
        title='Go to Image'
      />
      <Button
        onPress={()=>navigation.navigate('Counter')}
        title='Go to Counter'
      />
      <Button
        onPress={()=>navigation.navigate('Colors')}
        title='Go to Colors '
      />
      <Button
        onPress={()=>navigation.navigate('Square')}
        title='Go to Square Screen '
      />
    </View>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30

  }
});

export default HomeScreen;
