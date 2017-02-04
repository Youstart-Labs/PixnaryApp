import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import {TopBar} from './topBar';

let {height, width} = Dimensions.get('window');

export class WordView extends Component {
    constructor(props) {
        super(props) 
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TopBar word = {this.props.word} />
                    <View style={styles.body}>
                        <View style={styles.header}>
                            <Image style={{width: width, height: height/2}} source={{uri: this.props.url}} />
                            <Text style={styles.sentence}>  
                                {this.props.sentence}
                            </Text>
                        </View>
                        <View style={styles.meaningContainer}>
                            <Text style={{fontSize: 22}}>
                                {this.props.meaning}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1
    },
    header: {

    },
    sentence: {
        fontSize: 20,
        padding: 8,
        borderRightWidth: 4,
        borderRightColor: '#4dd0e1'
    },
    meaningContainer: {
        marginTop: 30,
        margin: 10,
        padding: 10,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 2,
        backgroundColor: 'white'
    }
});