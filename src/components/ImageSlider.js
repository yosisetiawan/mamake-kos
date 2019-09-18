import React, { Component } from "react";
import { View, Image, ScrollView, Dimensions, Animated, StyleSheet } from "react-native";


class ImageSlider extends Component {
    constructor() {
        super();
    }

    scrollX = new Animated.Value(0);

    render() {
        const width = Dimensions.get('window');
        let position = Animated.divide(this.scrollX, width.width);
        const photos = this.props.photos;

        return (
            <View>
                <View style={{width: width.width, height: 200}}>
                    <ScrollView 
                        horizontal={true} 
                        pagingEnabled={true} 
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
                        )}
                        scrollEventThrottle={16}
                    >
                        {photos.map((photo, i) => {
                            return (
                                <Image
                                    key={i}
                                    style={{width: width.width, height: 200}}
                                    source={photo.src}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
                <View style={styles.pointerContainer}>
                    {photos.map((_, i) => {
                        let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.5, 1, 0.5],
                        extrapolate: 'clamp'
                        });
                        return (
                        <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                            key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                            style={[styles.pointer, {opacity}]}
                        />
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sliderContrainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        position: "relative"
    },
    pointerContainer: {
        position: "absolute",
        flexDirection: "row",
        bottom: 3
    },
    pointer: {
        height: 10, 
        width: 10, 
        backgroundColor: '#595959', 
        margin: 3, 
        borderRadius: 5
    }
})

export default ImageSlider;
