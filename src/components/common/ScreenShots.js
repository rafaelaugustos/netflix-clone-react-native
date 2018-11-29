import React  from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native'

const ScreenShots = () => {
    return(
        <View style={{widht: '100%', marginTop: 15}}>
            <Text style={styles.Title}>Screenshots</Text>

            <ScrollView
                horizontal
            >
                <Image
                    source={require('@/assets/images/screen/1.jpeg')}
                    resizeMode="cover"
                    style={styles.Image}
                />

                <Image
                    source={require('@/assets/images/screen/2.jpg')}
                    resizeMode="cover"
                    style={styles.Image}
                />

                <Image
                    source={require('@/assets/images/screen/3.jpg')}
                    resizeMode="cover"
                    style={styles.Image}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Image: {
        width: 130,
        height: 80,
        borderRadius: 10,
        marginLeft: 10
    },
    Title: {
        marginLeft: 10,
        fontWeight: 'bold',
        marginBottom: 15
    }
})

export { ScreenShots }