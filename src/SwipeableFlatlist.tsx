import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import ActiveImage from './ActiveImage';
import ThumbnailList from './ThumbnailList';

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
  const swipeableHorizontalFlatListRef = React.useRef<any>();

  const [currIndex, setCurrentIndex] = React.useState<any>(activeIndex ?? 0);
  const [isLoading, setIsLoading] = React.useState<any>(false);

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

  const updateCurrentIndex = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <View style={styles.rootContainer}>
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
            {/* @ts-ignore */}
            <ActiveImage
              navigator={navigator}
              images={images}
              imageUri={imageUri}
              mainImageStyle={mainImageStyle}
              currIndex={currIndex}
              onLoadEnd={onLoadEnd}
              onLoad={onLoad}

            />
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
      <ThumbnailList
        ref={swipeableHorizontalFlatListRef}
        images={images}
        imageKey={imageKey}
        imageUri={imageUri}
        currIndex={currIndex}
        updateCurrentIndex={updateCurrentIndex}
        borderColor={borderColor}
        thumbnailImageStyles={thumbnailImageStyles}
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
  rootContainer: {
  }
});

export default SwipeableFlatlist;