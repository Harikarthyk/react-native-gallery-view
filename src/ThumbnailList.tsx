import React, { forwardRef } from 'react';
import {
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import FastImage from 'react-native-fast-image';

const ThumbnailList = forwardRef((props: any, ref: any) => {

    const {
        images,
        imageKey = "id",
        imageUri = "src",
        thumbnailImageStyles,
        borderColor,
        updateCurrentIndex,
        currIndex
    } = props;


    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    updateCurrentIndex(index);
                }}
                style={{
                    marginRight: 10,
                }}
                key={item?.id}
            >
                <FastImage
                    resizeMode="contain"
                    style={[
                        thumbnailImageStyles,
                        currIndex === index && {
                            borderColor: borderColor,
                            borderWidth: 2,
                        },
                    ]}
                    source={{ uri: item[imageUri] }}
                />
            </TouchableOpacity>
        )
    };


    return (
        <FlatList
            ref={ref}
            data={images}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlistContentContainerStyle}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item[imageKey]}
        />
    )
});

const styles = StyleSheet.create({
    flatlistContentContainerStyle: {
        marginVertical: 20
    }
});

// TODO: Need to be tested.
// const areEqual = (prevProps: any, nextProps: any) => {
//     return prevProps.currIndex === nextProps.currIndex && prevProps.images.length === nextProps.images.length && prevProps.borderColor === nextProps.borderColor && prevProps.thumbnailImageStyles === nextProps.thumbnailImageStyles && prevProps.imageKey === nextProps.imageKey && prevProps.imageUri === nextProps.imageUri && prevProps.updateCurrentIndex === nextProps.updateCurrentIndex && prevProps.images === nextProps.images;
// }


export default React.memo(ThumbnailList);