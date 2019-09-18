import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default class LabelFormIklan extends React.Component {
    render() {

        const {label} = this.props
        return (
            <Text style={styles.textLabel}>{label}</Text>
        )
    }
}


const styles = StyleSheet.create({
    textLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 10
    },
})