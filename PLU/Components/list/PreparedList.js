import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

class PreparedList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PreparedList</Text>
            </View>
        );
    }
}
export default PreparedList;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});