import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const TicketPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../images/Rectangle 2.png')} style={styles.image} />
                <Image source={require('../images/Rectangle 3.png')} style={styles.image} />
                <Image source={require('../images/Rectangle 2.png')} style={styles.image} />
                <Image source={require('../images/Rectangle 15.png')} style={styles.rectangle15} />
                <Image source={require('../images/logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.text}>
                TicketPage
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    rectangle15: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 10,
        left: 20,
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 20,
        left: 30,
    },
    text: {
        fontSize: 24,
    },
});

export default TicketPage;
