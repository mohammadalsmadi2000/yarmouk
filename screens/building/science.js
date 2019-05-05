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
import Category from '../../components/Explore/Category'
import Tag from '../../components/Explore/Tag'
import Home from '../../components/Explore/Home'
import Docsc from '../../components/docscroll'
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right  ,Card, CardItem,Fab} from 'native-base';
import { Constants, MapView, Location, Permissions } from 'expo';
const ASPECT_RATIOS = width / height;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIOS;

import {   Button } from 'react-native-elements'
const { height, width } = Dimensions.get('window')
class Science extends Component {
  state = {
      mapRegion: { latitude: 32.540812, longitude:35.852747,   latitudeDelta: 0.003,longitudeDelta: 0.003},
      locationResult: null,
      location: {coords: { latitude: 32.540812, longitude:35.852747}},
    };
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

                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Doctors
                            </Text>

                            <View style={{ height: 100, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
<Docsc
name="Mohammad"
/>
<Docsc
name="Ryad"
/>
<Docsc
name="Yousef"
/>
<Docsc
name="Sami"
/>
<Docsc
name="sanaa"
/>
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Faculty of Science Gallery
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    Explore Science Building

                                </Text>
                                <ScrollView horizontal={true} pageEnabled={true}>
                                  <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>

                                      <CardItem cardBody>
                                        <Image source={{uri: 'http://yumn.yu.edu.jo/images/13.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                                      </CardItem>

                                      <CardItem>
                                        <Left>
                                            <Text style={{paddingLeft:10,paddingRight:10,fontSize:20,color:'black',fontWeight:'700'}}>View of Building</Text>
                                        </Left>


                                      </CardItem>


                                    </Card>
                              </ScrollView>

                            </View>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Representatives Sections
                            </Text>
                            <View style={{ height: 100, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
<Docsc
name="Mohammad"
/>
<Docsc
name="Ahmed"
/>
<Docsc
name="Yousef"
/>
<Docsc
name="Sami"
/>
<Docsc
name="sanaa"
/>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{ height: 250, marginTop: 20 }}>

                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            Location
                        </Text>
                        <MapView
                                style={{ alignSelf: 'stretch', height: 200 }}
                                region={this.state.mapRegion}

                              >
                          <MapView.Marker
                            coordinate={this.state.location.coords}
                            title="My Marker"
                              onCalloutPress={()=>{this.props.navigation.navigate('map')}}
                            description="Some description"
                          />
                              </MapView>
</View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Science;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
