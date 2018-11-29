import React, { Component } from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import { Category } from '@/components'

class Categories extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: [
                { category: 'Comedy', title: 'COMEDY', image: require('@/assets/images/movies/friends.jpg') },
                { categoty: 'Terror', title: 'TERROR', image: require('@/assets/images/movies/supernatural.jpg') },
                { category: 'Romance', title: 'ROMANCE', image: require('@/assets/images/movies/himym.jpeg') }
            ]
        }
    }

    _categories = () => {
        return this.state.categories.map(item =>
            <Category
                key={item.title}
                imagem={item.image}
                title={item.title}
            />
        )
    }

    render(){
        return(
            <View style={styles.Container}>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    { this._categories() }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 90
    }
})

export default Categories