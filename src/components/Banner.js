import React, { Component } from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native'
import { CardBanner } from '@/components'

const WIDTH = Dimensions.get('window').width
const DIVIDER = (80 * WIDTH) / 100

class Banner extends Component {
    constructor(props){
        super(props)

        this.state = {
            positionScroll: 0,
            movies: [
                { image: require('@/assets/images/movies/supernatural.jpg'), title: 'SUPERNATURAL', ref: 'super'},
                { image: require('@/assets/images/movies/himym.jpeg'), title: 'HOW I MET YOUR MOTHER', ref: 'super'},
                { image: require('@/assets/images/movies/friends.jpg'), title: 'FRIENDS', ref: 'super'}
            ]
        }
    }

    handleScroll = (e) => {
        this.setState({positionScroll: e.nativeEvent.contentOffset.x})
        console.log(e)
        console.log(e.nativeEvent.contentOffset.x)
    }

    _movies = () => {
        return this.state.movies.map((item, index) => 
            <CardBanner 
                key={item.index}
                Image={item.image}
                Title={item.title}
                isCurrent={false}
            />
        )
    }

    render(){
        return(
            <View
                style={styles.Container}
            >
                <ScrollView 
                    horizontal
                    onScroll={this.handleScroll}
                    showsHorizontalScrollIndicator={false}
                >
                    
                    {this._movies()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 180,
        width: '100%'
    }
})

export default Banner