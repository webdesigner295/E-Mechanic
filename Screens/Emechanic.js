import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Emechanic = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Text>E-Mechanic</Text>
      </View>
    </SafeAreaView>
  );
};
export default Emechanic;

// import * as React from 'react';
// import { Text, View, SafeAreaView } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// export default class CarouselItem extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//           activeIndex:0,
//           carouselItems: [
//           {
//               title:"Item 1",
//               text: "This is text area for Item 1",
//           },
//           {
//               title:"Item 2",
//               text: "This is text area for Item 2",
//           },
//           {
//               title:"Item 3",
//               text: "This is text area for Item 3",
//           },
//           {
//               title:"Item 4",
//               text: "This is text area for Item 4",
//           },
//           {
//               title:"Item 5",
//               text: "This is text area for Item 5",
//           },
//         ]
//       }
//     }

//     _renderItem({item}){
//         return (
//           <View style={{
//               backgroundColor:'lightgreen',
//               borderRadius: 5,
//               height: 250,
//               padding: 50,
//               marginLeft: 25,
//               marginRight: 25, }}>
//             <Text style={{fontSize: 30}}>{item.title}</Text>
//             <Text>{item.text}</Text>
//           </View>

//         )
//     }

//     render() {
//         return (
//           <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop: 250, }}>
//             <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
//                 <Carousel
//                   layout={"default"}
//                   ref={ref => this.carousel = ref}
//                   data={this.state.carouselItems}
//                   sliderWidth={300}
//                   itemWidth={300}
//                   renderItem={this._renderItem}
//                   onSnapToItem = { index => this.setState({activeIndex:index}) } />
//             </View>
//           </SafeAreaView>
//         );
//     }
// }
