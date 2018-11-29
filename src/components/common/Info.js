import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'
import { ScreenShots } from '@/components'


const Info = () => {
    const Star = () => {
        return [1, 2, 3, 4, 5].map((item, index) => 
            <Image
                source={require('@/assets/images/icons/star_full.png')}
                resizeMode="contain"
                style={styles.Star}
            />
        )
    }

    return(
        <View>
            <View style={styles.ContainerTitle}>
                <Text style={styles.Title}>VIKING SEASON 5</Text>
                <Text style={styles.Categories}>Action, Series</Text>
                <View style={styles.StarContainer}>
                    { Star() }
                </View>

                <View
                    style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center', width: '100%'}}
                >
                    <View style={styles.ContainerInfos}>
                        <Text style={styles.InfosLow}>Year</Text>
                        <Text style={styles.InfosBol}>2018</Text>
                    </View>

                    <View style={styles.ContainerInfos}>
                        <Text style={styles.InfosLow}>Country</Text>
                        <Text style={styles.InfosBol}>Ireland</Text>
                    </View>

                    <View style={styles.ContainerInfos}>
                        <Text style={styles.InfosLow}>Length</Text>
                        <Text style={styles.InfosBol}>50min</Text>
                    </View>
                </View>
                <View style={styles.Storyline}>
                    <Text style={styles.StorylineText}>The adventures of a Ragnar Lothbrok: the greatest hero of his age. The series tells the saga of Ragnar's band of Viking brothers and his family as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods: legend has it that he was a direct descendant of Odin, the god of war and warriors.</Text>
                </View>
            </View>
            <ScreenShots />
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerTitle: {
        alignItems: 'center',
        marginTop: 60
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 19
    },
    Categories: {
        color: '#aaa',
        fontWeight: 'bold',
        fontSize: 12
    },  
    Star: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    StarContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    ContainerInfos: {
        alignItems: 'center',
        marginRight: 25
    },
    InfosLow: {
        color: '#aaa',
        fontSize: 12,
        fontWeight: 'bold'
    },
    InfosBol: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16
    },
    Storyline: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15
    },
    StorylineText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center'
    }
})

export { Info }