<h1 align="center">Welcome to react-native-gallery-view 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-native-gallery-view" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-native-gallery-view.svg">
  </a>
  <a href="https://github.com/Harikarthyk/react-native-gallery-view#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Harikarthyk/react-native-gallery-view/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
<!--   <a href="https://github.com/Harikarthyk/react-native-gallery-view/blob/master/LICENSE" target="_blank"> -->
<!--     <img alt="License: ISC" src="https://img.shields.io/github/license/HariKarthyk/react-native-gallery-view" /> -->
<!--   </a> -->
</p>

> Gallery View for Images in React Native for both IOS and Android 

<br>
 
> Note : Install react-native-lightbox also

### 🏠 [Homepage](https://github.com/Harikarthyk/react-native-gallery-view)

## Install

```sh
npm install react-native-gallery-view
```

## Usage

```javascript
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { Gallery } from 'react-native-gallery-view';

export default App = ({ navigation, route, navigator }) => {
  const [images, setImages] = useState([{
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpGmKrfBFE90_MyomlXre9OJhLyjMvfGm5w&usqp=CAU",
    id: "12345"
  }, {
    src: "https://st.depositphotos.com/1007995/1274/i/600/depositphotos_12746726-stock-photo-fashion-man-wearing- sunglasses-thinking.jpg",
    id: "12346"
  }, {
    src: "https://i.pinimg.com/736x/36/fc/e9/36fce9ed325c3303d858b01257bd76c3.jpg",
    id: "12347"
  }]);

  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
      
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
     >
        {/* Basic Usage */}
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginVertical: 20
          }}
        >
          Basic Usage for React Native Gallery View
        </Text>
        <Gallery
          images={images}
          activeIndex={0}
          navigator={navigator}
        />

        {/* Basic Usage */}
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginVertical: 20
          }}
        >
          Customized usage of React Native Gallery View
        </Text>
        <Gallery
          thumbnailImageStyles={{
            height: 100,
            width: 100,
            borderRadius: 15,
          }}
          mainImageStyle={{
            height: 200,
          }}
          loaderColor="yellow"
          borderColor="orange"
          images={images}
          activeIndex={0}
          navigator={navigator}
          noImageFoundText={"No Image found custom text"}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

```

## Demo
[![Watch the video](https://user-images.githubusercontent.com/54505967/132284459-d1768cc4-8d53-4e55-b855-5728a0c5ab5f.png)](https://user-images.githubusercontent.com/54505967/132284398-4b8edb26-5141-46ba-90c0-0fe8b76b9a0f.mp4)


### list of available props for customization SliderBox:

| Props  |  Value Type | Description |
| :------------ |:---------------:| -----:|
| loaderColor    | String Eg. "#000000" | Color for Lazy Loader in Main Image. default color is black  |
| borderColor      | String Eg. "red"        |   border color for the active Thumbnail Image. Default is red |
| thumbnailImageStyles | Object Eg. {height: 80 , width : 80}        |  Styling for the thumbnail images |
| mainImageStyle | Object Eg. {height: 250 , width : "90%"}        |  Styling for the Main image |
| noImageFoundText | String Eg. "No Images found"      |  Custom Text for Empty Images |



## Author

👤 **Hari Karthyk (harikarthyk1407@gmail.com)**

* Website: https://harikarthyk.xyz/
* Github: [@HariKarthyk](https://github.com/HariKarthyk)
* LinkedIn: [@harikarthyk](https://linkedin.com/in/harikarthyk)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Harikarthyk/react-native-gallery-view/issues). You can also take a look at the [contributing guide](https://github.com/Harikarthyk/react-native-gallery-view/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/harikarthyk">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2021 [Hari Karthyk (harikarthyk1407@gmail.com)](https://github.com/HariKarthyk).<br />
This project is [ISC](https://github.com/Harikarthyk/react-native-gallery-view/blob/master/LICENSE) licensed.

