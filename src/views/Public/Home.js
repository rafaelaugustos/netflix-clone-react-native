import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage, ScrollView } from 'react-native'
import { Header } from '@/components'
import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import MyList from '@/components/MyList'
import Orientation from 'react-native-orientation'

class Home extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        myList: [
            { image: require('@/assets/images/movies/vikings.jpg'), title: '', id: 1 },
            { image: require('@/assets/images/movies/got.jpg'), title: '', id: 2 },
            { image: require('@/assets/images/movies/twd8.jpg'), title: '', id: 3 },
        ],
        Popular: [
            { image: require('@/assets/images/movies/demolidor.jpg'), title: '', id: 4 },
            { image: require('@/assets/images/movies/nanatsu.jpg'), title: '', id: 5 },
            { image: require('@/assets/images/movies/cast.jpg'), title: '', id: 6 }
        ]
    }


    componentDidMount(){
        Orientation.lockToPortrait()
    }

    render(){
        return(
            <View style={styles.Container}>
                <Header />
                <ScrollView>
                    <Banner />
                    <Categories />
                    
                    <MyList 
                        title="My List"
                        data={this.state.myList}
                        navigation={this.props.navigation}
                    />

                    <MyList 
                        title="Popular on Netflix"
                        data={this.state.Popular}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default Home