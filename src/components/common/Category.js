import React from 'react'
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const Category = (props) => {
    return(
        <TouchableOpacity style={styles.Container}>
            <ImageBackground
                source={props.imagem}
                resizeMode="cover"
                style={styles.Image}
            >
                <View style={styles.Layer}>
                    <Text style={styles.Text}>{props.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: 55,
        width: 140,
        marginLeft: 10,
        shadowColor: 'rgba(219, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 24
    },  
    Image: {
        borderRadius: 5,
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    },
    Layer: {
        backgroundColor: 'rgba(219, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export { Category }