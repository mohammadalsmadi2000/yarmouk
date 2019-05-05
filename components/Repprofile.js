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
    TouchableOpacity,
    Dimensions,
    Animated
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Home from '../components/Explore/Home'
import {  Thumbnail, Left, Body, Right,Button } from 'native-base';
import { SocialIcon } from 'react-native-elements'

import { Card, ListItem } from 'react-native-elements'
const { height, width } = Dimensions.get('window')
class RepProfile extends Component {

    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
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

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 90, backgroundColor: 'white',  borderBottomColor: '#dddddd',flexDirection:'row',justifyContent:'space-around'}}>
<View>
                      <Text style={{ fontSize: 24, fontWeight: '700' }}>
                          Hi,I'm Samer
                      </Text>
                      <Text style={{ fontWeight: '100', marginTop: 10  }}>
                          Joined in 2019

                      </Text>
                      <Text style={{ fontWeight: '100', marginTop: 10  }}>
                        Representative section of Computer Engineering.

                      </Text>
                    </View>
                    <Thumbnail  source={{ uri: 'https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg' }} />

                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', paddingHorizontal: 20 }}>
                                Education
                            </Text>

                            <View style={{ height: 50, marginTop: 20 }}>
                              <Text style={{ fontSize: 15, paddingHorizontal: 20}} numberOfLines={3}>
Studied Computer Engineering.
                              </Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: '500', paddingHorizontal: 20 }}>
                                About
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                              <Text style={{ fontSize: 15, paddingHorizontal: 20}} numberOfLines={3}>
                                  hello my name is samer and i Developed this app hello my name is samer and i Developed this app hello my name is samer and i Developed this app
                              </Text>
                            </View>

                        </View>
<View style={{flexDirection:'row', paddingHorizontal: 20}}>
  <SocialIcon
    type='twitter'
  />
  <SocialIcon
    type='facebook'
  />
</View>


                    </ScrollView>
                    <View style={{ height: 50, marginTop: 20 ,flexDirection:'row'}}>
                      <Button light style={{flex:1,justifyContent:'center'}}><Text style={{textAlign:'center'}}> Call </Text></Button>
           <Button primary style={{flex:1,justifyContent:'center'}}><Text style={{textAlign:'center',color:'white'}}> Share </Text></Button>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
export default RepProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
