import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Animated
} from 'react-native'

const WIDTH = Dimensions.get('window').width

class CardBanner extends Component {
    constructor(props){
        super(props)

        this.state = {
            divider: (80 * WIDTH) / 100,
            value: new Animated.Value(130)
        }
    }

    componentDidMount(){
        if(this.props.isCurrent){
            this.ShowAnimation(160)
        }
    }

    componentWillReceiveProps(){
        if(this.props.isCurrent){
            this.ShowAnimation(160)
        }else{
            this.ShowAnimation(130)
        }
    }

    ShowAnimation = (value) => {
        Animated.timing(
            this.state.value, {
                toValue: value,
                duration: 100
            }
        ).start()
    }

    render(){
        return(
            <View 
                style={styles.Wrap}
            >
                <Animated.View
                    style={{
                        height: this.state.value,
                        borderRadius: 10,
                        overflow: 'hidden'
                    }}
                >
                    <ImageBackground
                        source={this.props.Image}
                        resizeMode="cover"
                        style={[
                            styles.Image,
                            {
                                width: this.state.divider
                            }
                        ]}
                    >
                        <Text style={styles.Title}>{this.props.Title}</Text>
                    </ImageBackground>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Wrap: {
        marginLeft: 10,
        marginRight: 10,
        height: 160,
        justifyContent: 'center'
    },
    Image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    Title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    Active: {

    }
})

export { CardBanner }