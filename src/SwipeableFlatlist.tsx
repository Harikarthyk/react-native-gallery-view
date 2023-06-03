import React from 'react';
import {
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Lightbox from 'react-native-lightbox-v2';
import GestureRecognizer from 'react-native-swipe-gestures';

const height = Dimensions.get("window").height;

interface SwipeableFlatlistProps {
  navigator: any;
  images: any;
  imageKey: string;
  imageUri: string;

  activeIndex?: number;
  loaderColor?: string;
  borderColor?: string;
  thumbnailImageStyles?: any;
  mainImageStyle?: any;
  emptyImagePlaceHolderText?: string;
}


const SwipeableFlatlist = ({
  navigator,
  activeIndex = 0,
  images,
  imageKey = "id",
  imageUri = "src",
  loaderColor = "purple",
  borderColor = "purple",
  thumbnailImageStyles = {
    height: 80,
    width: 80,
    borderRadius: 7,
  },
  mainImageStyle = {
    height: height / 2.5,
  },
  emptyImagePlaceHolderText = "No Images Found"
}: SwipeableFlatlistProps): any => {
  const swipeableHorizontalFlatListRef = React.useRef();

  const [currIndex, setCurrentIndex] = React.useState(activeIndex ?? 0);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSwipeLeft = () => {
    setCurrentIndex(currIndex === 0 ? images.length - 1 : currIndex - 1);
    swipeableHorizontalFlatListRef.current.scrollToIndex({
      index: currIndex - 2 >= 0 ? currIndex - 1 : images.length - 1,
      animated: true,
    });
  };

  const onSwipeRight = () => {
    setCurrentIndex(currIndex === images.length - 1 ? 0 : currIndex + 1);
    swipeableHorizontalFlatListRef.current.scrollToIndex({
      index: currIndex + 1 === images.length ? 0 : currIndex,
      animated: true,
    });
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onLoad = () => {
    setIsLoading(true);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setCurrentIndex(index);
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
    <View>
      {
        isLoading && <ActivityIndicator color={loaderColor} />
      }
      {
        images?.length > 0 ?
        /* @ts-ignore */
        <GestureRecognizer
          onSwipeLeft={onSwipeRight}
          onSwipeRight={onSwipeLeft}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          }}
          style={styles.container}
        >
          <Lightbox navigator={navigator}>
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
        </GestureRecognizer>
        :
        <View
          style={[
            mainImageStyle,
            styles.emptyImagePlaceHolderContainer
          ]}
        >
          <Text style={styles.emptyImagePlaceHolderText}>
            {emptyImagePlaceHolderText}
          </Text>
        </View>
      }
      {/* @ts-ignore */}
      <FlatList
        ref={swipeableHorizontalFlatListRef}
        data={images}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContentContainerStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item[imageKey]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  activeImage: {
    width: '100%',
    padding: 5
  },
  emptyImagePlaceHolderText: {
    textAlign: "center",
    fontSize: 20
  },
  emptyImagePlaceHolderContainer: {
    width: '100%',
    padding: 5,
    justifyContent: "center"
  },
  flatlistContentContainerStyle: {
    marginVertical: 20
  }
});

export default SwipeableFlatlist;