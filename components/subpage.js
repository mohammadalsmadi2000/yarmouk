import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
ImageBackground,
    TouchableOpacity,
    Dimensions,
    Animated
} from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button , CardItem,} from 'native-base';
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
const options = [
  'Cancel',
  'Apple',
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon',
  <Text style={{color: 'red'}}>Durian</Text>
]
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Card from '../components/card'

import Home from '../components/Explore/Home'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'

const { height, width } = Dimensions.get('window')
class Subpage extends Component {
  state = {
    selected: '',
    sub:this.props.navigation.state.params.sub,
  }
  showActionSheet = () => {
     this.ActionSheet.show()
   }
    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 120
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }
    handlePress = (buttonIndex) => {
       this.setState({ selected: buttonIndex })
     }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ height:120, backgroundColor: 'white', borderBottomColor: '#dddddd' }}>
                      <View style={{
                          flexDirection: 'row', padding: 10,
                          backgroundColor: 'white', marginHorizontal: 20,
                          shadowOffset: { width: 0, height: 0 },
                          shadowColor: 'black',
                          shadowOpacity: 0.2,
                          elevation: 1,
                          marginTop: Platform.OS == 'android' ? 30 : null
                      }}>
                          <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                          <View

                              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' ,justifyContent:'center'}}
                          >
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Search')}}>
                            <Text style={{color:'silver'}}>Past Paper</Text></TouchableOpacity>
                          </View>

                      </View>
                      <View
                                                style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                                            >
                                              <ScrollView horizontal={true}>
                                                <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2, marginRight: 5 }}>
                                                    <Text style={{ fontWeight: '700', fontSize: 10 }}>Calculus 101</Text>
                                                </View>
                                                <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2, marginRight: 5 }}>
                                                    <Text style={{ fontWeight: '700', fontSize: 10 }}>Calculus 102</Text>
                                                </View>
                                              </ScrollView>

                                            </View>
                                            <View
                                                                      style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity,margin:10 }}
                                                                  >
                                                                    <ScrollView horizontal={true}>
                                                                      <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2, marginRight: 5 }}>
                                                                          <Text style={{ fontWeight: '700', fontSize: 10 }}>Past Paper</Text>
                                                                      </View>
                                                                      <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2, marginRight: 5 }}>
                                                                          <Text style={{ fontWeight: '700', fontSize: 10 }}>Exam schedule</Text>
                                                                      </View>
                                                                      <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2, marginRight: 5 }}>
                                                                          <Text style={{ fontWeight: '700', fontSize: 10 }}>Questions</Text>
                                                                      </View>
                                                                    </ScrollView>

                                                                  </View>
                  </View>

                    <ScrollView
                        scrollEventThrottle={16}

                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {this.state.sub}
                            </Text>

<View style={{ paddingTop: 20 ,justifyContent:'center',alignItems:'center'}}>
                                <ScrollView

                                >

                                  <Card  cat="Past Paper" name="Calculus 101"  text="ksjdf;dfjl;sdkjflsdjfs hjlbhkjb kjhkjlhlj jll;kjlkj  lk;jl;kjlk;j kjllj dl;kfjslj" />
                                  <Card  cat="Questions" name="Calculus 102"  text="ksjdf;dfjl;sdkjflsdjfs hjlbhkjb kjhkjlhlj jll;kjlkj  lk;jl;kjlk;j kjllj dl;kfjslj" />

                                </ScrollView>
                            </View>

</View>


                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Subpage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
