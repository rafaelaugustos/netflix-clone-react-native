import React, { PureComponent } from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native'

class Card extends PureComponent {
    render(){
        return(
            <TouchableOpacity 
                style={styles.Wrap}
                onPress={this.props.onPress}
            >
                <View
                    style={{
                        borderRadius: 5,
                        overflow: 'hidden'
                    }}
                >
                    <ImageBackground
                        source={this.props.Image}
                        resizeMode="cover"
                        style={[
                            styles.Image
                        ]}
                    >
                        <Text style={styles.Title}>{this.props.Title}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Wrap: {
        marginLeft: 10,
        marginRight: 10,
        height: 180,
        width: 130,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5,
        elevation: 24
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

export { Card }