import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

class BulkList  extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>BulkList</Text>
            </View>
        );
    }
}
export default BulkList;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});