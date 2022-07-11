import {Text, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({text, onPress, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <TouchableOpacity
        onPress={onPress} 
        style={[
          styles.container,
          styles[`container_${type}`], 
          bgColor ? {backgroundColor: bgColor} : {}
        ]}>
      <Text
        style={[
          styles.text, 
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {}
          ]}>
            {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        width: "100%",
        height: 50,
        maxWidth: 500,
        borderRadius: 10,

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3'
    },
    container_TERTIARY: {
        
    },
    text_TERTIARY: {
        color: 'gray'
    },
    text: {
        color: "white",
        fontWeight: "bold",
    }
})

export default CustomButton