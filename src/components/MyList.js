import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native'
import { Card } from '@/components'


class MyList extends Component {
    constructor(props){
        super(props)
    }

    _myList = () => {
        return this.props.data.map(item => 
            <Card
                key={item.id}
                Image={item.image}
                Title={item.title}
                onPress={() => this.props.navigation.navigate('Movie')}
            />    
        )
    }

    render(){
        return(
            <View style={styles.Container}>
                <Text style={styles.Title}>{this.props.title}</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    { this._myList() }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 230,
        marginTop: 10
    },
    Title: {
        marginLeft: 10,
        fontWeight: 'bold',
        marginBottom: 15
    }
})

export default MyList