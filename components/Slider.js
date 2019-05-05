import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        marginBottom:15,
        width
    },

  wrapper: {
  },
}

export default class extends Component {
    constructor(props){
        super(props)

        this.state = {
           width: '99%',
            imagesSlider: [

              { uri:'http://langcenter.yu.edu.jo/sites/default/files/slider_images/yu%20%281%29.jpg' },
                  { uri:'https://cdnimgen.royanews.tv/imageserv/Size728Q40/news/20190414/17298.JPG' },

            ]
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                width: '100%'
            });
        });
    }
    render(){
        return (
          <View>
            <Swiper  height={200}  width={this.state.width} autoplay>

            {
              this.state.imagesSlider.map((item, i) => <Slider
                uri={item}
                key={i}
                                                       />)
                }

                </Swiper>
            </View>
        )
    }
}
