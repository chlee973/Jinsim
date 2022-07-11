import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChangeChannelScreen = () => {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>채널 선택</Text>
            <View style={styles.channel_container}>
                <View style={styles.description_container}>
                    <Text style={styles.description}>방제</Text>
                </View>
                <View style={styles.text_input_container}>
                    <TextInput
                        style={styles.text_input}
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
            <View style={styles.channel_container}>
                <View style={styles.description_container}>
                    <Text style={styles.description}>메뉴</Text>
                </View>
                <View style={styles.text_input_container}>
                    <TextInput
                        style={styles.text_input}
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
            <View style={styles.channel_container}>
                <View style={styles.description_container}>
                    <Text style={styles.description}>정원</Text>
                </View>
                <View style={styles.text_input_container}>
                    <TextInput
                        style={styles.text_input}
                        keyboardType="number-pad"
                    />
                </View>
            </View>
            <Button title={"생성"} />
        </View>
  )
}

export default ChangeChannelScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
})