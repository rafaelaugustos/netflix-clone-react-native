import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    Text
} from 'react-native'
import Orientation from 'react-native-orientation'
import { Header, Info } from '@/components'

class Movie extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        video: true
    }

    componentWillMount(){
        Orientation.lockToPortrait()
    }

    componentWillUpdate(){
        Orientation.lockToPortrait()
    }

    onVideo = data => {
        this.setState(data)
    }

    to = () => {
        this.props.navigation.navigate('Video', { onVideo: this.onVideo })
    }

    render(){
        return(
            <View style={styles.Container}>
                <ImageBackground
                    source={require('@/assets/images/movies/vikingfull.jpg')}
                    resizeMode="cover"
                    style={styles.Image}
                >
                    <Header 
                        navigation={this.props.navigation}
                    />

                    <TouchableOpacity 
                        style={styles.Play}
                        onPress={() => this.to()}
                    >
                        <Image
                            source={require('@/assets/images/icons/play.png')}
                            resizeMode="contain"
                            style={styles.IconPlay}
                        />
                    </TouchableOpacity>
                </ImageBackground>
                
                <Info />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Image: {
        width: '100%',
        height: 300,
        position: 'relative',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5,
        elevation: 24
    },
    Play: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: -30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 24,
        zIndex: 99
    },
    IconPlay: {
        width: 20,
        height: 20
    }
})

export default Movie