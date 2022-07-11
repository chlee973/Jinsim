import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const SpeechBalloon = ({ title, content, isLeft }) => {
    return (
        <View
            style={[
                styles.item,
                isLeft ? styles.itemOutLeft : styles.itemOutRight,
            ]}
        >
            <View style={[styles.balloon, { backgroundColor: "gray" }]}>
                <View style={styles.textbox}>
                    <View style={styles.titlebox}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.contentbox}>
                        <Text style={styles.content}>{content}</Text>
                    </View>
                </View>
                <View
                    style={[
                        styles.arrowContainer,
                        isLeft
                            ? styles.arrowRightContainer
                            : styles.arrowLeftContainer,
                    ]}
                >
                    <Svg
                        style={isLeft ? styles.arrowRight : styles.arrowLeft}
                        width={moderateScale(15.5, 0.6)}
                        height={moderateScale(17.5, 0.6)}
                        viewBox="32.485 17.5 15.515 17.5"
                        enable-background="new 32.485 17.5 15.515 17.5"
                    >
                        {isLeft ? (
                            <Path
                                d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                                fill="gray"
                                x="0"
                                y="0"
                            />
                        ) : (
                            <Path
                                d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                                fill="gray"
                                x="0"
                                y="0"
                            />
                        )}
                    </Svg>
                </View>
            </View>
        </View>
    );
};

export default SpeechBalloon;

const styles = StyleSheet.create({
    item: {
        marginVertical: moderateScale(7, 2),
        flexDirection: "row",
    },
    itemIn: {
        marginLeft: 20,
    },
    itemOutLeft: {
        // alignSelf: "flex-start",
        // marginLeft: 20,
    },
    itemOutRight: {
        // alignSelf: "flex-end",
        // marginRight: 20,
    },
    textbox: {
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    contentbox: {
        justifyContent: "center",
    },
    content: {
        fontSize: 15,
    },
    balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
    },
    arrowContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1,
    },
    arrowLeftContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },

    arrowRightContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    arrowLeft: {
        left: moderateScale(-6, 0.5),
    },

    arrowRight: {
        right: moderateScale(-6, 0.5),
    },
});
