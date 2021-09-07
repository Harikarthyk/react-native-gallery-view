import React, { useState } from 'react';
import { Image, View, FlatList, TouchableOpacity, Dimensions, ActivityIndicator, Text } from "react-native"
const { height } = Dimensions.get('window');
import Lightbox from 'react-native-lightbox';


export const Gallery = ({
    navigator,
    activeIndex = 0,
    images,
    loaderColor = "black",
    borderColor = "red",
    thumbnailImageStyles = {
        height: 80,
        width: 80,
        borderRadius: 15,
    },
    mainImageStyle = {
        height: height / 2.6,
    },
    noImageFoundText = "No Image found"
}) => {
    const [currIndex, setCurrentIndex] = useState(activeIndex);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <View>
            {
                isLoading && <ActivityIndicator color={loaderColor} />
            }
            {images.length > 0 ?

                <Lightbox navigator={navigator}>

                    <Image
                        source={{ uri: images[currIndex].src }}
                        style={[
                            { ...mainImageStyle },
                            {
                                width: '100%',
                                padding: 5
                            }
                        ]}
                        resizeMode="contain"
                        onLoadEnd={() => {
                            setIsLoading(false)
                        }}
                        onLoad={() => {
                            setIsLoading(false);
                        }}

                        onLoadStart={() => {
                            setIsLoading(true);
                        }}
                    />

                </Lightbox>
                :
                <View
                    style={[{ ...mainImageStyle },
                    {
                        width: '100%',
                        padding: 5,
                        justifyContent: "center"
                    }]}
                >
                    <Text
                    style={{
                        textAlign: "center",
                        fontSize: 20
                    }}
                    >
                        {noImageFoundText}
                    </Text>
                </View>
            }
            <FlatList
                data={images}
                horizontal
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginVertical: 20
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                setCurrentIndex(index);
                            }}
                            style={{
                                marginRight: 10,
                            }}
                            key={item.id}

                        >
                            <Image
                                resizeMode="contain"
                                style={[
                                    { ...thumbnailImageStyles },
                                    currIndex === index && {
                                        borderColor: borderColor,
                                        borderWidth: 2,
                                    },
                                ]}
                                source={{ uri: item.src }}
                            />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}