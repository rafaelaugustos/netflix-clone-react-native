import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

const Header = ({navigation}) => {
    return(
        <View
            style={ styles.Header }
        >
            <TouchableOpacity 
                style={styles.ContainerLeft}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('@/assets/images/icons/left.png')}
                    resizeMode="contain"
                    style={styles.LeftButton}
                />
            </TouchableOpacity>

            <Image 
                source={require('@/assets/images/logo.png')} 
                resizeMode="contain"
                style={styles.Logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    Logo: {
        width: 80,
        height: 80
    },
    ContainerLeft: {
        position: 'absolute',
        left: 20,
        top: 50
    },
    LeftButton: {
        width: 15,
        height: 15
    }
})

export { Header }