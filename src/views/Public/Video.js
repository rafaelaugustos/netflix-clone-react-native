import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import VideoView from 'react-native-video'
import Orientation from 'react-native-orientation'

class Video extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        Orientation.lockToLandscape()
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

    render(){
        return(
            <View style={styles.Container}>
                <VideoView
                    controls
                    source={require('@/assets/videos/01.mp4')}
                    style={styles.backgroundVideo}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    onBuffer={this.onBuffer}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#000'
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