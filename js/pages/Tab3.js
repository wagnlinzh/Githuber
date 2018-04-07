import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196f3',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
class Tab3 extends Component {
    state = {};
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab3</Text>
            </View>
        );
    }
}

export default Tab3;
