import React, { Component, Fragment } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import VideoView from 'react-native-video'
import Orientation from 'react-native-orientation'

class Video extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        isLoading: true
    }

    componentDidMount(){
        Orientation.lockToLandscape()

        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
    }

    onBuffer = (e) => {
        console.log(e)
    }

    onProgress = (e) => {
        console.log(e)
    }

    back = () => {
        const { navigation } = this.props
        navigation.goBack()
        navigation.state.params.onVideo({video: false})
    }

    _video = () => {
        return(
            <VideoView
                controls
                source={require('@/assets/videos/01.mp4')}
                style={styles.backgroundVideo}
                ref={(ref) => {
                    this.player = ref
                }}
                poster="https://hostingfotos.files.wordpress.com/2017/01/netflix.gif"
                posterResizeMode="cover"
                onBuffer={this.onBuffer}
            />
        )
    }

    _loading = () => {
        return(
            <Fragment>
                <Image 
                    source={require('@/assets/images/logo.png')}
                    resizeMode="contain"
                    style={{width: 200, height: 100}}
                />
            </Fragment>
        )
    }

    render(){
        return(
            <View style={styles.Container}>
                {
                    this.state.isLoading ? this._loading() : this._video()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})

export default Video