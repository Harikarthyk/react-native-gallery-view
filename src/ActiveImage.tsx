import React from 'react'
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'
import Lightbox from 'react-native-lightbox-v2'

const ActiveImage = (props: any) => {
    const {
        navigator,
        images,
        imageUri = "src",
        mainImageStyle,
        currIndex,
        onLoadEnd,
        onLoad
    } = props;
    return (
        // @ts-ignore
        <Lightbox
            navigator={navigator}
        >
            <FastImage
                source={{ uri: images[currIndex][imageUri] || '' }}
                style={[
                    { ...mainImageStyle },
                    styles.activeImage
                ]}
                resizeMode="contain"
                onLoadEnd={onLoadEnd}
                onLoad={onLoad}
            />

        </Lightbox>
    )
}

const styles = StyleSheet.create({

    activeImage: {
        width: '100%',
        padding: 5
    }
})

export default React.memo(ActiveImage);