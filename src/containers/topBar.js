import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {realm} from '../services/Word';
import {ListView} from 'realm/react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class TopBar extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                word: 'rohan'
            },{
                word: 'rohan2'
            }]),
            search: false
        }
    }
    Startsearch = () => {
        this.setState({
            search: true
        })
    }
    render() {
        if(!this.state.search) {
            return (
                <View style={styles.topBar}>
                    <Text style={{fontSize: 30, color: 'white'}}> 
                        {this.props.word}
                    </Text>
                    <Icon name="search" size={30} color="white" onPress={this.Startsearch} />
                </View>
            )
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        return (
                            <Text>{rowData.word}</Text>
                        )
                    }}
                />                
            )
        }
    }
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#4dd0e1',
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});